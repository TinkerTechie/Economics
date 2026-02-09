
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PracticeHub from './pages/PracticeHub';
import PracticeSession from './pages/PracticeSession';
import Practice from './pages/Practice'; // For backward compatibility or specific quiz
import Topics from './pages/Topics';
import MockTests from './pages/MockTests';
import MockTestSession from './pages/MockTestSession';
import Analytics from './pages/Analytics';
import Bookmarks from './pages/Bookmarks';
import Revision from './pages/Revision';

const QuizWrapper = ({ mode }) => {
    // Simple wrapper to pass props to PracticeSession
    return <PracticeSession mode={mode} />;
}


function App() {
    return (
        <AuthProvider>
            <QuizProvider>
                <Router>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/login" element={<Login />} />

                        {/* Protected Routes */}
                        <Route element={<ProtectedRoute />}>
                            <Route path="/" element={<Dashboard />} />

                            {/* Practice Routes */}
                            <Route path="/practice" element={<PracticeHub />} />
                            <Route path="/practice/quiz" element={<QuizWrapper mode="quiz" />} />
                            <Route path="/practice/numerical" element={<QuizWrapper mode="numerical" />} />
                            <Route path="/topics" element={<Topics />} />
                            <Route path="/revision/:slug" element={<Revision />} />

                            {/* Mocks */}
                            <Route path="/mocks" element={<MockTests />} />
                            <Route path="/mock-session/:testId" element={<MockTestSession />} />

                            {/* Utils */}
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/bookmarks" element={<Bookmarks />} />
                        </Route>

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Router>
            </QuizProvider>
        </AuthProvider>
    )
}

export default App;
