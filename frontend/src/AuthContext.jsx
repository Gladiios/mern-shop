import  { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(localStorage.getItem("token") ? true : false)

    const login = (token) => {
        localStorage.setItem("token", token)
        setIsConnected(true)
        console.log(isConnected);
    }

    const logout = () => {
        localStorage.removeItem("token")
        setIsConnected(false)
    }

    return (
        <AuthContext.Provider value={{isConnected, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}