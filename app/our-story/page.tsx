"use client";

import Image from "next/image";
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
        <main className="min-h-screen bg-stone-950 text-white selection:bg-sun-yellow selection:text-stone-900">
            <Navbar />

            {/* Heritage Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-image.jpg"
                        alt="Mithila Heritage"
                        fill
                        className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/60 to-stone-950" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <span className="text-sun-yellow font-brand font-black text-sm uppercase tracking-[0.4em] mb-6 block">
                        Est. 1924
                    </span>
                    <h1 className="text-7xl md:text-9xl font-brand font-black uppercase leading-[0.8] tracking-tighter mb-8">
                        The <br />
                        <span className="text-transparent border-t border-sun-yellow/30 pt-4">Legacy</span> <br />
                        Story
                    </h1>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -ms-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-sun-yellow/0 via-sun-yellow/20 to-sun-yellow/0 hidden md:block" />

                    <div className="space-y-32">
                        {TIMELINE.map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content */}
                                <div className={`flex-1 ${item.side === 'left' ? 'md:text-right' : 'md:text-left'} text-center`}>
                                    <span className="text-4xl font-brand font-black text-white/10 mb-2 block">{item.year}</span>
                                    <h2 className="text-3xl md:text-5xl font-brand font-bold uppercase mb-4 tracking-tight">{item.title}</h2>
                                    <p className="text-lg text-stone-400 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Decorative Dot */}
                                <div className="relative z-10 w-4 h-4 rounded-full bg-sun-yellow shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                                    <div className="absolute inset-0 rounded-full animate-ping bg-sun-yellow opacity-40" />
                                </div>

                                {/* Placeholder for Image/Visual */}
                                <div className="flex-1 w-full aspect-video bg-stone-900/50 rounded-3xl border border-white/5 p-8 flex items-center justify-center group overflow-hidden">
                                    <div className="w-full h-full bg-stone-800 rounded-2xl transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
