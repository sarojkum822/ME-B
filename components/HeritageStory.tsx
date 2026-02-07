"use client";

import Image from "next/image";

export default function HeritageStory() {
    return (
        <section className="relative bg-white dark:bg-stone-900 overflow-hidden py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-sun-yellow/10 rounded-[3rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700" />
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-stone-900 shadow-[20px_20px_0px_0px_rgba(28,25,23,0.05)]">
                            <Image
                                src="/hero-image.jpg"
                                alt="Mithila Heritage"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-8 right-8 bg-lava-orange text-white p-6 rounded-3xl border-3 border-stone-900 shadow-xl">
                                <p className="font-brand font-black text-2xl uppercase leading-tight">
                                    Since <br /> <span className="text-4xl">Ancient</span> <br /> Times
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-berry-pink font-brand font-black tracking-widest uppercase mb-4 block">
                                Our Roots
                            </span>
                            <h2 className="text-5xl md:text-7xl font-brand font-bold text-stone-900 dark:text-white leading-tight">
                                The Mithila <span className="text-mint-teal">Heritage</span> Story.
                            </h2>
                        </div>

                        <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed font-medium">
                            Born from the sacred wetlands of Mithila, our Makhana is more than just a snack—it's a
                            legendary superfood. For centuries, these "Fox Nuts" have been hand-picked by
                            local artisans, following traditions that respect the earth and its rhythm.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div className="border-l-4 border-sun-yellow pl-6">
                                <p className="text-3xl font-brand font-black text-stone-900 dark:text-white mb-1">Authentic</p>
                                <p className="text-stone-500 dark:text-stone-400 font-medium">Straight from the origin</p>
                            </div>
                            <div className="border-l-4 border-mint-teal pl-6">
                                <p className="text-3xl font-brand font-black text-stone-900 dark:text-white mb-1">Sustainable</p>
                                <p className="text-stone-500 dark:text-stone-400 font-medium">Eco-friendly harvesting</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-brand font-bold px-12 py-5 rounded-2xl hover:scale-105 transition-all text-lg group flex items-center gap-3">
                                EXPLORE THE STORY
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-berry-pink/5 rounded-full blur-3xl" />
        </section>
    );
}
