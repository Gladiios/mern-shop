import  { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(localStorage.getItem("token") ? true : false)
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") ? true : false)

    useEffect(() => {
        console.log(isAdmin ? "Admin" : "Not Admin");
    }, [isAdmin])

    const login = (token, role) => {
        localStorage.setItem("token", token);
        localStorage.setItem("isAdmin", role === "admin" ? "true" : "false");
        setIsConnected(true);
        setIsAdmin(role.trim().toLowerCase() === "admin");
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("isAdmin")
        setIsConnected(false)
        setIsAdmin(false)
    }

    return (
        <AuthContext.Provider value={{isConnected, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}