
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign Up
    const register = async (name, email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        // Update the profile with the user's name immediately after creation
        await updateProfile(response.user, { displayName: name });

        // Force update local user state since onAuthStateChanged might fire before profile update
        // We create a new user object to ensure state update triggers
        const newUser = {
            ...response.user,
            displayName: name,
            name: name,
            role: 'Aspirant'
        };
        setUser(newUser);

        return response.user;
    };

    // Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logout = () => {
        return signOut(auth);
    };

    // Auto-Login Check (Observer)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const appUser = {
                    ...currentUser,
                    // If displayName is null (sometimes happens on weak networks initially), fallback to 'Student' or email
                    name: currentUser.displayName || currentUser.email.split('@')[0],
                    role: 'Aspirant'
                };
                setUser(appUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
