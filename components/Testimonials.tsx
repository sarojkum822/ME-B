"use client";

import React from "react";

const TESTIMONIALS = [
    {
        name: "Rahul Verma",
        location: "Bangalore, Karnataka",
        initial: "R",
        color: "bg-lava-orange/90",
        rating: 5,
        quote: "I've tried countless Makhana brands, but nothing compares to Mithila Essence. The quality is unmatched - you can literally taste the difference. Worth every rupee!"
    },
    {
        name: "Anjali Reddy",
        location: "Hyderabad, Telangana",
        initial: "A",
        color: "bg-amber-600/90",
        rating: 5,
        quote: "Perfect for gifting! The packaging is beautiful and the product speaks for itself. My entire family is now hooked on these heritage snacks."
    },
    {
        name: "Priya Sharma",
        location: "Mumbai, Maharashtra",
        initial: "P",
        color: "bg-stone-600/90",
        rating: 5,
        quote: "This isn't just a snack—it's a lifestyle upgrade! The crunch, the flavors, the story behind each kernel. Absolutely obsessed with the Spice Symphony collection!"
    }
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5 mb-4">
        {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

export default function Testimonials() {
    return (
        <section className="bg-[var(--section-white)] py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-6xl font-serif font-black text-[var(--foreground)] mb-6 uppercase tracking-tight leading-none">
                        What Our <span className="text-[var(--muted-foreground)] italic font-medium">Community</span> Says
                    </h2>
                    <p className="text-[var(--muted-foreground)] font-sans font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
                        Join thousands who've transformed their snacking with Mithila Essence
                    </p>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-10 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-8 md:pb-0 px-2 md:px-0">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className="min-w-[85vw] md:min-w-0 snap-center bg-[var(--muted)] p-8 md:p-10 rounded-2xl relative shadow-xl border-t border-white/20 transition-all hover:shadow-2xl duration-500"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center text-white text-xl font-serif font-black shrink-0 shadow-lg`}>
                                    {t.initial}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-serif font-black text-[var(--foreground)] uppercase tracking-tight text-lg">
                                        {t.name}
                                    </span>
                                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                                        {t.location}
                                    </span>
                                </div>
                            </div>

                            <StarRating rating={t.rating} />

                            <p className="text-[var(--foreground)] font-sans font-light leading-relaxed italic text-lg">
                                "{t.quote}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

