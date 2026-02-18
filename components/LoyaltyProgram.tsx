"use client";

import { Star, Gift, Users, Heart, ArrowRight, CheckCircle2, Info } from "lucide-react";

export default function LoyaltyProgram() {
    const rules = [
        { action: "Buy 1 Pack", points: "10 Points", icon: <Heart size={18} /> },
        { action: "Write a Review", points: "50 Points", icon: <Star size={18} /> },
        { action: "Refer a Friend", points: "200 Points", icon: <Users size={18} /> },
    ];

    return (
        <div className="space-y-8 animate-reveal">
            <div>
                <h2 className="text-2xl font-brand font-black text-[var(--text-primary)] mb-2">Rewards & Loyalty</h2>
                <p className="text-sm text-[var(--text-muted)] font-medium">Your healthy snacking journey pays off.</p>
            </div>

            {/* Points Summary Card */}
            <div className="bg-sun-yellow/10 border-2 border-sun-yellow p-8 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-sun-yellow rounded-xl flex items-center justify-center text-[#111318]">
                            <Star size={24} fill="currentColor" />
                        </div>
                        <span className="text-xs font-brand font-black text-sun-yellow uppercase tracking-widest">Active Balance</span>
                    </div>
                    <h3 className="text-5xl font-brand font-black text-[var(--text-primary)] mb-2">250 <span className="text-lg font-bold text-[var(--text-muted)]">Points</span></h3>
                    <p className="text-xs font-medium text-[var(--text-muted)] mb-8">₹50 credit available. Expires on June 30, 2026.</p>

                    <button className="px-8 py-3 bg-[var(--text-primary)] text-white font-brand font-bold rounded-xl text-sm hover:scale-105 transition-transform">
                        Redeem Now
                    </button>
                </div>
                <Star size={200} className="absolute -right-20 -bottom-20 text-sun-yellow/10 rotate-12" fill="currentColor" />
            </div>

            {/* How to Earn */}
            <div className="space-y-4">
                <h3 className="text-lg font-brand font-bold text-[var(--text-primary)]">How to earn more</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {rules.map((rule, i) => (
                        <div key={i} className="bg-[var(--chip-bg)] p-6 rounded-2xl border border-[var(--chip-border)] flex flex-col items-center text-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1a1c24] flex items-center justify-center text-lava-orange shadow-sm">
                                {rule.icon}
                            </div>
                            <div>
                                <p className="text-xs font-brand font-bold text-[var(--text-primary)]">{rule.action}</p>
                                <p className="text-sm font-brand font-black text-lava-orange">{rule.points}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Messaging */}
            <div className="bg-mint-teal/5 border border-mint-teal/20 rounded-2xl p-6 flex gap-4">
                <Info size={24} className="text-mint-teal shrink-0" />
                <div>
                    <h4 className="text-sm font-brand font-bold text-mint-teal uppercase tracking-wider mb-1">Healthy Habits Pay Off</h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        Consistency is key! Maintain a subscription for 3 months to unlock "Elite Status" with 2x points on every order.
                    </p>
                </div>
            </div>

            {/* Refer & Earn */}
            <div className="bg-[var(--section-white)] dark:bg-[#1a1c24] border border-[var(--chip-border)] rounded-3xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-2xl flex items-center justify-center text-sky-blue mx-auto">
                    <Users size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-brand font-black text-[var(--text-primary)]">Give ₹100, Get ₹100</h3>
                    <p className="text-sm text-[var(--text-muted)] font-medium">Share Mithila Essence with friends and earn credits.</p>
                </div>
                <div className="flex gap-2 max-w-sm mx-auto">
                    <input
                        type="text"
                        readOnly
                        value="MITHILA-FRIEND-2026"
                        className="flex-grow bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-xl px-4 py-3 text-xs font-brand font-bold text-[var(--text-primary)] focus:outline-none"
                    />
                    <button className="px-6 py-3 bg-sky-blue text-white font-brand font-bold rounded-xl text-xs hover:bg-opacity-90 transition-all">
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
}
