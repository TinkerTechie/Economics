
import { createContext, useContext, useState, useEffect } from 'react';

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
    // User Progress state
    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem('quiz_history');
        return saved ? JSON.parse(saved) : [];
    });

    const [bookmarks, setBookmarks] = useState(() => {
        const saved = localStorage.getItem('quiz_bookmarks');
        return saved ? JSON.parse(saved) : [];
    });

    const [stats, setStats] = useState({
        totalSolved: 0,
        correctCount: 0,
        topicAccuracy: {},
        timeSpent: 0 // in seconds
    });

    // Calculate stats whenever history changes
    useEffect(() => {
        let correct = 0;
        const topicCounts = {};
        const topicCorrect = {};

        history.forEach(attempt => {
            if (attempt.isCorrect) correct++;

            if (!topicCounts[attempt.topic]) {
                topicCounts[attempt.topic] = 0;
                topicCorrect[attempt.topic] = 0;
            }
            topicCounts[attempt.topic]++;
            if (attempt.isCorrect) topicCorrect[attempt.topic]++;
        });

        const topicAccuracy = {};
        Object.keys(topicCounts).forEach(topic => {
            topicAccuracy[topic] = Math.round((topicCorrect[topic] / topicCounts[topic]) * 100);
        });

        setStats({
            totalSolved: history.length,
            correctCount: correct,
            accuracy: history.length > 0 ? Math.round((correct / history.length) * 100) : 0,
            topicAccuracy
        });

        localStorage.setItem('quiz_history', JSON.stringify(history));
    }, [history]);

    useEffect(() => {
        localStorage.setItem('quiz_bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    const addAttempt = (questionId, topic, isCorrect, timeTaken) => {
        setHistory(prev => [...prev, {
            questionId,
            topic,
            isCorrect,
            timeTaken,
            timestamp: Date.now()
        }]);
    };

    const toggleBookmark = (questionId) => {
        if (bookmarks.includes(questionId)) {
            setBookmarks(prev => prev.filter(id => id !== questionId));
        } else {
            setBookmarks(prev => [...prev, questionId]);
        }
    };

    return (
        <QuizContext.Provider value={{
            history,
            stats,
            bookmarks,
            addAttempt,
            toggleBookmark
        }}>
            {children}
        </QuizContext.Provider>
    );
};
