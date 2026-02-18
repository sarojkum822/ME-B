"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TIMELINE = [
    {
        year: "1924",
        title: "Seed of Tradition",
        description: "Our ancestors began the art of hand-harvesting 'Gorgan Nut' (Makhana) from the sacred ponds of Mithila.",
        side: "left"
    },
    {
        year: "1960",
        title: "The Artisanal Leap",
        description: "Perfecting the wood-fire roasting technique that gives our makhana its signature extreme crunch.",
        side: "right"
    },
    {
        year: "1995",
        title: "Curating Flavors",
        description: "Combining local Himalayan salts and hand-ground spices with our premium popped lily seeds.",
        side: "left"
    },
    {
        year: "2024",
        title: "Mithila Essence",
        description: "Bringing a century of artisanal expertise to the modern snacker with 'Smarter Snacking, Reimagined'.",
        side: "right"
    }
];

export default function OurStoryPage() {
    return (
        <main className="min-h-screen relative bg-snack-white dark:bg-stone-950 text-foreground transition-colors overflow-hidden selection:bg-sun-yellow selection:text-stone-900">
            {/* Global Artisanal Particles - Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
            </div>

            {/* Mithila Motif Background Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
                <svg className="absolute left-0 top-1/4 h-2/3 w-1/2" viewBox="0 0 600 800" fill="none">
                    <g stroke="currentColor" strokeWidth="1.2" className="text-stone-900 dark:text-white">
                        <path d="M100 0 Q150 100 100 200 Q50 300 100 400" />
                        <circle cx="100" cy="100" r="5" fill="currentColor" />
                        <circle cx="100" cy="300" r="5" fill="currentColor" />
                    </g>
                </svg>
            </div>

            <Navbar />

            {/* Heritage Hero */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-image.jpg"
                        alt="Mithila Heritage"
                        fill
                        className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/70 to-stone-950" />
                </div>

                {/* Hero Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sun-yellow/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 text-center px-6 md:px-12 lg:px-20">
                    <span className="text-sun-yellow font-brand font-black text-sm uppercase tracking-[0.4em] mb-6 block drop-shadow-lg">
                        Est. 1924
                    </span>
                    <h1 className="text-7xl md:text-9xl font-brand font-black uppercase leading-[0.8] tracking-tighter mb-8 text-white">
                        The <br />
                        <span className="text-transparent border-t border-sun-yellow/30 pt-4" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Legacy</span> <br />
                        Story
                    </h1>
                </div>
            </section>

            {/* Timeline Section - Editorial Refinement */}
            <section className="py-24 md:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-white dark:bg-stone-950">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col gap-32 md:gap-56">
                        {TIMELINE.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                                {/* Text Content */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-6xl md:text-8xl font-brand font-black text-stone-100 dark:text-stone-900 border-b-4 border-sun-yellow/20 pb-2">{item.year}</span>
                                        <div className="h-0.5 flex-1 bg-stone-100 dark:bg-stone-900" />
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-brand font-black uppercase tracking-tighter text-stone-900 dark:text-white leading-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 font-medium leading-relaxed italic border-l-4 border-lava-orange pl-6 py-2">
                                        "{item.description}"
                                    </p>
                                </div>

                                {/* Visual Element - Magazine Style */}
                                <div className="flex-1 w-full flex justify-center items-center">
                                    <div className="relative w-full aspect-[4/5] max-w-sm rounded-[3rem] overflow-hidden shadow-2xl group">
                                        <div className="absolute inset-0 bg-stone-100 dark:bg-stone-900 animate-pulse" />
                                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950/40 to-transparent group-hover:opacity-0 transition-opacity duration-700" />
                                        {/* Placeholder for real imagery */}
                                        <div className="absolute inset-8 border border-white/20 rounded-[2rem] z-20 pointer-events-none" />
                                        <div className="absolute bottom-12 left-12 right-12 text-white z-20">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Mithila Roots</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section - New Editorial Element */}
            <section className="py-24 md:py-40 px-6 text-center bg-stone-50 dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800">
                <div className="max-w-4xl mx-auto">
                    <span className="text-lava-orange font-brand font-black text-xs uppercase tracking-[0.4em] mb-12 block italic">Our Philosophy</span>
                    <blockquote className="text-3xl md:text-6xl font-brand font-black text-stone-900 dark:text-white uppercase leading-tight mb-8">
                        "We didn't just inherit a snack. We inherited a <span className="text-stone-300 dark:text-stone-700">Responsibility</span> to honor the pond, the seed, and the farmer."
                    </blockquote>
                    <p className="text-stone-500 font-bold uppercase tracking-widest text-sm">— The Founders</p>
                </div>
            </section>

            {/* Next Step CTA - Refined */}
            <section className="bg-white dark:bg-stone-950 text-center py-24 md:py-40 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-brand font-black mb-8 leading-none tracking-tighter text-stone-900 dark:text-white">
                        THE CRUNCH <br />
                        <span className="text-lava-orange">REINVENTED.</span>
                    </h2>
                    <p className="text-xl text-stone-500 mb-12 font-medium max-w-xl mx-auto leading-relaxed">
                        A century of artisanal expertise, now available in your favorite modern flavors.
                        Experience the crunch that hooks.
                    </p>
                    <Link
                        href="/shop"
                        className="inline-block px-12 py-5 bg-lava-orange text-white font-brand font-black rounded-full hover:scale-105 transition-transform text-xl uppercase tracking-widest shadow-2xl shadow-lava-orange/30 hover-glow"
                    >
                        Explore Flavors
                    </Link>
                </div>
            </section>

            <Footer />
        </main >
    );
}
