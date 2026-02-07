"use client";

const TESTIMONIALS = [
    {
        quote: "I never thought makhana could be this fun. Mithila Essence is my new movie night must-have!",
        author: "Sarah K.",
        color: "bg-sun-yellow",
    },
    {
        quote: "The Peri Peri flavor is actually spicy! Finally a snack that doesn't hold back.",
        author: "Rahul M.",
        color: "bg-mint-teal",
    },
    {
        quote: "Perfect for my kids' lunchboxes. Healthy and they actually ask for it!",
        author: "Priya D.",
        color: "bg-lava-orange",
    }
];

export default function Testimonials() {
    return (
        <section className="bg-snack-white dark:bg-stone-950 pb-32 pt-12 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-brand font-black text-center text-stone-900 dark:text-white mb-20 uppercase tracking-tight">
                    Trusted by <span className="text-berry-pink">thousands</span> of snackers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="relative py-12 px-8 flex flex-col items-center text-center">
                            {/* Animated Blob Background */}
                            <div className={`absolute inset-0 ${t.color} opacity-40 animate-blob ${i === 1 ? "[animation-delay:1s]" : i === 2 ? "[animation-delay:2s]" : ""} -z-10 scale-110`} />

                            <div className="text-4xl mb-4 text-stone-900 dark:text-white font-brand">"</div>
                            <p className="text-lg md:text-xl font-bold text-stone-800 dark:text-stone-200 leading-relaxed mb-6 font-brand">
                                {t.quote}
                            </p>
                            <span className="font-brand font-black text-lava-orange uppercase tracking-widest text-sm">
                                — {t.author}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
