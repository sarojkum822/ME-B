import { useState, useEffect } from "react";

export default function ShopHero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-stone-950 border-b border-white/5">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] aspect-square bg-lava-orange/10 rounded-full blur-[120px] animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-[400px] aspect-square bg-sky-blue/10 rounded-full blur-[100px] animate-blob [animation-delay:2s]" />

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
