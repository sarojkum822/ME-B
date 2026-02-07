import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-[90vh] md:min-h-screen bg-sun-yellow dark:bg-stone-950 flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
            {/* Background Video Support (Conditional/Placeholder for now) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {/* <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src="/_video_treatment_1080p_202602052344.mp4" type="video/video/mp4" />
                </video> */}
            </div>

            {/* Floating Artisanal Particles */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {mounted && [...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float-spin"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            opacity: 0.15,
                            transform: `scale(${0.5 + Math.random()})`
                        }}
                    >
                        <span className="text-4xl">🍿</span>
                    </div>
                ))}
            </div>

            {/* Background Shapes */}
            <div className="absolute top-20 -left-20 w-80 h-80 bg-berry-pink/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-10 -right-20 w-96 h-96 bg-mint-teal/20 rounded-full blur-3xl animate-blob [animation-delay:2s]" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 lg:gap-20 min-h-[85vh] py-28 lg:py-0 relative z-10">
                <div className="text-center lg:text-left z-20">
                    <span className="inline-block px-4 py-2 bg-lava-orange text-white font-brand font-bold text-sm rounded-full mb-8 uppercase tracking-widest animate-reveal">
                        The Ultimate Guilt-Free Crunch
                    </span>
                    <h1 className="hero-title text-6xl md:text-9xl font-brand font-black mb-10 leading-[0.9] tracking-tighter text-stone-900 dark:text-white uppercase transition-colors">
                        Crunchy. <br />
                        <span className="text-berry-pink">Spicy.</span> <br />
                        Guilt-Free.
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-stone-700 dark:text-stone-300 mb-12 max-w-lg lg:ml-0 mx-auto animate-reveal [animation-delay:200ms] leading-relaxed">
                        Snacks that don't feel like a compromise. Experience the premium, addictive crunch of artisanal popped lily seeds.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-reveal [animation-delay:300ms]">
                        <Link
                            href="/shop"
                            className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-brand font-black px-12 py-6 rounded-2xl hover:scale-105 transition-all text-lg shadow-2xl shadow-stone-300 dark:shadow-none uppercase tracking-widest"
                        >
                            Shop All Flavors
                        </Link>
                        <Link
                            href="#discovery"
                            className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white border-4 border-stone-900 dark:border-stone-800 font-brand font-black px-12 py-6 rounded-2xl hover:bg-stone-50 dark:hover:bg-stone-800 transition-all text-lg uppercase tracking-widest"
                        >
                            Explore Flavors
                        </Link>
                    </div>
                </div>

                <div className="relative w-full flex justify-center items-center z-10 mt-16 md:mt-24 lg:mt-0">
                    {/* Abstract Composition Background */}
                    <div className="absolute w-[140%] aspect-square max-w-[800px] pointer-events-none">
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-mint-teal rounded-full mix-blend-multiply opacity-20 blur-3xl animate-blob" />
                        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-berry-pink rounded-full mix-blend-multiply opacity-20 blur-3xl animate-blob [animation-delay:2s]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-sun-yellow rounded-full mix-blend-multiply opacity-20 blur-3xl animate-blob [animation-delay:4s]" />
                    </div>

                    {/* Circular Frame for Product */}
                    <div className="relative w-full aspect-square max-w-[650px] lg:max-w-[850px] group flex items-center justify-center">
                        <div className="absolute inset-0 border-4 border-stone-900 dark:border-white/10 rounded-[40%_60%_70%_30%/40%_50%_60%_40%] animate-blob opacity-20" />

                        <div className="relative w-[95%] h-[95%] animate-float flex items-center justify-center overflow-hidden rounded-[10px]">
                            <Image
                                src="/makhana-pouch.png"
                                alt="Premium Mithila Essence Pouch Packet - Gourmet Roasted Makhana"
                                fill
                                sizes="(max-width: 768px) 100vw, 850px"
                                className="object-contain group-hover:scale-105 transition-transform duration-700"
                                priority
                                unoptimized
                            />
                        </div>

                        {/* Floating Interaction (Removed detailed badge, just a visual pop) */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sun-yellow rounded-full p-8 flex items-center justify-center border-4 border-stone-900 rotate-12 animate-float shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="font-brand font-black text-stone-900 text-center uppercase tracking-tighter leading-none text-2xl">Pure <br /> Crunch</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
