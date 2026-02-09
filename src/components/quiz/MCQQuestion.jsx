
import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Lightbulb, ArrowRight, Bookmark, CircleHelp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MCQQuestion = ({ question, onNext, onBookmark, isBookmarked }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    // Reset state when question changes
    useEffect(() => {
        setSelectedOption(null);
        setIsSubmitted(false);
        setShowWarning(false);
    }, [question.id]);

    const handleOptionSelect = (optionId) => {
        if (isSubmitted) return;
        setSelectedOption(optionId);
        if (showWarning) setShowWarning(false);
    };

    const handleSubmit = () => {
        if (!selectedOption) {
            setShowWarning(true);
            return;
        }
        setIsSubmitted(true);
    };

    return (
        <div className="question-card">
            {/* Header / Meta */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    color: '#94a3b8',
                    letterSpacing: '0.1em',
                    fontWeight: 'bold'
                }}>
                    {question.topic} • {question.difficulty}
                </span>
                <button
                    onClick={() => onBookmark(question.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: isBookmarked ? '#fbbf24' : '#64748b' }}
                    aria-label={isBookmarked ? "Remove bookmark" : "Bookmark question"}
                >
                    <Bookmark fill={isBookmarked ? "currentColor" : "none"} size={20} />
                </button>
            </div>

            <h2 className="question-text">{question.question}</h2>

            {/* Options */}
            <div className="options-list">
                {question.options.map((option) => {
                    let stateClass = "";
                    if (isSubmitted) {
                        if (option.id === question.correctAnswer) stateClass = "correct";
                        else if (selectedOption === option.id) stateClass = "incorrect";
                    } else if (selectedOption === option.id) {
                        stateClass = "selected";
                    }

                    return (
                        <div
                            key={option.id}
                            className={`option-item ${stateClass}`}
                            onClick={() => handleOptionSelect(option.id)}
                            role="radio"
                            aria-checked={selectedOption === option.id}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') handleOptionSelect(option.id);
                            }}
                        >
                            <div className="option-marker">{option.id}</div>
                            <div style={{ flex: 1 }}>{option.text}</div>
                            {stateClass === 'correct' && <CheckCircle size={20} className="text-success" style={{ color: '#10b981' }} />}
                            {stateClass === 'incorrect' && <XCircle size={20} className="text-error" style={{ color: '#ef4444' }} />}
                        </div>
                    );
                })}
            </div>

            {/* Warning Toast */}
            {showWarning && (
                <div style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CircleHelp size={16} /> Please select an option first.
                </div>
            )}

            {/* Action Bar */}
            <div className="action-bar">
                {!isSubmitted ? (
                    <button
                        className="btn-primary"
                        onClick={handleSubmit}
                    >
                        Check Answer
                    </button>
                ) : (
                    <button className="btn-primary" onClick={onNext}>
                        Next Question <ArrowRight size={18} />
                    </button>
                )}
            </div>

            {/* Feedback Section */}
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="explanation-container"
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <Lightbulb color="#fbbf24" />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                                {selectedOption === question.correctAnswer ? "Correct!" : "Incorrect"}
                            </h3>
                        </div>

                        <p style={{ marginBottom: '1rem', color: '#e2e8f0', borderLeft: '4px solid #8b5cf6', paddingLeft: '1rem' }}>
                            <strong>Concept:</strong> {question.explanation.concept}
                        </p>

                        <div className="explanation-section">
                            <div className="section-title">Detailed Solution</div>
                            {question.explanation.detailed.map((step, i) => (
                                <p key={i} style={{ marginBottom: '0.5rem', color: '#cbd5e1' }}>{step}</p>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MCQQuestion;
