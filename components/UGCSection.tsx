"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const UGC_POSTS = [
    {
        id: 1,
        image: "/images/ugc/work-snack.png",
        user: "@anjali_vibes",
        likes: "1.2k",
        comments: "42",
        caption: "Perfect office snack doesn't exi— 🌶️🔥 #MithilaEssence #HealthySnacking",
        style: "md:-translate-y-12"
    },
    {
        id: 2,
        image: "/images/ugc/movie-night.png",
        user: "@the_foodie_soul",
        likes: "856",
        comments: "28",
        caption: "Binge-watching and binge-snacking. No regrets. 🍿✨ #MakhanaLove #Mithila",
        style: "md:translate-y-8"
    },
    {
        id: 3,
        image: "/images/ugc/fitness-ready.png",
        user: "@fitness_rahul",
        likes: "2.5k",
        comments: "156",
        caption: "Post-workout essential. High protein, zero junk. 💪🥜 #FitnessJourney #MithilaEssence",
        style: "md:-translate-y-4"
    },
    {
        id: 4,
        image: "/images/ugc/weekend-picnic.png",
        user: "@sneha_travels",
        likes: "3.1k",
        comments: "89",
        caption: "Sun, snacks, and good vibes. ☀️🧺 #PicnicEssentials #HealthyLiving",
        style: "md:translate-y-16"
    }
];

export default function UGCSection() {
    return (
        <section className="py-10 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[var(--background)]">
            {/* Insta-vibe Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 40, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-900/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-500/10 dark:bg-pink-900/10 blur-[140px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-royal-blue/5 dark:bg-royal-blue/10 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5,
                    }}
                    className="absolute bottom-[20%] left-[10%] w-[35%] h-[35%] bg-lava-orange/5 dark:bg-lava-orange/10 blur-[110px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-28">
                    <span className="text-[hsl(var(--accent))] font-sans font-bold tracking-[0.4em] uppercase mb-4 block text-[10px] md:text-xs">
                        Community
                    </span>
                    <h2 className="text-4xl md:text-7xl font-serif font-black text-[var(--foreground)] leading-tight mb-6">
                        Spotted in <span className="text-[var(--accent)] italic font-medium">Your Life.</span>
                    </h2>
                    <p className="text-base md:text-xl text-[hsl(var(--muted-foreground))] font-sans font-light max-w-2xl mx-auto opacity-70">
                        Tag us in your stories to get featured. Join thousands of snack lovers celebrating the Mithila culture.
                    </p>
                </div>

                {/* Pinterest-style Masonry for Mobile, Standard Grid for Desktop */}
                <div className="columns-2 sm:columns-2 lg:grid lg:grid-cols-4 gap-4 md:gap-10 [column-fill:_balance]">
                    {UGC_POSTS.map((post, index) => (
                        <div
                            key={post.id}
                            className={`break-inside-avoid mb-4 lg:mb-0 group relative overflow-visible z-10 ${post.style} ${
                                // Adding slight variation in heights for mobile masonry
                                index % 2 === 0 ? "h-[220px] md:h-auto" : "h-[280px] md:h-auto"
                                } lg:h-auto lg:aspect-[3.5/5]`}
                        >
                            {/* Card Container - Instagram Style */}
                            <div className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
                                <Image
                                    src={post.image}
                                    alt={post.caption}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Social Handle Info - Always visible on mobile, overlay on hover for desktop */}
                                <div className="absolute top-3 left-3 flex items-center gap-1.5 lg:hidden bg-black/20 backdrop-blur-md rounded-full pl-1 pr-2.5 py-1 text-white border border-white/10">
                                    <div className="w-5 h-5 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-[7px] font-black">
                                        ME
                                    </div>
                                    <span className="font-sans font-bold text-[9px] tracking-tight">{post.user}</span>
                                </div>

                                {/* Modern Overlay - Hidden on mobile, visible on hover for desktop */}
                                <div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6 text-white backdrop-blur-[2px]">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))] border-2 border-white flex items-center justify-center text-[10px] font-black">
                                            ME
                                        </div>
                                        <span className="font-sans font-bold text-sm tracking-tight">{post.user}</span>
                                    </div>
                                    <p className="text-xs line-clamp-2 font-sans font-medium mb-4 opacity-90 leading-relaxed italic">
                                        "{post.caption}"
                                    </p>
                                    <div className="flex items-center gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest pt-4 border-t border-white/20">
                                        <span className="flex items-center gap-1.5"><Heart size={14} fill="currentColor" /> {post.likes}</span>
                                        <span className="flex items-center gap-1.5"><MessageCircle size={14} /> {post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 md:mt-32 text-center">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-14 md:h-16 px-10 md:px-12 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--cta-primary-text)] font-serif font-black text-xs md:text-sm uppercase tracking-widest transition-all hover:bg-[var(--primary)]/90 hover:scale-105 active:scale-95 shadow-xl"
                    >
                        <Instagram size={18} className="mr-3" />
                        Join the Culture
                    </a>
                </div>
            </div>
        </section>
    );
}
