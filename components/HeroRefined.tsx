"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import IsolatedProductImage from "./IsolatedProductImage";

/* ── Floating Icon Component ── */
function FloatingIcon({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
            className={`absolute z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-stone-800 shadow-lg shadow-black/10 dark:shadow-black/30 flex items-center justify-center text-lg md:text-xl border border-stone-100 dark:border-stone-700 ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default function HeroRefined() {
    return (
        <section className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden bg-[var(--background)] font-sans">
            {/* ── Left Content Column ── */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-12 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center">
                    {/* Left: Text + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <span className="text-[hsl(var(--accent))] font-sans font-bold tracking-[0.3em] uppercase mb-5 md:mb-6 block text-[10px] md:text-xs">
                            FROM THE HEART OF MITHILA
                        </span>

                        {/* Headline */}
                        <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl font-serif font-black leading-[1.05] tracking-tight mb-6 md:mb-8 text-[var(--foreground)] !normal-case">
                            Wholesome{" "}
                            <br className="hidden sm:block" />
                            Flavours,{" "}
                            <span className="text-[hsl(var(--accent))] italic font-medium" style={{ fontFamily: "var(--font-serif)" }}>
                                crafted
                            </span>{" "}
                            for
                            <br />
                            the Soul.
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm md:text-base lg:text-lg font-sans font-light text-[hsl(var(--muted-foreground))] max-w-md mb-8 md:mb-10 leading-relaxed opacity-80">
                            Fresh, flavourful, and made with love. Mithila Essence brings you
                            premium roasted makhana that satisfy every craving.
                        </p>

                        {/* CTA Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-3 h-14 md:h-16 pl-8 pr-3 md:pl-10 md:pr-4 rounded-full bg-[hsl(var(--accent))] text-white font-serif font-black tracking-tight text-base md:text-lg shadow-xl shadow-[hsl(var(--accent)_/_0.25)] transition-all hover:shadow-[hsl(var(--accent)_/_0.4)] group"
                            >
                                Shop Now
                                <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <ArrowRight size={20} strokeWidth={2.5} />
                                </span>
                            </Link>
                        </motion.div>

                        {/* Star Rating */}
                        <div className="flex items-center gap-2 mt-6 md:mt-8">
                            <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill="hsl(var(--accent))"
                                        stroke="hsl(var(--accent))"
                                        strokeWidth={1}
                                    />
                                ))}
                            </div>
                            <span className="text-xs md:text-sm font-sans font-medium text-[hsl(var(--muted-foreground))]">
                                Loved by <strong className="text-[var(--foreground)]">50K+</strong> snackers
                            </span>
                        </div>
                    </motion.div>

                    {/* ── Right: Circular Product Image ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1, type: "spring", bounce: 0.2 }}
                        className="relative flex justify-center items-center order-1 lg:order-2"
                    >
                        {/* Concentric Rings */}
                        <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] lg:w-[540px] lg:h-[540px] xl:w-[620px] xl:h-[620px]">
                            {/* Outer ring */}
                            <div className="absolute inset-0 rounded-full border border-stone-200/60 dark:border-stone-700/40" />
                            {/* Middle ring */}
                            <div className="absolute inset-[6%] rounded-full border border-stone-300/40 dark:border-stone-600/30" />
                            {/* Inner ring — product container */}
                            <div className="absolute inset-[12%] rounded-full overflow-hidden bg-stone-100/50 dark:bg-stone-800/30 border border-stone-200/60 dark:border-stone-700/40 shadow-2xl shadow-stone-400/10 dark:shadow-black/20">
                                {/* Product Pouch Cluster inside circle */}
                                <div className="w-full h-full flex items-center justify-center relative p-6 md:p-8">
                                    {/* Back left pouch */}
                                    <motion.div
                                        animate={{ y: [0, -8, 0], rotate: [-12, -9, -12] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] opacity-90"
                                        style={{ left: "6%", top: "25%" }}
                                    >
                                        <IsolatedProductImage src="/images/products/pouch-salt-v3.png" alt="Himalayan Salt" bgType="white" />
                                    </motion.div>
                                    {/* Back right pouch */}
                                    <motion.div
                                        animate={{ y: [0, 8, 0], rotate: [12, 15, 12] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute w-[80px] sm:w-[100px] md:w-[120px] lg:w-[130px] opacity-90"
                                        style={{ right: "6%", top: "25%" }}
                                    >
                                        <IsolatedProductImage src="/images/products/pouch-pink-v3.png" alt="Pink Salt" bgType="white" />
                                    </motion.div>
                                    {/* Main center pouch */}
                                    <motion.div
                                        animate={{ y: [0, -6, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative w-[120px] sm:w-[145px] md:w-[180px] lg:w-[200px] z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
                                    >
                                        <IsolatedProductImage src="/images/products/pouch-peri-hero.jpg" alt="Peri Peri" bgType="black" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* ── Floating Icons ── */}
                            <FloatingIcon className="-top-2 right-[15%] md:right-[10%]" delay={0}>
                                😊
                            </FloatingIcon>
                            <FloatingIcon className="top-[20%] -right-3 md:-right-5" delay={0.8}>
                                ✨
                            </FloatingIcon>
                            <FloatingIcon className="bottom-[8%] -right-2 md:right-[2%]" delay={1.5}>
                                👍
                            </FloatingIcon>
                            <FloatingIcon className="top-[45%] -left-3 md:-left-5" delay={2}>
                                🧡
                            </FloatingIcon>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
