"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AccountPage() {
    const { user, isLoggedIn, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, [isLoggedIn, router]);

    if (!user) return null;

    return (
        <main className="min-h-screen bg-stone-950 text-white selection:bg-mint-teal selection:text-stone-900">
            <Navbar />

            <section className="pt-40 pb-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                    {/* Profile Summary Sidebar */}
                    <aside className="w-full lg:w-80">
                        <div className="bg-stone-900/50 p-10 rounded-[3rem] border border-white/5 text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-mint-teal to-sky-blue rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-brand font-black text-stone-900 shadow-2xl">
                                {user.name.charAt(0)}
                            </div>
                            <h2 className="text-2xl font-brand font-bold mb-2">{user.name}</h2>
                            <p className="text-stone-500 text-sm mb-10">Member since {user.joinDate}</p>

                            <div className="space-y-4">
                                {["Order History", "Saved Addresses", "Payment Methods"].map((item) => (
                                    <button
                                        key={item}
                                        className={`w-full py-3 rounded-xl font-brand font-bold text-sm uppercase tracking-widest transition-all ${item === 'Order History' ? 'bg-white text-stone-900' : 'text-stone-400 hover:text-white'}`}
                                    >
                                        {item}
                                    </button>
                                ))}
                                <button
                                    onClick={logout}
                                    className="w-full py-3 rounded-xl font-brand font-bold text-sm uppercase tracking-widest transition-all text-red-500 hover:bg-red-900/10"
                                >
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Dashboard Panel */}
                    <div className="flex-grow">
                        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
                            <div>
                                <h1 className="text-4xl font-brand font-black uppercase tracking-tighter">My Account</h1>
                                <p className="text-stone-500 font-medium">Manage your subscription and orders</p>
                            </div>
                            <div className="hidden md:flex gap-4">
                                <div className="text-right">
                                    <p className="text-[10px] font-brand font-black text-stone-500 uppercase">Loyalty Points</p>
                                    <p className="text-2xl font-brand font-bold text-sun-yellow text-glow">0</p>
                                </div>
                            </div>
                        </div>

                        {/* Order History Placeholder */}
                        <div className="space-y-8">
                            <h3 className="text-stone-300 font-brand font-bold uppercase text-xs tracking-widest">Recent Orders</h3>

                            <p className="text-center text-stone-600 font-medium py-12">No recent orders to show.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
