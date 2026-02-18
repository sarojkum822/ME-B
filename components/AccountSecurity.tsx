"use client";

import { User, Mail, Phone, Lock, Eye, LogOut, ShieldCheck, Smartphone } from "lucide-react";

export default function AccountSecurity({ user, logout }: { user: any, logout: () => void }) {
    return (
        <div className="space-y-10 animate-reveal">
            <div>
                <h2 className="text-2xl font-brand font-black text-[var(--text-primary)] mb-2">Profile & Security</h2>
                <p className="text-sm text-[var(--text-muted)] font-medium">Manage your personal details and account safety.</p>
            </div>

            {/* Profile Fields */}
            <div className="bg-[var(--section-white)] dark:bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-3xl p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-brand font-black text-[var(--text-muted)] uppercase tracking-wider ml-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                            <input
                                type="text"
                                defaultValue={user.name}
                                className="w-full pl-12 pr-4 py-3 bg-[var(--background)] border border-[var(--chip-border)] rounded-xl text-sm font-medium focus:outline-none focus:border-lava-orange/50"
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-brand font-black text-[var(--text-muted)] uppercase tracking-wider ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                            <input
                                type="email"
                                defaultValue={user.email || "saroj@example.com"}
                                className="w-full pl-12 pr-4 py-3 bg-[var(--background)] border border-[var(--chip-border)] rounded-xl text-sm font-medium focus:outline-none focus:border-lava-orange/50"
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-brand font-black text-[var(--text-muted)] uppercase tracking-wider ml-1">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                            <input
                                type="tel"
                                defaultValue="+91 98765 43210"
                                className="w-full pl-12 pr-4 py-3 bg-[var(--background)] border border-[var(--chip-border)] rounded-xl text-sm font-medium focus:outline-none focus:border-lava-orange/50"
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-brand font-black text-[var(--text-muted)] uppercase tracking-wider ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                            <input
                                type="password"
                                defaultValue="********"
                                className="w-full pl-12 pr-12 py-3 bg-[var(--background)] border border-[var(--chip-border)] rounded-xl text-sm font-medium focus:outline-none focus:border-lava-orange/50"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                                <Eye size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-[var(--chip-border)] flex justify-end">
                    <button className="px-8 py-3 bg-lava-orange text-white font-brand font-bold rounded-xl text-sm hover:scale-105 transition-transform">
                        Update Profile
                    </button>
                </div>
            </div>

            {/* Security Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sky-blue/5 border border-sky-blue/20 rounded-2xl p-6 flex gap-4 cursor-pointer hover:bg-sky-blue/10 transition-colors group">
                    <div className="w-12 h-12 bg-white dark:bg-[#1a1c24] rounded-xl flex items-center justify-center text-sky-blue shadow-sm">
                        <Smartphone size={24} />
                    </div>
                    <div>
                        <h4 className="text-sm font-brand font-bold text-[var(--text-primary)]">Logout from all devices</h4>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">Secure your account by ending other sessions.</p>
                    </div>
                </div>
                <div
                    onClick={logout}
                    className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex gap-4 cursor-pointer hover:bg-red-500/10 transition-colors group"
                >
                    <div className="w-12 h-12 bg-white dark:bg-[#1a1c24] rounded-xl flex items-center justify-center text-red-500 shadow-sm">
                        <LogOut size={24} />
                    </div>
                    <div>
                        <h4 className="text-sm font-brand font-bold text-red-500">Log Out</h4>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">See you again for more snacks!</p>
                    </div>
                </div>
            </div>

            <div className="bg-mint-teal/5 border border-mint-teal/20 rounded-2xl p-4 flex items-center gap-3">
                <ShieldCheck size={18} className="text-mint-teal" />
                <p className="text-[10px] font-brand font-bold text-mint-teal uppercase tracking-widest leading-relaxed">
                    Two-factor authentication is enabled for your account.
                </p>
            </div>
        </div>
    );
}
