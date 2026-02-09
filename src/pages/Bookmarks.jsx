
import { Bookmark } from 'lucide-react';

const Bookmarks = () => {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="page-title">Bookmarked Questions</h1>
                <p className="page-subtitle">Review questions you saved for later.</p>
            </header>

            <div className="empty-state">
                <Bookmark size={48} className="text-secondary" />
                <h3>No bookmarks yet</h3>
                <p>Flag questions during practice to review them here.</p>
            </div>
        </div>
    );
};

export default Bookmarks;
