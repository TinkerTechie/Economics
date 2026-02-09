
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Layout from '../layout/Layout';

const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    if (loading) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;

    return user ? <Layout><Outlet /></Layout> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
