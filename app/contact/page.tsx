"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, Check } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after showing success
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-snack-white dark:bg-stone-950 text-stone-900 dark:text-white">
            <Navbar />

            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                    {/* Visual/Info Side */}
                    <div className="flex-1">
                        <span className="text-lava-orange font-bold tracking-[0.3em] uppercase mb-4 block">Say Hello</span>
                        <h1 className="text-7xl md:text-9xl font-brand font-black uppercase leading-[0.85] tracking-tighter mb-12">
                            Drop Us A <br />
                            <span className="text-sky-blue">Message.</span>
                        </h1>

                        <div className="space-y-12 mt-20">
                            <div>
                                <h3 className="text-stone-400 font-brand font-bold uppercase text-xs tracking-widest mb-4">Our Hub</h3>
                                <p className="text-2xl font-brand font-bold">123 Mithila Heritage Lane,<br />Bihar, India 847211</p>
                            </div>
                            <div>
                                <h3 className="text-stone-400 font-brand font-bold uppercase text-xs tracking-widest mb-4">Chat With Us</h3>
                                <p className="text-2xl font-brand font-bold">
                                    <a href="mailto:crunch@mithilaessence.com" className="hover:text-lava-orange transition-colors">crunch@mithilaessence.com</a>
                                    <br />
                                    <a href="tel:+919876543210" className="hover:text-lava-orange transition-colors">+91 98765 43210</a>
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 mt-16 pb-12 border-b-2 border-stone-200 dark:border-stone-800 lg:border-none">
                            {[
                                { name: "Instagram", url: "https://instagram.com/mithilaessence" },
                                { name: "Twitter", url: "https://twitter.com/mithilaessence" },
                                { name: "LinkedIn", url: "https://linkedin.com/company/mithilaessence" }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-brand font-black uppercase text-sm tracking-tighter hover:text-lava-orange transition-colors"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="flex-1 bg-stone-900 p-12 lg:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sun-yellow/5 rounded-full blur-[80px]" />

                        {isSubmitted ? (
                            <div className="relative z-10 flex flex-col items-center justify-center h-full py-20 animate-reveal">
                                <div className="w-20 h-20 bg-mint-teal rounded-full flex items-center justify-center mb-8">
                                    <Check size={40} className="text-stone-900" />
                                </div>
                                <h3 className="text-3xl font-brand font-black uppercase mb-4">Message Sent!</h3>
                                <p className="text-stone-400 text-center">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-brand font-black uppercase tracking-widest text-stone-500">Your Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g. Rahul Sharma"
                                        required
                                        className="w-full bg-transparent border-b-2 border-stone-800 py-3 focus:outline-none focus:border-mint-teal transition-colors text-xl font-bold placeholder:text-stone-700"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-brand font-black uppercase tracking-widest text-stone-500">Email Address</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="rahul@example.com"
                                        required
                                        className="w-full bg-transparent border-b-2 border-stone-800 py-3 focus:outline-none focus:border-mint-teal transition-colors text-xl font-bold placeholder:text-stone-700"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-brand font-black uppercase tracking-widest text-stone-500">How can we help?</label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your makhana cravings..."
                                        required
                                        className="w-full bg-transparent border-b-2 border-stone-800 py-3 focus:outline-none focus:border-mint-teal transition-colors text-xl font-bold placeholder:text-stone-700 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-6 bg-mint-teal text-stone-900 font-brand font-black uppercase tracking-tighter text-xl rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin w-6 h-6 border-2 border-stone-900 border-t-transparent rounded-full" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

