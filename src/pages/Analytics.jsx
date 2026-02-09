
import { BarChart, PieChart, Activity } from 'lucide-react';

const Analytics = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="page-title">Performance Analytics</h1>
                <p className="page-subtitle">Track your progress and identify weak areas.</p>
            </header>

            <div className="empty-state">
                <BarChart size={48} className="text-secondary" />
                <h3>Not enough data yet</h3>
                <p>Complete at least 5 quizzes to generate detailed analytics.</p>
            </div>
        </div>
    );
};

export default Analytics;
