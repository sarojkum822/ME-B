"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, ShoppingBag, ArrowRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CheckoutSuccessPage() {
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        setOrderId(`ME-${Math.floor(Math.random() * 90000) + 10000}`);
    }, []);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <section className="pt-40 pb-32 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-10 text-green-600"
                    >
                        <ShieldCheck size={48} />
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-brand font-black mb-6 uppercase tracking-tight"
                    >
                        Thank You, <br /> <span className="text-lava-orange italic">Makhana Lover!</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-stone-500 mb-12 text-xl max-w-xl mx-auto leading-relaxed"
                    >
                        Your order has been received and is being prepared with care in Mithila. We've sent a confirmation to your email.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-card-bg p-10 rounded-[2.5rem] border border-card-border shadow-2xl shadow-stone-900/5 mb-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-lava-orange/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="grid grid-cols-2 gap-8 relative z-10">
                            <div className="text-left">
                                <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.2em] mb-2">Order ID</p>
                                <p className="text-2xl font-brand font-black text-foreground">{orderId}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.2em] mb-2">Expected Delivery</p>
                                <p className="text-2xl font-brand font-black text-foreground">3-5 Days</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-card-border flex flex-wrap justify-center gap-4">
                            <button className="px-6 py-3 bg-white dark:bg-stone-800 border border-card-border rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-stone-50 transition-colors">
                                <Share2 size={16} /> Share the crunch
                            </button>
                            <Link href="/account/orders" className="px-6 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-xl text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                                View Order Details <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link href="/shop" className="inline-flex items-center gap-2 text-lava-orange font-brand font-black uppercase tracking-widest text-sm hover:gap-3 transition-all">
                            <ShoppingBag size={18} /> Continue Shopping
                        </Link>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
