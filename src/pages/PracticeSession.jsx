
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { questions } from '../data/questions';
import { useQuiz } from '../context/QuizContext';
import MCQQuestion from '../components/quiz/MCQQuestion';

const PracticeSession = ({ mode }) => {
    const { toggleBookmark, bookmarks } = useQuiz();
    const [currentIndex, setCurrentIndex] = useState(0);

    const [searchParams] = useSearchParams();
    const topic = searchParams.get('topic');
    const subtopic = searchParams.get('subtopic');

    // Reset index when filter changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [topic, subtopic]);

    // Filter questions based on mode AND topic AND subtopic
    const filteredQuestions = questions.filter(q => {
        let matchesMode = true;
        if (mode === 'numerical') matchesMode = q.type === 'NAT';
        else if (mode === 'quiz') matchesMode = q.type !== 'NAT'; // Conceptual includes MSQ/MCQ

        let matchesTopic = true;
        if (topic) matchesTopic = q.topic === topic;

        let matchesSubtopic = true;
        if (subtopic) matchesSubtopic = q.subtopic === subtopic;

        return matchesMode && matchesTopic && matchesSubtopic;
    });

    if (filteredQuestions.length === 0) {
        return <div className="page-container">No questions available for this mode yet.</div>;
    }

    const currentQuestion = filteredQuestions[currentIndex];
    const isBookmarked = bookmarks.includes(currentQuestion.id);

    const handleNext = () => {
        if (currentIndex < filteredQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0); // Loop
        }
    };

    return (
        <div className="practice-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
            <div className="practice-header">
                <span style={{ textTransform: 'capitalize' }}>{mode} Mode • Question {currentIndex + 1} of {filteredQuestions.length}</span>
                <div style={{ height: '6px', width: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%`, background: '#8b5cf6' }}></div>
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

export default PracticeSession;
