"use client";

import React from "react";
import { Star, Flame, Leaf } from "lucide-react";

const trustItems = [
    { label: "4.8 Avg Rating", icon: <Star size={16} className="fill-sun-yellow text-sun-yellow" /> },
    { label: "Roasted, Not Fried", icon: <Flame size={16} className="text-lava-orange" /> },
    { label: "Made in Bihar", icon: <Leaf size={16} className="text-green-600" /> },
];

export default function TrustStrip() {
    return (
        <section className="bg-[var(--section-white)] border-y border-[var(--chip-border)] py-4 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap md:flex-row justify-center items-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-20">
                    {trustItems.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 md:gap-3 whitespace-nowrap">
                            <div className="shrink-0 scale-90 md:scale-100">
                                {item.icon}
                            </div>
                            <span className="font-serif font-black text-xs md:text-sm uppercase tracking-[0.15em] text-[var(--foreground)]">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
