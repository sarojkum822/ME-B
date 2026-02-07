"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserPlus } from "lucide-react";

export default function SignupPage() {
    const { login } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock signup - in a real app, create user in backend
        if (name && email && password) {
            login(email, name);
        }
    };

    return (
        <main className="min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors">
            <Navbar />
            <div className="pt-32 pb-20 flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white dark:bg-stone-900 rounded-3xl shadow-xl p-8 border border-stone-100 dark:border-stone-800">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-lava-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 text-lava-orange">
                            <UserPlus size={32} />
                        </div>
                        <h1 className="text-3xl font-brand font-black text-stone-900 dark:text-white mb-2">Join the Club!</h1>
                        <p className="text-stone-500 dark:text-stone-400">Create your account to start snacking.</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 border-transparent focus:border-lava-orange focus:ring-0 text-stone-900 dark:text-white font-medium transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 border-transparent focus:border-lava-orange focus:ring-0 text-stone-900 dark:text-white font-medium transition-all"
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
                                className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 border-transparent focus:border-lava-orange focus:ring-0 text-stone-900 dark:text-white font-medium transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-lava-orange text-white font-brand font-bold text-lg rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-lava-orange/20"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-stone-500 dark:text-stone-400">
                            Already have an account?{" "}
                            <Link href="/login" className="text-lava-orange font-bold hover:underline">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
