import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate auth check
        setTimeout(() => {
            setUser(null); // Change to user object if logged in
            setLoading(false);
        }, 1000);
    }, []);

    const login = () => setUser({ name: 'John Doe' });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
