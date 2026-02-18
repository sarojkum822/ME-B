import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const brandStats = [
    { value: "4.8★", label: "Avg Rating", icon: "⭐", info: "Verified reviews from 5,000+ happy snackers." },
    { value: "10K+", label: "Orders", icon: "📦", info: "Delivering fresh crunches across India daily." },
    { value: "Roasted", label: "Not Fried", icon: "🔥", info: "0% oil. 100% crunch. The healthier way to munch." },
    { value: "Bihar", label: "Made in", icon: "🌾", info: "Sourced directly from the heart of Mithila." },
];

const bestsellers = [
    { name: "Peri Peri", img: "/product-peri-peri-thumb.png" },
    { name: "Salted", img: "/product-salted-thumb.png" },
    { name: "Tomato", img: "/product-tomato-thumb.png" },
];

export default function TrustStats() {
    const [expandedIdx, setExpandedIdx] = React.useState<number | null>(null);

    return (
        <section className="relative bg-[#FEFAF3] lg:bg-[#FEFAF3] dark:bg-stone-950 py-6 md:py-12 border-y border-stone-100 dark:border-stone-900 overflow-hidden">
            {/* Madhubani Texture - Desktop Only */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none hidden lg:block"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 10 Q60 30 50 50 Q40 30 50 10 M30 50 Q50 60 70 50 Q50 40 30 50\' fill=\'none\' stroke=\'%23000\' stroke-width=\'1\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'2\' fill=\'%23000\'/%3E%3C/svg%3E")', backgroundSize: '60px' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Product Strip */}
                <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-12 pb-6 md:pb-8 border-b border-stone-200/40 dark:border-stone-800/40">
                    <span className="text-[10px] md:text-xs font-brand font-black uppercase tracking-widest text-stone-400">Best Bestsellers</span>
                    <div className="flex gap-2 md:gap-4">
                        {bestsellers.map((p, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 flex items-center justify-center overflow-hidden">
                                    <div className={`w-full h-full ${i === 0 ? 'bg-lava-orange/20' : i === 1 ? 'bg-amber-400/20' : 'bg-berry-pink/20'} flex items-center justify-center`}>
                                        <span className="text-[8px] font-black uppercase">{p.name[0]}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Grid / Mobile Carousel */}
                <div className="flex md:grid md:grid-cols-4 items-center gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 md:pb-0">
                    {brandStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setExpandedIdx(expandedIdx === index ? null : index)}
                            className="min-w-[85vw] md:min-w-0 snap-center flex flex-col items-center text-center group md:px-8 cursor-pointer"
                        >
                            <span className="text-sm mb-1 opacity-60 md:hidden">{stat.icon}</span>
                            <span className="text-4xl md:text-3xl lg:text-4xl font-brand font-black text-stone-900 dark:text-white mb-1">
                                {stat.value}
                            </span>
                            <span className="text-[10px] md:text-[9px] lg:text-[10px] font-brand font-bold uppercase tracking-[0.2em] text-lava-orange/80">
                                {stat.label}
                            </span>

                            <AnimatePresence>
                                {expandedIdx === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-[10px] text-stone-500 font-medium mt-2 max-w-[200px] leading-tight">
                                            {stat.info}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Scroll Indicator (Mobile only) */}
                <div className="flex justify-center gap-1.5 md:hidden mt-2">
                    {brandStats.map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-stone-200 dark:bg-stone-800" />
                    ))}
                </div>
            </div>
        </section>
    );
}
