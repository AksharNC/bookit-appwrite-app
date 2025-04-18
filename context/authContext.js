"use client";

import {createContext, useContext, useState, useEffect} from "react";
import checkAuth from "@/app/actions/checkAuth";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const {user} = await checkAuth();
                if (user) {
                    setIsAuthenticated(true);
                    setCurrentUser(user);
                    setIsAdmin(user.email === "admin.bookit@gmail.com"); // Check if user is admin
                } else {
                    setIsAuthenticated(false);
                    setCurrentUser(null);
                    setIsAdmin(false);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                setIsAuthenticated(false);
                setCurrentUser(null);
                setIsAdmin(false);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchUser();
    }, []);



    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                currentUser,
                isAdmin,
                loading, // Expose loading state
                setIsAuthenticated,
                setCurrentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

