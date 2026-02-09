
import { useNavigate } from 'react-router-dom';
import { BookOpen, Calculator, BrainCircuit, ArrowRight } from 'lucide-react';

const PracticeHub = () => {
    const navigate = useNavigate();

    const modes = [
        {
            id: 'quiz',
            title: 'Conceptual Quiz',
            desc: 'Topic-wise MCQs. Includes new Consumer Theory practice set.',
            icon: <BrainCircuit size={32} />,
            color: 'primary', // violet
            path: '/topics' // Redirects to Topics page where user selects the topic (e.g. Consumer Theory)
        },
        {
            id: 'numerical',
            title: 'Numerical Problems',
            desc: 'Practice NAT questions for Micro, Macro, and Stats.',
            icon: <Calculator size={32} />,
            color: 'success', // green
            path: '/practice/numerical'
        },
        {
            id: 'topics',
            title: 'Browse by Chapter',
            desc: 'Drill down into specific chapters like Consumer Theory.',
            icon: <BookOpen size={32} />,
            color: 'secondary', // indigo
            path: '/topics'
        }
    ];

    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="page-title">Practice Zone</h1>
                <p className="page-subtitle">Choose your mode of preparation.</p>
            </header>

            <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {modes.map(mode => (
                    <div key={mode.id} className="stat-card" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '2rem' }} onClick={() => navigate(mode.path)}>
                        <div className={`icon-box ${mode.color === 'primary' ? 'primary' : mode.color === 'success' ? 'secondary' : 'primary'}`} style={{ marginBottom: '1rem' }}>
                            {mode.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{mode.title}</h3>
                        <p style={{ marginBottom: '1.5rem' }}>{mode.desc}</p>
                        <div className="btn-secondary" style={{ width: 'auto', marginTop: 'auto' }}>
                            Start <ArrowRight size={16} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PracticeHub;
