import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('shopzone_auth') === 'true';
    });

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('shopzone_auth', 'true');
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('shopzone_auth');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
