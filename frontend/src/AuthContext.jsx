import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = (token) => {
        localStorage.setItem("token", token);
        const decoded = jwtDecode(token);
        setIsConnected(true);
        setIsAdmin(decoded.role && decoded.role === "admin");
    }

    const logout = () => {
        localStorage.removeItem("token");
        setIsConnected(false);
        setIsAdmin(false);
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            setIsConnected(true);
            setIsAdmin(decoded.role && decoded.role === "admin");
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isConnected, isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}