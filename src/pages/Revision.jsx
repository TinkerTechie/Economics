
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { consumerTheoryData } from '../data/topics/consumer_theory';
import { demandElasticityData } from '../data/topics/demand_elasticity';
import { productionTheoryData } from '../data/topics/production_theory';
import { costTheoryData } from '../data/topics/cost_theory';
import { marketStructuresData } from '../data/topics/market_structures';
import { macroeconomicsData } from '../data/topics/macroeconomics';

const Revision = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Map slugs to data files
    const dataMap = {
        'consumer-theory': consumerTheoryData,
        'demand-elasticity': demandElasticityData,
        'production-theory': productionTheoryData,
        'cost-theory': costTheoryData,
        'market-structures': marketStructuresData,
        'macroeconomics': macroeconomicsData
    };

    const topicData = dataMap[slug || 'consumer-theory'];

    if (!topicData) {
        return (
            <div className="page-container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
                <h1>Topic Not Found</h1>
                <button onClick={() => navigate('/topics')} className="btn-secondary">Go Back</button>
            </div>
        );
    }

    return (
        <div className="page-container">
            <button
                onClick={() => navigate('/topics')}
                className="btn-text"
                style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8' }}
            >
                <ArrowLeft size={16} /> Back to Topics
            </button>

            <header style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <h1 className="page-title" style={{ color: '#10b981' }}>{topicData.title}</h1>
                <p className="page-subtitle">Revision Notes & Key Concepts</p>
            </header>

            <div className="revision-content" style={{ maxWidth: '800px' }}>
                {topicData.sections.map((section, index) => (
                    <section key={index} style={{ marginBottom: '2.5rem', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#e2e8f0' }}>{section.title}</h2>
                        <p style={{ lineHeight: '1.6', color: '#cbd5e1', marginBottom: '1rem' }}>
                            {section.content}
                        </p>

                        {section.keyPoints && (
                            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                                {section.keyPoints.map((pt, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', color: '#94a3b8' }}>{pt}</li>
                                ))}
                            </ul>
                        )}

                        {section.formula && (
                            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '4px', borderLeft: '3px solid #10b981', marginTop: '1rem' }}>
                                <strong style={{ color: '#10b981', display: 'block', marginBottom: '0.25rem' }}>Formula:</strong>
                                <code style={{ fontFamily: 'monospace', fontSize: '1rem' }}>{section.formula}</code>
                            </div>
                        )}
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Revision;
