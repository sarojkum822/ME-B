"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import MakhanaAtom from "./MakhanaAtom";

export default function Hero() {
    return (
        <section className="relative min-h-[100vh] md:min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'hsl(38, 33%, 96%)' }}>

            {/* ===== LAYER 1: Base Paper Texture ===== */}
            <div
                className="absolute inset-0 opacity-20 dark:opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'paper\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.02\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23paper)\'/%3E%3C/svg%3E")',
                }}
            />

            {/* ===== LAYER 2: Madhubani Line-Art Motif (Right Side Only) ===== */}
            {/* Subtle lotus petals, geometric vines, dots - 4% opacity */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 2a. Repeating Snack Pattern (Global) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="hero-snack-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                                <path d="M40 60 Q50 40 70 50 Q90 60 80 80 Q70 100 50 90 Q30 80 40 60" fill="none" stroke="currentColor" strokeWidth="1.2" />
                                <circle cx="60" cy="70" r="1.5" fill="currentColor" />
                                <path d="M120 20 Q140 40 120 60 Q100 80 120 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <circle cx="150" cy="150" r="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
                                <path d="M10 180 L30 160 L50 180" fill="none" stroke="currentColor" strokeWidth="0.8" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-snack-pattern)" className="text-stone-900 dark:text-stone-300" />
                    </svg>
                </div>

                {/* 2b. Specific Right-side Motif */}
                <svg
                    className="absolute right-0 top-0 h-full w-2/3 opacity-[0.05] dark:opacity-[0.03]"
                    viewBox="0 0 600 800"
                    fill="none"
                    preserveAspectRatio="xMaxYMid slice"
                >
                    {/* Geometric Lotus Pattern - Subtly Identifiable as Mithila Essence Style */}
                    <g stroke="currentColor" strokeWidth="1.2" fill="none" className="text-stone-900 dark:text-stone-300">
                        {/* Central lotus blooms */}
                        <ellipse cx="450" cy="400" rx="60" ry="30" />
                        <ellipse cx="450" cy="200" rx="40" ry="20" />
                        <ellipse cx="450" cy="600" rx="40" ry="20" />

                        {/* Connecting vines and leaves in Madhubani style */}
                        <path d="M450 100 Q480 200 450 300 Q420 400 450 500 Q480 600 450 700" />
                        <path d="M550 50 Q580 150 560 250 Q540 350 580 450 Q620 550 580 650" />

                        {/* Petal details */}
                        <path d="M450 370 L480 320 L510 370" />
                        <path d="M450 430 L420 480 L390 430" />

                        {/* Traditional dots and geometric fillers */}
                        <circle cx="200" cy="180" r="3" fill="currentColor" />
                        <circle cx="260" cy="380" r="3" fill="currentColor" />
                        <circle cx="220" cy="580" r="3" fill="currentColor" />
                        <path d="M300 100 L320 80 L340 100" />
                        <path d="M300 400 L320 380 L340 400" />
                        <path d="M300 700 L320 680 L340 700" />
                    </g>
                </svg>
            </div>



            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 pt-20 pb-8 md:pb-12">

                {/* ========== MOBILE LAYOUT ========== */}
                <div className="lg:hidden flex flex-col items-center text-center">

                    {/* Capsule label */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[#EFE7D8]/60 dark:bg-[#12161C]/60 border border-[#D8D0C0] dark:border-[#242B35]">
                        <span className="w-2 h-2 rounded-full animate-pulse bg-[#F6B24A]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A4F57] dark:text-[#B9C0CA]">
                            Roasted • Not Fried
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl leading-[0.92] font-brand font-black uppercase tracking-tight mb-5 text-[#111318] dark:text-[#F5F7FA]">
                        Crunch That<br />
                        <span className="text-[#E8A838] dark:text-[#F6B24A]">Hooks You.</span>
                    </h1>

                    {/* Unified Hero Visual - Mobile (Reverted to brand image) */}
                    <div className="relative w-full aspect-[4/3] max-w-[400px] mb-6">
                        <Image
                            src="/hero-pouches-illustrative.png"
                            alt="Mithila Essence Collection"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Subcopy */}
                    <p className="text-[15px] font-medium mb-4 max-w-xs text-[#4A4F57] dark:text-[#B9C0CA]">
                        Roasted makhana. Big flavor. Zero junk.
                    </p>

                    {/* Trust chips */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {['Roasted', 'No Palm Oil', 'High Protein'].map((chip) => (
                            <span
                                key={chip}
                                className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-[#EFE7D8] dark:bg-[#12161C] border border-[#D8D0C0] dark:border-[#242B35] text-[#4A4F57] dark:text-[#B9C0CA]"
                            >
                                {chip}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="w-full max-w-xs flex flex-col gap-3 mb-3">
                        <Link
                            href="/shop"
                            className="w-full h-[56px] flex items-center justify-center font-brand font-black text-[15px] rounded-2xl uppercase tracking-widest transition-transform hover:scale-[1.02] bg-[#F6B24A] text-[#111318] shadow-xl"
                        >
                            Shop Now
                        </Link>
                        <Link
                            href="#discovery"
                            className="w-full h-[52px] flex items-center justify-center font-brand font-bold text-[14px] rounded-2xl uppercase tracking-widest transition-all hover:bg-[#EFE7D8]/60 dark:hover:bg-[#12161C] border border-[#D8D0C0] dark:border-[#242B35] text-[#4A4F57] dark:text-[#B9C0CA]"
                        >
                            Explore Flavors
                        </Link>
                    </div>

                    {/* Price anchor */}
                    <p className="text-sm text-[#7B8190] dark:text-[#8A93A3]">
                        Starting at <span className="text-[#E8A838] font-bold">₹299</span> · Free delivery above ₹499
                    </p>
                </div>

                {/* ========== DESKTOP LAYOUT ========== */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-[80vh]">

                    {/* LEFT COLUMN */}
                    <div className="max-w-xl">
                        {/* Capsule label */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#EFE7D8]/60 dark:bg-[#12161C]/60 border border-[#D8D0C0] dark:border-[#242B35]">
                            <span className="w-2 h-2 rounded-full animate-pulse bg-[#F6B24A]" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A4F57] dark:text-[#B9C0CA]">
                                Roasted • Not Fried
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-7xl xl:text-8xl 2xl:text-9xl leading-[0.9] font-brand font-black uppercase tracking-tight mb-6 text-[#111318] dark:text-[#F5F7FA]">
                            Crunch<br />That<br />
                            <span className="text-[#E8A838] dark:text-[#F6B24A]">Hooks.</span>
                        </h1>

                        {/* Subcopy */}
                        <p className="text-xl xl:text-2xl font-medium mb-6 max-w-md text-[#4A4F57] dark:text-[#B9C0CA]">
                            Roasted makhana with real spice.<br />No oil. No junk.
                        </p>

                        {/* Trust chips row */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Roasted', 'No Palm Oil', 'High Protein', 'Made in Bihar'].map((chip) => (
                                <span
                                    key={chip}
                                    className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide bg-[#EFE7D8] dark:bg-[#12161C] border border-[#D8D0C0] dark:border-[#242B35] text-[#4A4F57] dark:text-[#B9C0CA]"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex gap-4 mb-6">
                            <Link
                                href="/shop"
                                className="px-12 py-5 font-brand font-black text-lg rounded-full uppercase tracking-widest transition-all hover:scale-105 shadow-xl bg-[#F6B24A] text-[#111318]"
                            >
                                Shop Now
                            </Link>
                            <Link
                                href="#discovery"
                                className="px-10 py-5 font-brand font-bold text-lg rounded-full uppercase tracking-widest transition-all hover:bg-[#EFE7D8]/60 dark:hover:bg-[#12161C] border border-[#D8D0C0] dark:border-[#242B35] text-[#4A4F57] dark:text-[#B9C0CA]"
                            >
                                Explore Flavors
                            </Link>
                        </div>

                        {/* Price anchor */}
                        <p className="text-base text-[#7B8190] dark:text-[#8A93A3]">
                            Starting at <span className="text-[#E8A838] font-bold text-lg">₹299</span> · Free delivery above ₹499
                        </p>
                    </div>

                    {/* RIGHT COLUMN - Unified Product Image */}
                    <div className="relative flex justify-center items-center">
                        <div className="relative w-full aspect-[4/3] max-w-[800px]">
                            {/* Broad shadow under the group */}
                            <div className="absolute inset-x-12 bottom-8 h-12 rounded-[100%] blur-[60px] bg-black/20 dark:bg-black/50" />

                            <Image
                                src="/hero-pouches-illustrative.png"
                                alt="Mithila Essence Collection"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

