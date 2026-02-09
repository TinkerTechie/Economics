
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useQuiz } from '../context/QuizContext';
import { Play, TrendingUp, Clock, AlertCircle, ArrowRight, BookOpen } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { stats } = useQuiz();

    return (
        <div className="page-container dashboard-layout">
            {/* Hero Section */}
            <section className="hero-card">
                <div>
                    <h1 className="hero-title">Welcome Back, {user?.name?.split(' ')[0] || 'Student'}</h1>
                    <p className="hero-subtitle">Ready to master Economics today?</p>
                </div>
                <div className="hero-stats">
                    <div className="mini-stat">
                        <span className="label">Accuracy</span>
                        <span className="value">{stats.accuracy}%</span>
                    </div>
                    <div className="mini-stat">
                        <span className="label">Solved</span>
                        <span className="value">{stats.totalSolved}</span>
                    </div>
                </div>
            </section>

            {/* Main Stats Grid */}
            <section className="stats-grid">
                <div className="stat-card" onClick={() => navigate('/practice')}>
                    <div className="icon-box primary">
                        <Play fill="currentColor" size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>Start Practice</h3>
                        <p>Quiz & Numerical Modes</p>
                    </div>
                    <ArrowRight className="arrow-icon" size={20} />
                </div>

                <div className="stat-card" onClick={() => navigate('/topics')}>
                    <div className="icon-box" style={{ background: 'rgba(236, 72, 153, 0.2)', color: '#ec4899' }}>
                        <BookOpen size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>Browse Topics</h3>
                        <p>Chapter-wise Study</p>
                    </div>
                    <ArrowRight className="arrow-icon" size={20} />
                </div>

                <div className="stat-card" onClick={() => navigate('/analytics')}>
                    <div className="icon-box secondary">
                        <TrendingUp size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>Analytics</h3>
                        <p>Check Progress</p>
                    </div>
                    <ArrowRight className="arrow-icon" size={20} />
                </div>
            </section>

            {/* Recommended Focus */}
            <section className="focus-section">
                <div className="section-header">
                    <AlertCircle size={20} className="text-warning" />
                    <h2>Recommended Focus</h2>
                </div>

                <div className="focus-list">
                    {stats.topicAccuracy && Object.entries(stats.topicAccuracy).length > 0 ? (
                        Object.entries(stats.topicAccuracy).map(([topic, acc]) => (
                            acc < 70 && (
                                <div key={topic} className="focus-item">
                                    <div className="focus-info">
                                        <span className="focus-topic">{topic}</span>
                                        <span className="focus-acc">{acc}% Accuracy</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: `${acc}%`, background: acc < 40 ? '#ef4444' : '#fbbf24' }}></div>
                                    </div>
                                </div>
                            )
                        ))
                    ) : (
                        <div className="empty-focus">
                            <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>Complete a few quizzes to get personalized recommendations.</p>
                            <button className="btn-secondary" style={{ width: 'auto' }} onClick={() => navigate('/practice')}>Start First Quiz</button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
