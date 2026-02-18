"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const healthBenefits = [
    "High Protein",
    "Low Cal",
    "No Palm Oil",
    "Diabetic Friendly"
];

export default function HealthBar() {
    return (
        <section className="bg-[#1E1410] py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-6">
                <Link
                    href="/why-makhana"
                    className="group bg-white/5 border border-white/10 rounded-2xl md:rounded-full py-4 md:py-6 px-12 block hover:bg-white/10 transition-all"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-2 text-[var(--text-primary)]">
                            {healthBenefits.map((benefit, i) => (
                                <React.Fragment key={i}>
                                    <span className="font-serif font-bold text-sm md:text-xl uppercase tracking-widest transition-colors group-hover:text-[#F6B24A] text-[#F5EDE3]">
                                        {benefit}
                                    </span>
                                    {i < healthBenefits.length - 1 && (
                                        <span className="text-white/30 hidden md:inline">·</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-[#F6B24A] font-serif font-bold text-xs md:text-sm uppercase tracking-widest whitespace-nowrap">
                            Why it's better
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
