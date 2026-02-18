"use client";

import { CreditCard, Wallet, ArrowUpRight, History, Shield, Plus, ChevronRight } from "lucide-react";

export default function PaymentRefunds() {
    const paymentMethods = [
        { type: "UPI", provider: "Google Pay", id: "saroj****@okaxis", label: "Default" },
        { type: "Card", provider: "HDFC Bank", id: "XXXX XXXX XXXX 4242", expiry: "12/28" }
    ];

    const refundHistory = [
        { id: "#REF-9281", orderId: "#ME-81722", date: "Jan 18, 2026", amount: "₹450.00", status: "Processed" },
        { id: "#REF-8172", orderId: "#ME-76521", date: "Dec 05, 2025", amount: "₹120.00", status: "Processed" }
    ];

    return (
        <div className="space-y-8 animate-reveal">
            <div>
                <h2 className="text-2xl font-brand font-black text-[var(--text-primary)] mb-2">Payments & Refunds</h2>
                <p className="text-sm text-[var(--text-muted)] font-medium">Manage your payment methods and track refunds.</p>
            </div>

            {/* Wallet Balance */}
            <div className="bg-gradient-to-br from-berry-pink to-lava-orange p-8 rounded-3xl text-white shadow-xl shadow-lava-orange/10">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <p className="text-[10px] font-brand font-black uppercase tracking-[0.2em] opacity-80 mb-1">Mithila Credits</p>
                        <h3 className="text-4xl font-brand font-black">₹150.00</h3>
                    </div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                        <Wallet size={24} />
                    </div>
                </div>
                <button className="w-full py-3 bg-white text-[#111318] font-brand font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                    Use credits on next order <ArrowUpRight size={16} />
                </button>
            </div>

            {/* Saved Payment Methods */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-brand font-bold text-[var(--text-primary)]">Saved Methods</h3>
                    <button className="text-xs font-brand font-bold text-lava-orange flex items-center gap-1 hover:underline">
                        <Plus size={14} /> Add New
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.map((method, i) => (
                        <div key={i} className="bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-2xl p-5 flex items-center justify-between group cursor-pointer hover:border-lava-orange/30 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[var(--background)] rounded-xl flex items-center justify-center text-[var(--text-secondary)]">
                                    <CreditCard size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-brand font-bold text-[var(--text-primary)]">{method.id}</p>
                                    <p className="text-[10px] text-[var(--text-muted)] font-medium uppercase tracking-wider">{method.provider}</p>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Refund History */}
            <div className="space-y-4">
                <h3 className="text-lg font-brand font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <History size={20} /> Refund History
                </h3>
                <div className="bg-[var(--section-white)] dark:bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-3xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-[var(--chip-bg)]/50 border-b border-[var(--chip-border)]">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-brand font-black uppercase tracking-wider text-[var(--text-muted)]">Refund ID</th>
                                <th className="px-6 py-4 text-[10px] font-brand font-black uppercase tracking-wider text-[var(--text-muted)]">Order</th>
                                <th className="px-6 py-4 text-[10px] font-brand font-black uppercase tracking-wider text-[var(--text-muted)]">Amount</th>
                                <th className="px-6 py-4 text-[10px] font-brand font-black uppercase tracking-wider text-[var(--text-muted)]">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--chip-border)]">
                            {refundHistory.map((refund, i) => (
                                <tr key={i} className="hover:bg-[var(--chip-bg)]/30 transition-colors">
                                    <td className="px-6 py-4 text-xs font-brand font-bold text-[var(--text-secondary)]">{refund.id}</td>
                                    <td className="px-6 py-4 text-xs font-brand font-bold text-sky-blue">{refund.orderId}</td>
                                    <td className="px-6 py-4 text-xs font-brand font-black text-[var(--text-primary)]">{refund.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-mint-teal/10 text-mint-teal text-[10px] font-brand font-black uppercase rounded-md">
                                            {refund.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Trust Note */}
            <div className="bg-sky-blue/5 border border-sky-blue/20 rounded-2xl p-4 flex items-start gap-3">
                <Shield size={18} className="text-sky-blue shrink-0 mt-0.5" />
                <p className="text-[10px] font-medium text-sky-blue leading-relaxed">
                    Your payment details are encrypted and stored securely. We do not store full card details on our servers.
                </p>
            </div>
        </div>
    );
}
