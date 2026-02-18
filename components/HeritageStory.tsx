"use client";

import Image from "next/image";
import { Leaf, Droplets, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
    {
        id: 1,
        icon: <Leaf className="text-[hsl(var(--accent))]" size={20} />,
        title: "100% Natural",
        description: "No preservatives, no artificial colours. Just real ingredients."
    },
    {
        id: 2,
        icon: <Droplets className="text-[hsl(var(--accent))]" size={20} />,
        title: "Zero Oil",
        description: "Roasted to perfection — never fried. Light on your tummy."
    },
    {
        id: 3,
        icon: <Landmark className="text-[hsl(var(--accent))]" size={20} />,
        title: "Rich Heritage",
        description: "Sourced from the pristine lakes of Mithila, Bihar — the makhana capital."
    }
];

export default function HeritageStory() {
    return (
        <section className="relative bg-[var(--section-white)] overflow-hidden py-10 md:py-28 px-6 md:px-12 lg:px-20">
            {/* Soft Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[hsl(var(--accent)_/_0.05)] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[hsl(var(--primary)_/_0.05)] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Visual Side - Appears FIRST on mobile, RIGHT on desktop */}
                    <div className="relative w-full order-1 lg:order-2">
                        {/* The Styled Card Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[var(--foreground)]/5"
                        >
                            {/* Heritage Lake Image */}
                            <Image
                                src="/images/heritage-lake.png"
                                alt="Makhana harvesting from the lakes of Mithila, Bihar"
                                fill
                                className="object-cover"
                            />

                            {/* Text Overlay at Bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black leading-tight">
                                    From Lake <br /> to Pack
                                </h3>
                                <p className="text-[10px] md:text-sm font-sans font-light tracking-wide uppercase italic mt-2 opacity-80">
                                    Handpicked. Slow-roasted. Flavour-packed.
                                </p>
                            </div>
                        </motion.div>

                        {/* Floating "Est." Badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 md:top-10 md:-right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-[hsl(var(--accent))] rounded-2xl shadow-xl flex items-center justify-center p-2 sm:p-3 text-white rotate-6"
                        >
                            <p className="font-serif font-black text-[8px] sm:text-[10px] md:text-sm leading-none text-center">
                                <span className="text-[6px] sm:text-[7px] md:text-[9px] block opacity-80 mb-1 tracking-wider">TRADITIONAL</span>
                                SINCE <br /> <span className="text-xs sm:text-base md:text-xl">2024</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Text Side - BELOW image on mobile, LEFT on desktop */}
                    <div className="space-y-8 md:space-y-10 order-2 lg:order-1 text-center lg:text-left">
                        <div>
                            <span className="text-[hsl(var(--accent))] font-sans font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 block text-[10px] md:text-xs">
                                OUR STORY
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-black text-[var(--foreground)] leading-[1.1] tracking-tight mb-4 md:mb-6">
                                Born in <span className="text-[hsl(var(--accent))] italic font-medium">Mithila,</span> <br className="hidden sm:block" />
                                Made for the World.
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-sans font-light max-w-xl mx-auto lg:mx-0 opacity-80">
                                Makhana has been a superfood in Indian households for centuries. We took this ancient snack and gave it a modern twist — bold flavours, clean ingredients, and packaging that pops. From farm to snack pack, every step is crafted with care.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-5 sm:space-y-6 text-left max-w-md mx-auto lg:mx-0">
                            {FEATURES.map((feature) => (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: feature.id * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent)_/_0.1)] flex items-center justify-center shrink-0 group-hover:bg-[hsl(var(--accent))] group-hover:text-white transition-colors duration-300">
                                        <div className="scale-90 group-hover:scale-100 transition-transform">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="space-y-0.5">
                                        <h3 className="font-serif font-black text-[var(--foreground)] text-sm sm:text-base uppercase tracking-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[11px] sm:text-xs md:text-sm text-[hsl(var(--muted-foreground))] font-sans font-light leading-snug opacity-90">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
