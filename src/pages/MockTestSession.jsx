
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { Timer, ArrowRight, ArrowLeft, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";

const MockTestSession = () => {
    const { testId } = useParams();
    const navigate = useNavigate();

    const [testConfig, setTestConfig] = useState(null);
    const [testQuestions, setTestQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Test State
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(null); // Init as null to avoid race condition
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [topicAnalysis, setTopicAnalysis] = useState({});
    const timerRef = useRef(null);

    // Fetch Test Data
    useEffect(() => {
        const fetchTest = async () => {
            try {
                const data = await api.getMockTestById(testId);
                setTestConfig(data);
                setTestQuestions(data.questions);
                // Initialize timer only after successful fetch
                setTimeLeft(data.duration * 60);
            } catch (err) {
                console.error(err);
                setError("Failed to load test. It might not exist.");
            } finally {
                setLoading(false);
            }
        };
        fetchTest();
    }, [testId]);

    // Timer Logic
    useEffect(() => {
        if (loading || isFinished || timeLeft === null) return;

        if (timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current);
                        handleSubmitTest();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [loading, isFinished, timeLeft === null]); // Only re-run if these change meaningfully

    const formatTime = (seconds) => {
        if (seconds === null) return "--:--";
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleAnswerSelect = (val) => {
        if (isFinished) return;
        const currentQuestion = testQuestions[currentQIndex];

        if (currentQuestion.type === "MSQ") {
            const currentSelection = answers[currentQuestion.id] || [];
            if (currentSelection.includes(val)) {
                setAnswers({
                    ...answers,
                    [currentQuestion.id]: currentSelection.filter((item) => item !== val),
                });
            } else {
                setAnswers({
                    ...answers,
                    [currentQuestion.id]: [...currentSelection, val],
                });
            }
        } else {
            setAnswers({ ...answers, [currentQuestion.id]: val });
        }
    };

    const handleSubmitTest = async () => {
        setIsFinished(true);
        if (timerRef.current) clearInterval(timerRef.current);

        // Calculate Score & Topic Analysis
        let calculatedScore = 0;
        const analysis = {};

        testQuestions.forEach(q => {
            const topic = q.topic || 'General';
            if (!analysis[topic]) {
                analysis[topic] = { total: 0, correct: 0 };
            }
            analysis[topic].total += 1;

            const userAnswer = answers[q.id];
            if (!userAnswer) return;

            let isCorrect = false;
            if (q.type === 'MCQ' || q.type === 'NAT') {
                if (String(userAnswer).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase()) isCorrect = true;
            } else if (q.type === 'MSQ') {
                const sortedUser = [...userAnswer].sort();
                const sortedCorrect = [...q.correctAnswer].sort();
                if (JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect)) isCorrect = true;
            }

            if (isCorrect) {
                analysis[topic].correct += 1;
                calculatedScore += (q.type === 'MSQ' ? 2 : 1);
            }
        });

        // Calculate percentages
        const finalAnalysis = {};
        Object.keys(analysis).forEach(topic => {
            finalAnalysis[topic] = Math.round((analysis[topic].correct / analysis[topic].total) * 100);
        });

        setScore(calculatedScore);
        setTopicAnalysis(finalAnalysis);

        // Op: Send to API
        await api.submitTest(testId, answers);
    };

    const getRecommendation = (topic) => {
        const mapping = {
            'Consumer Theory': 'wa_consumer_001',
            'Production & Cost': 'wa_prod_001',
            'IS-LM Model': 'wa_islm_001',
            'Microeconomics': 'wa_consumer_001',
            'Macroeconomics': 'wa_islm_001',
            'Keynesian Theory': 'wa_islm_001',
            'Market Structures': 'section_micro_001',
            'Statistics': 'section_stats_001',
            'Indian Economy': 'section_ie_001',
            'Inflation & Unemployment': 'section_macro_001'
        };
        return mapping[topic];
    };

    if (loading) return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', gap: '1rem' }}>
            <Loader2 className="animate-spin" /> Loading Test Environment...
        </div>
    );

    if (error) return (
        <div className="page-container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
            <AlertTriangle size={48} className="text-error" style={{ margin: '0 auto 1rem', display: 'block' }} />
            <h2>{error}</h2>
            <button className="btn-secondary" onClick={() => navigate('/mocks')} style={{ marginTop: '2rem', width: 'auto' }}>
                Back to Mocks
            </button>
        </div>
    );

    const currentQuestion = testQuestions[currentQIndex];

    return (
        <div className="page-container" style={{ maxWidth: '1200px' }}>

            {!isFinished ? (
                <div style={{ display: 'flex', gap: '2rem', height: '80vh' }}>

                    {/* Left Panel: Question Area */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div>
                                <h2 style={{ fontSize: '1.2rem', color: '#f8fafc', margin: 0 }}>{testConfig?.title}</h2>
                                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Question {currentQIndex + 1} of {testQuestions.length}</span>
                            </div>

                            <div style={{ background: timeLeft < 300 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', border: timeLeft < 300 ? '1px solid #ef4444' : 'none' }}>
                                <Timer size={18} className={timeLeft < 300 ? "text-error" : "text-warning"} />
                                {formatTime(timeLeft)}
                            </div>
                        </div>

                        {/* Question Card */}
                        <div className="question-card" style={{ marginTop: 0, flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span className="badge" style={{ background: '#8b5cf6', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                                    {currentQuestion.type}
                                </span>
                                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{currentQuestion.topic}</span>
                            </div>

                            <h3 className="question-text" style={{ fontSize: '1.3rem' }}>{currentQuestion.question}</h3>

                            {/* Input Area */}
                            <div style={{ flex: 1 }}>
                                {currentQuestion.type === "NAT" ? (
                                    <div style={{ marginTop: '2rem' }}>
                                        <label style={{ display: 'block', marginBottom: '1rem', color: '#cbd5e1' }}>Enter your numerical answer:</label>
                                        <input
                                            type="number"
                                            placeholder="Type answer here..."
                                            className="nav-item"
                                            style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', width: '100%', padding: '1rem', fontSize: '1.2rem' }}
                                            value={answers[currentQuestion.id] || ''}
                                            onChange={(e) => handleAnswerSelect(e.target.value)}
                                        />
                                    </div>
                                ) : (
                                    <div className="options-list">
                                        {currentQuestion.options.map(opt => {
                                            const isSelected = currentQuestion.type === 'MSQ'
                                                ? (answers[currentQuestion.id] || []).includes(opt.id)
                                                : answers[currentQuestion.id] === opt.id;

                                            return (
                                                <div
                                                    key={opt.id}
                                                    className={`option-item ${isSelected ? 'selected' : ''}`}
                                                    onClick={() => handleAnswerSelect(opt.id)}
                                                >
                                                    <div className="option-marker" style={{ borderRadius: currentQuestion.type === 'MSQ' ? '4px' : '50%' }}>
                                                        {opt.id}
                                                    </div>
                                                    <div style={{ flex: 1 }}>{opt.text}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* Nav Buttons */}
                            <div className="action-bar" style={{ justifyContent: 'space-between', marginTop: 'auto' }}>
                                <button
                                    className="btn-secondary"
                                    style={{ width: 'auto', padding: '0.8rem 1.5rem' }}
                                    disabled={currentQIndex === 0}
                                    onClick={() => setCurrentQIndex(prev => prev - 1)}
                                >
                                    <ArrowLeft size={18} /> Previous
                                </button>

                                {currentQIndex === testQuestions.length - 1 ? (
                                    <button
                                        className="btn-primary"
                                        style={{ width: 'auto', padding: '0.8rem 2rem', background: '#10b981' }}
                                        onClick={handleSubmitTest}
                                    >
                                        Submit Test
                                    </button>
                                ) : (
                                    <button
                                        className="btn-primary"
                                        style={{ width: 'auto', padding: '0.8rem 1.5rem' }}
                                        onClick={() => setCurrentQIndex(prev => prev + 1)}
                                    >
                                        Next <ArrowRight size={18} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Question Palette */}
                    <div className="sidebar" style={{ width: '300px', borderRadius: '1.5rem', height: 'fit-content', background: 'var(--color-surface)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'white', fontSize: '1.1rem' }}>Question Palette</h3>

                        {/* Legend */}
                        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: '#94a3b8' }}><div style={{ width: 10, height: 10, background: '#10b981', borderRadius: 2 }}></div> Answered</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: '#94a3b8' }}><div style={{ width: 10, height: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2 }}></div> Skipped</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: '#94a3b8' }}><div style={{ width: 10, height: 10, border: '2px solid #8b5cf6', borderRadius: 2 }}></div> Current</div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.8rem', maxHeight: '400px', overflowY: 'auto' }}>
                            {testQuestions.map((q, idx) => {
                                const isAnswered = answers[q.id] !== undefined && (Array.isArray(answers[q.id]) ? answers[q.id].length > 0 : String(answers[q.id]).trim() !== '');
                                const isCurrent = idx === currentQIndex;

                                return (
                                    <button
                                        key={q.id}
                                        onClick={() => setCurrentQIndex(idx)}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '8px',
                                            border: isCurrent ? '2px solid #8b5cf6' : '1px solid rgba(255,255,255,0.1)',
                                            background: isAnswered ? '#10b981' : 'rgba(255,255,255,0.05)',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        {idx + 1}
                                    </button>
                                )
                            })}
                        </div>

                        <button className="btn-secondary" style={{ width: '100%', marginTop: '2rem' }} onClick={handleSubmitTest}>
                            Finish and Submit
                        </button>
                    </div>

                </div>
            ) : (
                /* Result Screen */
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                    <div style={{ width: 80, height: 80, background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                        <CheckCircle size={40} className="text-success" />
                    </div>
                    <h1 className="page-title">Test Submitted!</h1>
                    <p className="page-subtitle" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
                        You have completed: <span style={{ color: 'white' }}>{testConfig?.title}</span>
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                        <div className="stat-card" style={{ flexDirection: 'column', width: '200px', cursor: 'default' }}>
                            <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Your Score</span>
                            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>{score}</span>
                        </div>
                        <div className="stat-card" style={{ flexDirection: 'column', width: '200px', cursor: 'default' }}>
                            <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Accuracy</span>
                            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                                {Math.round((score / testQuestions.length) * 100)}%
                            </span>
                        </div>
                    </div>

                    {/* Topic Analysis & Recommendations */}
                    <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'left', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <AlertTriangle size={20} className="text-warning" /> Performance Analysis
                        </h3>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {Object.entries(topicAnalysis).map(([topic, pct]) => {
                                const isWeak = pct < 60;
                                const recommendationId = getRecommendation(topic);

                                return (
                                    <div key={topic} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem' }}>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', paddingRight: '2rem' }}>
                                                <span>{topic}</span>
                                                <span style={{ color: isWeak ? '#ef4444' : '#10b981', fontWeight: 'bold' }}>{pct}%</span>
                                            </div>
                                            <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginRight: '2rem' }}>
                                                <div style={{ height: '100%', width: `${pct}%`, background: isWeak ? '#ef4444' : '#10b981', borderRadius: '2px' }}></div>
                                            </div>
                                        </div>
                                        {isWeak && recommendationId && (
                                            <button
                                                className="btn-primary"
                                                style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem', background: '#8b5cf6' }}
                                                onClick={() => navigate(`/mock/session/${recommendationId}`)}
                                            >
                                                Take Weak-Area Test
                                            </button>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button className="btn-secondary" style={{ width: 'auto' }} onClick={() => window.location.reload()}>
                            Retake Test
                        </button>
                        <button className="btn-primary" style={{ width: 'auto' }} onClick={() => navigate('/dashboard')}>
                            Return to Dashboard
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MockTestSession;
