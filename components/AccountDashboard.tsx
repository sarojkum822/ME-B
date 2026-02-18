"use client";

import { Package, Truck, Star, MapPin, ShoppingBag, ArrowRight } from "lucide-react";
import BrandTrustSection from "@/components/BrandTrustSection";

interface AccountDashboardProps {
    user: {
        name: string;
        loyaltyPoints: number;
    };
    onViewChange: (view: string) => void;
}

export default function AccountDashboard({ user, onViewChange }: AccountDashboardProps) {
    // Mock data for "Last Order"
    const lastOrder = {
        id: "#ME-82941",
        status: "In Transit",
        items: "Tangy Tomato × 2, Pouch Pack",
        date: "Feb 12, 2026"
    };

    return (
        <div className="space-y-8 animate-reveal">
            {/* Greeting */}
            <div>
                <h2 className="text-3xl md:text-4xl font-brand font-black text-[var(--text-primary)] mb-2">
                    Hi {user.name.split(' ')[0]} 👋
                </h2>
                <p className="text-[var(--text-muted)] font-medium">Ready for your next snacking session?</p>
            </div>

            {/* Last Order Status */}
            <div className="bg-[var(--chip-bg)] rounded-3xl border border-[var(--chip-border)] overflow-hidden">
                <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex gap-4 items-center">
                        <div className="w-14 h-14 bg-lava-orange/10 rounded-2xl flex items-center justify-center text-lava-orange">
                            <Truck size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-brand font-black text-lava-orange uppercase tracking-wider mb-0.5">Last Order Status</p>
                            <h3 className="text-xl font-brand font-bold text-[var(--text-primary)]">{lastOrder.status}</h3>
                            <p className="text-sm text-[var(--text-muted)] line-clamp-1">{lastOrder.items}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => onViewChange('orders')}
                        className="w-full md:w-auto px-6 py-4 bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)] font-brand font-black rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                    >
                        Track Order <ArrowRight size={18} />
                    </button>
                </div>
                <div className="bg-lava-orange/5 px-8 py-3 border-t border-[var(--chip-border)]">
                    <p className="text-xs font-medium text-[var(--text-muted)]">Expected delivery by Tomorrow, 5 PM</p>
                </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reorder CTA */}
                <div className="bg-[var(--section-white)] dark:bg-[var(--chip-bg)] p-8 rounded-3xl border border-[var(--chip-border)] flex flex-col justify-between">
                    <div>
                        <ShoppingBag size={32} className="text-mint-teal mb-4" />
                        <h3 className="text-2xl font-brand font-black text-[var(--text-primary)] mb-2">Cravings calling?</h3>
                        <p className="text-[var(--text-muted)] font-medium mb-6">Your favorites are just 2 taps away.</p>
                    </div>
                    <button className="w-full py-4 bg-sun-yellow text-[#111318] font-brand font-black rounded-2xl hover:scale-[1.02] transition-transform">
                        One-Click Reorder
                    </button>
                </div>

                {/* Rewards Balance */}
                <div className="bg-[var(--section-white)] dark:bg-[var(--chip-bg)] p-8 rounded-3xl border border-[var(--chip-border)] flex flex-col justify-between">
                    <div>
                        <Star size={32} className="text-sun-yellow mb-4" fill="currentColor" />
                        <h3 className="text-2xl font-brand font-black text-[var(--text-primary)] mb-2">₹{user.loyaltyPoints} Snacks Credit</h3>
                        <p className="text-[var(--text-muted)] font-medium mb-6">Earn points on every review and referral.</p>
                    </div>
                    <button
                        onClick={() => onViewChange('rewards')}
                        className="w-full py-4 border-2 border-[var(--text-primary)] text-[var(--text-primary)] font-brand font-black rounded-2xl hover:bg-[var(--text-primary)] hover:text-white transition-colors"
                    >
                        View Rewards
                    </button>
                </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <button
                    onClick={() => onViewChange('orders')}
                    className="p-5 bg-[var(--chip-bg)] rounded-2xl border border-[var(--chip-border)] flex flex-col items-center gap-2 hover:border-lava-orange/30 transition-colors"
                >
                    <Package size={20} className="text-[var(--text-muted)]" />
                    <span className="text-xs font-brand font-bold uppercase tracking-wider text-[var(--text-primary)]">My Orders</span>
                </button>
                <button
                    onClick={() => onViewChange('addresses')}
                    className="p-5 bg-[var(--chip-bg)] rounded-2xl border border-[var(--chip-border)] flex flex-col items-center gap-2 hover:border-lava-orange/30 transition-colors"
                >
                    <MapPin size={20} className="text-[var(--text-muted)]" />
                    <span className="text-xs font-brand font-bold uppercase tracking-wider text-[var(--text-primary)]">Addresses</span>
                </button>
                <button
                    onClick={() => onViewChange('support')}
                    className="p-5 bg-[var(--chip-bg)] rounded-2xl border border-[var(--chip-border)] flex flex-col items-center gap-2 hover:border-lava-orange/30 transition-colors col-span-2 md:col-span-1"
                >
                    <Star size={20} className="text-[var(--text-muted)]" />
                    <span className="text-xs font-brand font-bold uppercase tracking-wider text-[var(--text-primary)]">Need Help?</span>
                </button>
            </div>

            <BrandTrustSection />
        </div>
    );
}
