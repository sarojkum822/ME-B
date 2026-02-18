import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const trustCards = [
    { metric: "9g", label: "Protein", sublabel: "Plant Power", proof: "Per pack energy", icon: "💪", color: "text-lava-orange", info: "High-quality plant protein for muscle recovery and all-day energy." },
    { metric: "97", label: "Calories", sublabel: "Guilt-Free", proof: "Low density snack", icon: "⚖️", color: "text-mint-teal", info: "Light as air. One whole pack is less than a small bag of chips." },
    { metric: "0%", label: "Palm Oil", sublabel: "Heart Safe", proof: "Zero trans fats", icon: "🌿", color: "text-berry-pink", info: "Roasted in clean air. No cheap oils. No hidden fats." },
    { metric: "Low", label: "GI Index", sublabel: "Slow Energy", proof: "Sugar stability", icon: "📉", color: "text-sun-yellow", info: "Keeps your blood sugar stable and cravings away." },
];

export default function CrunchStats() {
    const [expandedIdx, setExpandedIdx] = React.useState<number | null>(null);

    return (
        <section className="bg-[var(--background)] py-6 md:py-12 px-6 lg:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
                    {trustCards.map((card, i) => (
                        <motion.div
                            key={i}
                            onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                            className="group p-4 md:p-6 rounded-2xl bg-[var(--muted)]/50 dark:bg-[var(--muted-bg)]/40 border border-[var(--muted-foreground)]/10 transition-all cursor-pointer flex flex-col"
                        >
                            <div className="flex items-center justify-between md:mb-4">
                                <div className="flex items-center gap-3">
                                    <span className={`text-2xl md:text-3xl font-brand font-black ${card.color}`}>
                                        {card.metric}
                                    </span>
                                    <span className="text-[11px] md:text-xs font-brand font-black uppercase tracking-widest text-stone-900 dark:text-white">
                                        {card.label}
                                    </span>
                                </div>
                                <span className="text-sm md:text-xl opacity-40">●</span>
                            </div>

                            {/* Mobile expansion content */}
                            <AnimatePresence>
                                {expandedIdx === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="py-3 border-t border-stone-100 dark:border-stone-800 mt-3">
                                            <p className="text-[10px] text-stone-500 font-medium leading-tight">
                                                {card.info}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Desktop only details */}
                            <div className="hidden md:flex flex-col gap-1">
                                <span className="text-[11px] font-bold text-stone-700 dark:text-stone-300">{card.sublabel}</span>
                                <span className="text-[9px] font-medium text-stone-400">{card.proof}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
