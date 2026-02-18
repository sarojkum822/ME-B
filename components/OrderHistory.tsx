"use client";

import { Package, Search, ExternalLink, Download, MessageSquare, Star, ChevronRight, CheckCircle2, Circle } from "lucide-react";
import Image from "next/image";

export default function OrderHistory() {
    const orders = [
        {
            id: "#ME-82941",
            date: "Feb 12, 2026",
            status: "Shipped",
            total: "₹598.00",
            items: [
                { name: "Tangy Tomato (Pack of 3)", image: "/tomato-pouch.png", qty: 2 },
                { name: "Peri Peri (Canister)", image: "/peri-peri-jar.png", qty: 1 }
            ],
            steps: ["Ordered", "Packed", "Shipped", "Delivered"],
            currentStep: 2 // Shipped
        },
        {
            id: "#ME-81722",
            date: "Jan 15, 2026",
            status: "Delivered",
            total: "₹1,250.00",
            items: [
                { name: "Master Collection Box", image: "/box-render.png", qty: 1 }
            ],
            steps: ["Ordered", "Packed", "Shipped", "Delivered"],
            currentStep: 3 // Delivered
        }
    ];

    return (
        <div className="space-y-8 animate-reveal">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-brand font-black text-[var(--text-primary)]">My Orders</h2>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="w-full pl-10 pr-4 py-2 bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-xl text-sm focus:outline-none focus:border-lava-orange/50 transition-colors"
                    />
                </div>
            </div>

            <div className="space-y-6">
                {orders.map((order) => (
                    <div key={order.id} className="bg-[var(--section-white)] dark:bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-3xl overflow-hidden">
                        {/* Order Header */}
                        <div className="p-5 md:p-6 border-b border-[var(--chip-border)] flex flex-wrap justify-between items-center gap-4 bg-[var(--chip-bg)]/50">
                            <div className="flex gap-6">
                                <div>
                                    <p className="text-[10px] font-brand font-black text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Order ID</p>
                                    <p className="text-sm font-brand font-bold text-[var(--text-primary)]">{order.id}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-brand font-black text-[var(--text-muted)] uppercase tracking-wider mb-0.5">Date</p>
                                    <p className="text-sm font-brand font-bold text-[var(--text-primary)]">{order.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 text-xs font-brand font-bold text-sky-blue hover:underline">
                                    <Download size={14} /> Invoice PDF
                                </button>
                                <button className="px-4 py-1.5 bg-lava-orange text-white text-xs font-brand font-bold rounded-lg hover:scale-105 transition-transform">
                                    Reorder
                                </button>
                            </div>
                        </div>

                        {/* Order Content */}
                        <div className="p-6 md:p-8 space-y-8">
                            {/* Items */}
                            <div className="flex flex-col gap-4">
                                {order.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-[var(--chip-bg)] rounded-xl border border-[var(--chip-border)] p-2">
                                            {/* Using placeholder for now if images don't exist */}
                                            <div className="w-full h-full bg-lava-orange/10 rounded flex items-center justify-center text-lava-orange font-bold text-xs">
                                                Mock
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-sm font-brand font-bold text-[var(--text-primary)]">{item.name}</h4>
                                            <p className="text-xs text-[var(--text-muted)]">Quantity: {item.qty}</p>
                                        </div>
                                        {order.status === "Delivered" && (
                                            <button className="flex items-center gap-1.5 text-xs font-brand font-bold text-sun-yellow hover:text-lava-orange transition-colors">
                                                <Star size={14} fill="currentColor" /> Rate
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Status Timeline */}
                            <div className="relative pt-4">
                                <div className="absolute top-[22px] left-0 w-full h-[2px] bg-[var(--chip-border)] hidden md:block" />
                                <div
                                    className="absolute top-[22px] left-0 h-[2px] bg-mint-teal transition-all duration-1000 hidden md:block"
                                    style={{ width: `${(order.currentStep / (order.steps.length - 1)) * 100}%` }}
                                />
                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                    {order.steps.map((step, idx) => {
                                        const isCompleted = idx <= order.currentStep;
                                        const isCurrent = idx === order.currentStep;
                                        return (
                                            <div key={step} className="flex md:flex-col items-center gap-3 md:gap-2 relative z-10">
                                                <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-colors ${isCompleted
                                                        ? "bg-mint-teal/10 border-mint-teal text-mint-teal"
                                                        : "bg-[var(--chip-bg)] border-[var(--chip-border)] text-[var(--text-muted)]"
                                                    }`}>
                                                    {isCompleted ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                                                </div>
                                                <span className={`text-[10px] font-brand font-black uppercase tracking-wider ${isCompleted ? "text-mint-teal" : "text-[var(--text-muted)]"
                                                    }`}>
                                                    {step}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--chip-border)]">
                                <button className="flex items-center gap-2 text-xs font-brand font-bold text-[var(--text-primary)] px-4 py-2 border border-[var(--chip-border)] rounded-xl hover:bg-[var(--chip-bg)] transition-colors">
                                    <ExternalLink size={14} /> Track Order
                                </button>
                                <button className="flex items-center gap-2 text-xs font-brand font-bold text-[var(--text-primary)] px-4 py-2 border border-[var(--chip-border)] rounded-xl hover:bg-[var(--chip-bg)] transition-colors">
                                    <MessageSquare size={14} /> Report Issue
                                </button>
                                <div className="ml-auto text-right">
                                    <p className="text-[10px] font-brand font-black text-[var(--text-muted)] uppercase tracking-wider">Total Paid</p>
                                    <p className="text-lg font-brand font-black text-[var(--text-primary)]">{order.total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
