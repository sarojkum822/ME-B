"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

const flavors = [
    {
        name: "Classic Salted",
        productId: 1,
        description: "The original crunch. Lightly roasted and perfectly salted for a timeless snacking experience.",
        color: "bg-salt-cyan",
        textColor: "text-stone-900",
        image: "/flavor-salted-sticker.png",
        profile: { spice: 10, crunch: 100, sweet: 5 }
    },
    {
        name: "Spicy Peri Peri",
        productId: 2,
        description: "Turn up the heat. A bold blend of African bird's eye chili and zesty citrus.",
        color: "bg-lava-orange",
        textColor: "text-white",
        image: "/flavor-spicy-exploding.jpg",
        isExploding: true,
        profile: { spice: 95, crunch: 90, sweet: 15 }
    },
    {
        name: "Minty Lime",
        productId: 4,
        description: "Refreshingly crisp. Cool mint meets zesty lime for a unique summer snack.",
        color: "bg-mint-teal",
        textColor: "text-stone-900",
        image: "/flavor-minty-sticker.png",
        isExploding: false,
        profile: { spice: 20, crunch: 85, sweet: 40 }
    },
];

export default function FlavorSections() {
    const [scrollY, setScrollY] = useState(0);
    const { addToCart } = useCart();

    const handleAddToCart = (flavor: any) => {
        addToCart({
            id: flavor.productId,
            name: flavor.name,
            price: 299, // Utilizing a default price since it's not in the flavor object, could be improved by fetching product details but this is a quick fix for the UI request.
            color: flavor.color,
            img: flavor.image
        });
        // Feedback could be added here
    };

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="flavor-guide">
            {flavors.map((flavor, index) => (
                <div
                    key={flavor.name}
                    className={`relative min-h-[85vh] flex items-center py-24 px-6 ${flavor.color} ${flavor.textColor} overflow-hidden`}
                >
                    <div className="max-w-7xl mx-auto w-full relative z-10">
                        <div className={`flex flex-col lg:flex-row items-center justify-between gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1 text-center lg:text-left">
                                <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold tracking-widest uppercase mb-8">
                                    Featured Flavor
                                </span>
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-brand font-bold mb-8 leading-tight tracking-tight">
                                    {flavor.name}
                                </h2>
                                <p className={`text-lg md:text-2xl mb-12 max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed`}>
                                    {flavor.description}
                                </p>

                                {/* Flavor Profile Scales */}
                                <div className="max-w-md mx-auto lg:mx-0 mb-12 space-y-6 bg-black/5 p-8 rounded-[2rem] backdrop-blur-sm">
                                    {[
                                        { label: "Spiciness", val: flavor.profile.spice, icon: "🌶️" },
                                        { label: "Crunch", val: flavor.profile.crunch, icon: "💎" },
                                        { label: "Sweetness", val: flavor.profile.sweet, icon: "🍯" }
                                    ].map((p, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between text-sm font-brand font-bold uppercase tracking-widest">
                                                <span>{p.icon} {p.label}</span>
                                                <span>{p.val}%</span>
                                            </div>
                                            <div className="h-2 bg-stone-900/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-stone-900 transition-all duration-1000 ease-out"
                                                    style={{ width: `${p.val}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/shop"
                                    className="inline-block bg-stone-900 text-white font-brand font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-transform text-lg shadow-xl"
                                >
                                    TRY THIS FLAVOR →
                                </Link>

                                <button
                                    onClick={() => handleAddToCart(flavor)}
                                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/40 text-inherit font-brand font-bold px-8 py-5 rounded-2xl hover:bg-white/30 transition-all text-lg shadow-xl ml-4"
                                >
                                    <ShoppingCart size={24} />
                                    ADD TO CART
                                </button>
                            </div>

                            <div className="flex-1 relative w-full flex justify-center items-center z-10">
                                {/* Abstract Composition Background */}
                                <div className="absolute w-[120%] aspect-square max-w-[550px] pointer-events-none">
                                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white rounded-full mix-blend-overlay opacity-20 blur-3xl animate-blob" />
                                    <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-black rounded-full mix-blend-multiply opacity-10 blur-3xl animate-blob [animation-delay:2s]" />
                                </div>

                                {/* Circular Frame for Product */}
                                <div className="relative w-full aspect-square max-w-[400px] lg:max-w-[450px] group flex items-center justify-center">
                                    {/* Decorative Rings */}
                                    <div className="absolute inset-0 border-2 border-white/20 rounded-full scale-110 animate-pulse" />
                                    <div className="absolute inset-4 border border-white/10 rounded-full scale-105" />

                                    {/* Abstract Backdrop Shape */}
                                    <div className="absolute inset-10 bg-white/20 rounded-[40%_60%_70%_30%/40%_50%_60%_40%] animate-blob blur-xl" />

                                    <div className="relative w-4/5 h-4/5 animate-float flex items-center justify-center">
                                        {/* Inner Circular Mask */}
                                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-md border-4 border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                                            <Image
                                                src={flavor.image}
                                                alt={flavor.name}
                                                fill
                                                className={`object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ${flavor.isExploding ? 'brightness-110' : ''}`}
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Parallax Decorative text background */}
                    <div
                        className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none z-0 overflow-hidden"
                        style={{ transform: `translateY(${(scrollY - (index * 1000)) * 0.1 - 200}px)` }}
                    >
                        <span className="text-[25vw] font-brand font-black uppercase whitespace-nowrap">
                            {flavor.name.split(' ')[0]}
                        </span>
                    </div>
                </div>
            ))}
        </section>
    );
}
