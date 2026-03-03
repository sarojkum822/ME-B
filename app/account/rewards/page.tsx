"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gift, Star, Trophy, Zap, ArrowRight, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function RewardsPage() {
    const TIERS = [
        { name: "Crunch Rookie", points: "0-500", icon: <Star size={20} />, active: true, color: "text-stone-400" },
        { name: "Flavour Pro", points: "501-2000", icon: <Zap size={20} />, active: false, color: "text-lava-orange" },
        { name: "Makhana Legend", points: "2000+", icon: <Trophy size={20} />, active: false, color: "text-sun-yellow" },
    ];

    const BENEFITS = [
        { title: "2x Points on Birthday", description: "Double the rewards on your special day.", icon: <Sparkles className="text-sun-yellow" /> },
        { title: "Early Access", description: "Shop new drops before anybody else.", icon: <Check className="text-mint-teal" /> },
        { title: "Free Shipping", description: "Always free shipping for Legend tier.", icon: <Zap className="text-lava-orange" /> },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-40 pb-32 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-24 h-24 bg-sun-yellow/10 rounded-full flex items-center justify-center mx-auto mb-10 text-sun-yellow shadow-2xl shadow-sun-yellow/20"
                        >
                            <Gift size={48} />
                        </motion.div>
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-sun-yellow font-brand font-black text-xs uppercase tracking-[0.4em] mb-4 block"
                        >
                            Loyalty Program
                        </motion.span>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-brand font-black uppercase tracking-tighter mb-8"
                        >
                            Crunch <span className="text-sun-yellow italic">Club</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-stone-500 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        >
                            Your loyalty deserves a rewarding crunch. Earn points for every purchase and unlock exclusive flavours and perks.
                        </motion.p>
                    </div>

                    {/* Dashboard Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        {/* Stats Left */}
                        <div className="lg:col-span-2 bg-card-bg rounded-[3rem] p-10 md:p-16 border border-card-border shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sun-yellow/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-brand font-black uppercase mb-12 flex items-center gap-3">
                                    <Sparkles className="text-sun-yellow" /> Your Progress
                                </h3>

                                <div className="space-y-12">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                        <div>
                                            <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest mb-2">Points Balance</p>
                                            <p className="text-5xl font-brand font-black text-foregroundCounter">0</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest mb-2">Current Tier</p>
                                            <p className="text-3xl font-brand font-black text-foreground">Rookie</p>
                                        </div>
                                        <div className="hidden md:block">
                                            <p className="text-[10px] text-stone-400 font-black uppercase tracking-widest mb-2">Total Saved</p>
                                            <p className="text-3xl font-brand font-black text-mint-teal">₹0</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <p className="text-sm font-bold text-stone-500">500 points until <span className="text-lava-orange uppercase tracking-wide">Flavour Pro</span></p>
                                            <p className="text-sm font-black">0%</p>
                                        </div>
                                        <div className="h-4 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden p-1">
                                            <div className="h-full w-2 bg-gradient-to-r from-sun-yellow to-lava-orange rounded-full shadow-[0_0_10px_rgba(246,178,74,0.5)]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tiers Right */}
                        <div className="space-y-4">
                            {TIERS.map((tier, idx) => (
                                <div
                                    key={tier.name}
                                    className={`p-6 rounded-3xl border transition-all ${tier.active
                                        ? "bg-white dark:bg-stone-900 border-lava-orange shadow-xl scale-[1.02]"
                                        : "bg-card-bg/50 border-card-border opacity-60"
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <div className={`p-2 rounded-xl bg-stone-50 dark:bg-stone-800 ${tier.color}`}>
                                            {tier.icon}
                                        </div>
                                        {tier.active && (
                                            <span className="bg-lava-orange text-white text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full">Active</span>
                                        )}
                                    </div>
                                    <h4 className="font-brand font-black text-lg uppercase">{tier.name}</h4>
                                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{tier.points} Points</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="mb-20">
                        <h3 className="text-center font-brand font-black text-2xl uppercase tracking-tighter mb-12">Tier Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {BENEFITS.map((benefit) => (
                                <div key={benefit.title} className="bg-card-bg p-8 rounded-[2rem] border border-card-border hover:border-sun-yellow transition-colors group">
                                    <div className="w-12 h-12 rounded-2xl bg-stone-50 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {benefit.icon}
                                    </div>
                                    <h5 className="font-brand font-black text-lg uppercase mb-2">{benefit.title}</h5>
                                    <p className="text-stone-500 text-sm font-medium leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-stone-900 dark:bg-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <h2 className="text-3xl md:text-5xl font-brand font-black text-white dark:text-stone-900 uppercase tracking-tighter mb-8 relative z-10">
                            Ready to Elevate <br /> <span className="text-sun-yellow italic">Your Snacking?</span>
                        </h2>
                        <a
                            href="/signup"
                            className="inline-flex items-center gap-3 px-12 py-5 bg-sun-yellow text-stone-900 font-brand font-black rounded-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest shadow-xl shadow-sun-yellow/20 relative z-10"
                        >
                            Create Your Account <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
