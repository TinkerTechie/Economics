
import { useState } from 'react';
import { questions } from '../data/questions';
import { useQuiz } from '../context/QuizContext';
import MCQQuestion from '../components/quiz/MCQQuestion';

const Practice = () => {
    const { toggleBookmark, bookmarks } = useQuiz();
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentQuestion = questions[currentIndex];
    const isBookmarked = bookmarks.includes(currentQuestion.id);

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // Loop back or show finish screen
            // For now, loop back
            setCurrentIndex(0);
        }
    };

    return (
        <div className="practice-container">
            <div className="practice-header">
                <span>Question {currentIndex + 1} of {questions.length}</span>
                <div style={{ height: '6px', width: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${((currentIndex + 1) / questions.length) * 100}%`, background: '#8b5cf6' }}></div>
                </div>
            </div>

            <MCQQuestion
                question={currentQuestion}
                onNext={handleNext}
                onBookmark={toggleBookmark}
                isBookmarked={isBookmarked}
            />
        </div>
    );
};

export default Practice;
