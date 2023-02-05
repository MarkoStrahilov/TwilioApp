import { useState,useEffect,createContext } from "react";
import axios from "axios";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        if (isAuthenticated !== false) {
            getCurrentUser();
        }
    }, [isAuthenticated]);

    const getCurrentUser = async () => {
        try {
            const { data } = await axios.get("http://localhost:2000/api/v1/current/user");
            setIsAuthenticated(true);
            setCurrentUser(data);
        } catch (error) {
            setIsAuthenticated(false);
            setCurrentUser(null);
        }
    };

    return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, getCurrentUser, currentUser }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };