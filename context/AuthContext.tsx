"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: string;
    name: string;
    email: string;
    joinDate: string;
    loyaltyPoints: number;
}

interface AuthContextType {
    user: User | null;
    isLoggedIn: boolean;
    login: (email: string, name?: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check localStorage on mount
        const storedUser = localStorage.getItem("makhana_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string, name: string = "Snack Enthusiast") => {
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            joinDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            loyaltyPoints: 0
        };
        setUser(newUser);
        localStorage.setItem("makhana_user", JSON.stringify(newUser));
        router.push("/account");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("makhana_user");
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
