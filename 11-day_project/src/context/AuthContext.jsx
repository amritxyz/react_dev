import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token && userId) {
            setUser({ token, _id: userId });
        }
        setLoading(false);
    }, []);

    const login = useCallback(async (email, password) => {
        try {
            const response = await axios.post('https://blog-hqx2.onrender.com/user/login', {
                email,
                password,
            });
            console.log(response.data)
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', user._id);
            localStorage.setItem('userData', JSON.stringify(user));
            setUser({ token, ...user });
            return { success: true };
        } catch (error) {
            return { success: false, error: error.response?.data?.message || 'Login failed' };
        }
    }, []);

    const registerUser = useCallback(async (userData) => {
        try {
            const response = await axios.post('https://blog-hqx2.onrender.com/user/register', userData);
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', user._id);
            localStorage.setItem('userData', JSON.stringify(user));
            setUser({ token, ...user });
            return { success: true };
        } catch (error) {
            return { success: false, error: error.response?.data?.message || 'Registration failed' };
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userData');
        setUser(null);
    }, []);

    const value = {
        user,
        login,
        registerUser,
        logout,
        loading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;
