"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Package,
    MapPin,
    CreditCard,
    LogOut,
    Star,
    ChevronRight,
    LayoutDashboard,
    Heart,
    ShieldCheck,
    HelpCircle
} from "lucide-react";

// New Components
import AccountDashboard from "@/components/AccountDashboard";
import OrderHistory from "@/components/OrderHistory";
import AddressBook from "@/components/AddressBook";
import PaymentRefunds from "@/components/PaymentRefunds";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import WishlistSub from "@/components/WishlistSub";
import AccountSecurity from "@/components/AccountSecurity";
import SupportSection from "@/components/SupportSection";
import MobileBottomMenu from "@/components/MobileBottomMenu";

export default function AccountPage() {
    const { user, isLoggedIn, logout } = useAuth();
    const router = useRouter();
    const [activeView, setActiveView] = useState("dashboard");

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, [isLoggedIn, router]);

    if (!user) return null;

    const navItems = [
        { id: "dashboard", name: "Dashboard", icon: <LayoutDashboard size={18} /> },
        { id: "orders", name: "My Orders", icon: <Package size={18} /> },
        { id: "addresses", name: "Saved Addresses", icon: <MapPin size={18} /> },
        { id: "payments", name: "Payments & Refunds", icon: <CreditCard size={18} /> },
        { id: "rewards", name: "Rewards & Loyalty", icon: <Star size={18} /> },
        { id: "wishlist", name: "Wishlist & Subscriptions", icon: <Heart size={18} /> },
        { id: "security", name: "Profile & Security", icon: <ShieldCheck size={18} /> },
        { id: "support", name: "Support & Help", icon: <HelpCircle size={18} /> },
    ];

    const renderView = () => {
        switch (activeView) {
            case "dashboard": return <AccountDashboard user={user} onViewChange={setActiveView} />;
            case "orders": return <OrderHistory />;
            case "addresses": return <AddressBook />;
            case "payments": return <PaymentRefunds />;
            case "rewards": return <LoyaltyProgram />;
            case "wishlist": return <WishlistSub />;
            case "security": return <AccountSecurity user={user} logout={logout} />;
            case "support": return <SupportSection />;
            default: return <AccountDashboard user={user} onViewChange={setActiveView} />;
        }
    };

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">
            <Navbar />

            <section className="pt-28 md:pt-40 pb-20 md:pb-32 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Page Title - Hidden on mobile if dashboard is active to save space */}
                    <div className={`${activeView === 'dashboard' ? 'hidden md:block' : 'block'} mb-8 md:mb-12 border-b border-[var(--chip-border)] pb-6 md:pb-8`}>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-lava-orange font-brand font-black text-[10px] uppercase tracking-[0.3em]">Account</span>
                            <div className="w-1 h-1 bg-[var(--chip-border)] rounded-full" />
                            <span className="text-[var(--text-muted)] font-brand font-black text-[10px] uppercase tracking-[0.3em]">
                                {navItems.find(i => i.id === activeView)?.name}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-brand font-black uppercase tracking-tight text-[var(--text-primary)]">
                            {navItems.find(i => i.id === activeView)?.name}
                        </h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                        {/* Sidebar Navigation - Desktop */}
                        <aside className="hidden lg:block w-80 shrink-0">
                            <div className="sticky top-32 space-y-2 bg-[var(--chip-bg)]/40 p-4 rounded-3xl border border-[var(--chip-border)]">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveView(item.id)}
                                        className={`w-full flex items-center justify-between py-3.5 px-5 rounded-2xl font-brand font-bold text-sm transition-all duration-300 ${activeView === item.id
                                            ? "bg-lava-orange text-white shadow-lg shadow-lava-orange/20"
                                            : "text-[var(--text-secondary)] hover:bg-[var(--chip-bg)]"
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className={activeView === item.id ? "text-white" : "text-[var(--text-muted)]"}>
                                                {item.icon}
                                            </span>
                                            {item.name}
                                        </span>
                                        {activeView !== item.id && <ChevronRight size={14} className="text-[var(--text-muted)]" />}
                                    </button>
                                ))}
                                <div className="pt-4 mt-4 border-t border-[var(--chip-border)]">
                                    <button
                                        onClick={logout}
                                        className="w-full flex items-center gap-3 py-3.5 px-5 rounded-2xl font-brand font-bold text-sm text-red-500 hover:bg-red-500/10 transition-colors"
                                    >
                                        <LogOut size={18} />
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </aside>

                        {/* Mobile Navigation - Horizontal Scroll */}
                        <div className="lg:hidden -mx-4 px-4 overflow-x-auto no-scrollbar pb-6 flex gap-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveView(item.id)}
                                    className={`shrink-0 flex items-center gap-2 py-3 px-5 rounded-full font-brand font-bold text-xs whitespace-nowrap transition-all ${activeView === item.id
                                        ? "bg-lava-orange text-white"
                                        : "bg-[var(--chip-bg)] text-[var(--text-secondary)] border border-[var(--chip-border)]"
                                        }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="flex-grow min-w-0">
                            {renderView()}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <MobileBottomMenu />
        </main>
    );
}
