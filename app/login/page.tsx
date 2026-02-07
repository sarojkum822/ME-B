"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LogIn } from "lucide-react";

export default function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login - in a real app, validate with backend
        if (email && password) {
            login(email);
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <div className="pt-32 pb-20 flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white dark:bg-stone-900 rounded-3xl shadow-xl p-8 border border-stone-100 dark:border-stone-800">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-mint-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 text-mint-teal">
                            <LogIn size={32} />
                        </div>
                        <h1 className="text-3xl font-brand font-black text-stone-900 dark:text-white mb-2">Welcome Back!</h1>
                        <p className="text-stone-500 dark:text-stone-400">Sign in to continue snacking.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 border-transparent focus:border-mint-teal focus:ring-0 text-stone-900 dark:text-white font-medium transition-all"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 border-transparent focus:border-mint-teal focus:ring-0 text-stone-900 dark:text-white font-medium transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-mint-teal text-stone-900 font-brand font-bold text-lg rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-mint-teal/20"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-stone-500 dark:text-stone-400">
                            Don't have an account?{" "}
                            <Link href="/signup" className="text-mint-teal font-bold hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
