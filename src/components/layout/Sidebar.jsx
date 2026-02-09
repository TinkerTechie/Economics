
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BarChart2, Bookmark, Layers, LogOut, Book } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const links = [
        { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/" },
        { icon: <BookOpen size={20} />, label: "Practice Zone", path: "/practice" },
        { icon: <Book size={20} />, label: "Browse Topics", path: "/topics" },
        { icon: <Layers size={20} />, label: "Mock Tests", path: "/mocks" },
        { icon: <BarChart2 size={20} />, label: "Analytics", path: "/analytics" },
        { icon: <Bookmark size={20} />, label: "Bookmarks", path: "/bookmarks" },
    ];

    return (
        <aside className="sidebar">
            <div className="logo-container">
                <h2 className="title-gradient" style={{ fontSize: '1.5rem', margin: 0, textAlign: 'left' }}>IIT JAM<br /><span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 400 }}>Economics Tutor</span></h2>
            </div>

            <nav className="nav-links">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="user-profile">
                <div className="avatar">{user?.name?.charAt(0) || 'S'}</div>
                <div className="user-info">
                    <p className="name" style={{ maxWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {user?.name || 'Student'}
                    </p>
                    <p className="role">{user?.role || 'Aspirant'}</p>
                </div>
                <button
                    onClick={handleLogout}
                    style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                    title="Logout"
                >
                    <LogOut size={18} />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
