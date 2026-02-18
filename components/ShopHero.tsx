import { useState, useEffect } from "react";

export default function ShopHero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-stone-950 border-b border-white/5">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] aspect-square bg-lava-orange/10 rounded-full blur-[120px] animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-[400px] aspect-square bg-sky-blue/10 rounded-full blur-[100px] animate-blob [animation-delay:2s]" />

                {/* Mithila Snack Motif Pattern */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="mithila-snack-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                                {/* Stylized Makhana (Lotus Seed) Silhouette */}
                                <path d="M40 60 Q50 40 70 50 Q90 60 80 80 Q70 100 50 90 Q30 80 40 60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="60" cy="70" r="2" fill="currentColor" />

                                {/* Madhubani vines/dots */}
                                <path d="M120 20 Q140 40 120 60 Q100 80 120 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                                <circle cx="150" cy="150" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                                <circle cx="150" cy="150" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" />

                                {/* Geometric accents */}
                                <path d="M10 180 L30 160 L50 180" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#mithila-snack-pattern)" className="text-white dark:text-stone-300" />
                    </svg>
                </div>

                {/* Micro-Particles Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {isMounted && [...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full w-1 h-1 animate-pulse"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 text-center px-6">
                <div className="inline-block px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                    <span className="text-sun-yellow font-brand font-black text-xs uppercase tracking-[0.2em]">
                        Neo-Artisanal Selection
                    </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-brand font-black uppercase leading-none tracking-tighter mb-6">
                    Mithila <span className="text-mint-teal">Essence</span> <br />
                    Shop All
                </h1>
                <p className="max-w-xl mx-auto text-lg text-stone-400 font-medium leading-relaxed">
                    Explore our range of premium, handcrafted makhana inspired by ancient traditions and modern craft.
                </p>
            </div>
        </section>
    );
}
