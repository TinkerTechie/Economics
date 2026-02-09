
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Lock, PlayCircle, Star, Loader2 } from 'lucide-react';
import { api } from '../services/api';

const MockTests = () => {
    const navigate = useNavigate();
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const data = await api.getMockTests();
                setTests(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTests();
    }, []);

    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="page-title">Mock Tests</h1>
                <p className="page-subtitle">Simulate the real IIT JAM exam environment.</p>
            </header>

            {loading ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8' }}>
                    <Loader2 className="animate-spin" /> Loading tests...
                </div>
            ) : (
                <div className="mocks-grid">
                    {/* Render tests from the API */}
                    {tests.map((test) => (
                        <div key={test.id} className="mock-card">
                            <div className="mock-info">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3>{test.title}</h3>
                                    {test.id === 'mock_001' && <Star size={16} className="text-warning" fill="#fbbf24" />}
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0.5rem 0 1rem', lineHeight: '1.4' }}>
                                    {test.description}
                                </p>
                                <div className="mock-meta">
                                    <span><Clock size={14} /> {test.duration} mins</span>
                                    <span>•</span>
                                    <span>{test.questionCount} Questions</span>
                                </div>
                            </div>

                            <div className="mock-action">
                                <button className="btn-primary" onClick={() => navigate(`/mock-session/${test.id}`)}>
                                    <PlayCircle size={18} /> Start Test
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Placeholder for future tests */}
                    <div className="mock-card" style={{ opacity: 0.6 }}>
                        <div className="mock-info">
                            <h3>IIT JAM 2023 Paper</h3>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0.5rem 0 1rem' }}>
                                Full past year paper simulation.
                            </p>
                            <div className="mock-meta">
                                <span><Clock size={14} /> 180 mins</span>
                                <span>•</span>
                                <span>60 Questions</span>
                            </div>
                        </div>
                        <div className="mock-action">
                            <button className="btn-locked" disabled>
                                <Lock size={16} /> Coming Soon
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default MockTests;
