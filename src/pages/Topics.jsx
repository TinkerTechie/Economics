
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { consumerTheoryData } from '../data/topics/consumer_theory';
import { demandElasticityData } from '../data/topics/demand_elasticity';
import { productionTheoryData } from '../data/topics/production_theory';
import { costTheoryData } from '../data/topics/cost_theory';
import { marketStructuresData } from '../data/topics/market_structures';
import { macroeconomicsData } from '../data/topics/macroeconomics';

// Simple icons (lucide-react might not be fully available or I want to avoid import errors if not installed)
import { BookOpen, ChevronRight, GraduationCap } from 'lucide-react';

const Topics = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('browse'); // 'browse' or 'revision'

    // Group questions by Topic -> Subtopic
    const topicsData = questions.reduce((acc, q) => {
        if (!acc[q.topic]) {
            acc[q.topic] = { count: 0, subtopics: new Set() };
        }
        acc[q.topic].count++;
        acc[q.topic].subtopics.add(q.subtopic);
        return acc;
    }, {});

    const renderPracticeTab = () => (
        <div className="mocks-grid">
            {Object.entries(topicsData).map(([topic, data]) => (
                <div key={topic} className="mock-card" style={{ minHeight: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <div className="mock-info">
                        <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>{topic}</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            {data.count} Questions • {data.subtopics.size} Subtopics
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '0.5rem' }}>Select Subtopic:</label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {Array.from(data.subtopics).map(sub => (
                                    <button
                                        key={sub}
                                        onClick={() => navigate(`/practice/quiz?topic=${encodeURIComponent(topic)}&subtopic=${encodeURIComponent(sub)}`)}
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '6px',
                                            fontSize: '0.8rem',
                                            color: '#e2e8f0',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                        onMouseOver={(e) => { e.target.style.background = '#8b5cf6'; e.target.style.borderColor = '#8b5cf6'; }}
                                        onMouseOut={(e) => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                        <button
                            className="btn-primary"
                            style={{ flex: 1, background: '#475569', borderColor: '#475569', fontSize: '0.85rem' }}
                            onClick={() => navigate(`/practice/quiz?topic=${encodeURIComponent(topic)}`)}
                        >
                            Quiz
                        </button>
                        <button
                            className="btn-secondary"
                            style={{ flex: 1, fontSize: '0.85rem' }}
                            onClick={() => navigate(`/practice/numerical?topic=${encodeURIComponent(topic)}`)}
                        >
                            Numericals
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderRevisionTab = () => (
        <div className="mocks-grid">
            {/* Consumer Theory Card */}
            <div className="mock-card" style={{ borderColor: '#10b981', display: 'flex', flexDirection: 'column' }}>
                <div className="mock-info">
                    <h3 style={{ color: '#10b981' }}>{consumerTheoryData.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Utility, Indifference Curves, Budget Constraints, and Equilibrium.
                    </p>
                    <ul style={{ fontSize: '0.85rem', color: '#cbd5e1', paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                        <li>Cardinal vs Ordinal Utility</li>
                        <li>Equilibrium Conditions</li>
                        <li>Income & Substitution Effects</li>
                    </ul>
                </div>
                <button
                    className="btn-primary"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', background: '#10b981', borderColor: '#10b981' }}
                    onClick={() => navigate('/revision/consumer-theory')}
                >
                    Read Notes <BookOpen size={16} style={{ marginLeft: '5px' }} />
                </button>
            </div>


            {/* Demand & Elasticity Card */}
            <div className="mock-card" style={{ borderColor: '#3b82f6', display: 'flex', flexDirection: 'column' }}>
                <div className="mock-info">
                    <h3 style={{ color: '#3b82f6' }}>{demandElasticityData.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Price Elasticity, Income Elasticity, Cross Elasticity, and Revenue.
                    </p>
                    <ul style={{ fontSize: '0.85rem', color: '#cbd5e1', paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                        <li>Elastic vs Inelastic</li>
                        <li>Total Revenue Test</li>
                        <li>Determinants of Elasticity</li>
                    </ul>
                </div>
                <button
                    className="btn-primary"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', background: '#3b82f6', borderColor: '#3b82f6' }}
                    onClick={() => navigate('/revision/demand-elasticity')}
                >
                    Read Notes <BookOpen size={16} style={{ marginLeft: '5px' }} />
                </button>
            </div>

            {/* Production Theory Card */}
            <div className="mock-card" style={{ borderColor: '#f59e0b', display: 'flex', flexDirection: 'column' }}>
                <div className="mock-info">
                    <h3 style={{ color: '#f59e0b' }}>{productionTheoryData.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Short Run vs Long Run, Isoquants, and Cost Minimization.
                    </p>
                    <ul style={{ fontSize: '0.85rem', color: '#cbd5e1', paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                        <li>Law of Variable Proportions</li>
                        <li>Returns to Scale</li>
                        <li>Isoquant Properties</li>
                    </ul>
                </div>
                <button
                    className="btn-primary"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', background: '#f59e0b', borderColor: '#f59e0b' }}
                    onClick={() => navigate('/revision/production-theory')}
                >
                    Read Notes <BookOpen size={16} style={{ marginLeft: '5px' }} />
                </button>
            </div>

            {/* Cost Theory Card */}
            <div className="mock-card" style={{ borderColor: '#ec4899', display: 'flex', flexDirection: 'column' }}>
                <div className="mock-info">
                    <h3 style={{ color: '#ec4899' }}>{costTheoryData.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Types of Costs, Short Run & Long Run Curves, and Economies of Scale.
                    </p>
                    <ul style={{ fontSize: '0.85rem', color: '#cbd5e1', paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                        <li>Fixed vs Variable Cost</li>
                        <li>MC, AC, AVC Relations</li>
                        <li>Envelope Curve (LRAC)</li>
                    </ul>
                </div>
                <button
                    className="btn-primary"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', background: '#ec4899', borderColor: '#ec4899' }}
                    onClick={() => navigate('/revision/cost-theory')}
                >
                    Read Notes <BookOpen size={16} style={{ marginLeft: '5px' }} />
                </button>
            </div>

            {/* Market Structures Card */}
            <div className="mock-card" style={{ borderColor: '#ef4444', display: 'flex', flexDirection: 'column' }}>
                <div className="mock-info">
                    <h3 style={{ color: '#ef4444' }}>{marketStructuresData.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Perfect Comp, Monopoly, Oligopoly (Game Theory), and Welfare.
                    </p>
                    <ul style={{ fontSize: '0.85rem', color: '#cbd5e1', paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                        <li>Price Taking vs Price Making</li>
                        <li>Nash Equilibrium</li>
                        <li>Pareto Efficiency</li>
                    </ul>
                </div>
                <button
                    className="btn-primary"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', background: '#ef4444', borderColor: '#ef4444' }}
                    onClick={() => navigate('/revision/market-structures')}
                >
                    Read Notes <BookOpen size={16} style={{ marginLeft: '5px' }} />
                </button>
            </div>

            {/* Macroeconomics Card */}
            <div className="mock-card" style={{ borderColor: '#8b5cf6', display: 'flex', flexDirection: 'column' }}>
                <div className="mock-info">
                    <h3 style={{ color: '#8b5cf6' }}>{macroeconomicsData.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        National Income, IS-LM, Growth Models, and Money & Banking.
                    </p>
                    <ul style={{ fontSize: '0.85rem', color: '#cbd5e1', paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                        <li>GDP, GNP, NNP</li>
                        <li>Keynesian Multiplier</li>
                        <li>Solow Growth Model</li>
                    </ul>
                </div>
                <button
                    className="btn-primary"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', background: '#8b5cf6', borderColor: '#8b5cf6' }}
                    onClick={() => navigate('/revision/macroeconomics')}
                >
                    Read Notes <BookOpen size={16} style={{ marginLeft: '5px' }} />
                </button>
            </div>
        </div>
    );

    return (
        <div className="page-container">
            <header className="page-header" style={{ marginBottom: '2rem' }}>
                <h1 className="page-title">Knowledge Base</h1>
                <p className="page-subtitle">Master concepts topic by topic.</p>

                {/* Toggle Tabs */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                    <button
                        className={`btn-toggle ${activeTab === 'browse' ? 'active' : ''}`}
                        style={{
                            background: activeTab === 'browse' ? '#8b5cf6' : 'rgba(255,255,255,0.05)',
                            border: activeTab === 'browse' ? '1px solid #8b5cf6' : '1px solid transparent',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                        onClick={() => setActiveTab('browse')}
                    >
                        <GraduationCap size={18} /> Practice Questions
                    </button>
                    <button
                        className={`btn-toggle ${activeTab === 'revision' ? 'active' : ''}`}
                        style={{
                            background: activeTab === 'revision' ? '#10b981' : 'rgba(255,255,255,0.05)',
                            border: activeTab === 'revision' ? '1px solid #10b981' : '1px solid transparent',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                        onClick={() => setActiveTab('revision')}
                    >
                        <BookOpen size={18} /> Topic Revision
                    </button>
                </div>
            </header>

            {activeTab === 'browse' ? renderPracticeTab() : renderRevisionTab()}
        </div>
    );
};

export default Topics;
