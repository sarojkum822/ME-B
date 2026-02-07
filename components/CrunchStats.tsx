"use client";

const trustCards = [
    { label: "High Protein", description: "9g of plant-based power per pack.", icon: "💪", color: "bg-lava-orange" },
    { label: "Wood-Fire Roasted", description: "Never fried, always perfectly crunchy.", icon: "🔥", color: "bg-sun-yellow" },
    { label: "Under 100 Cal", description: "The perfect guilt-free snack buddy.", icon: "⚖️", color: "bg-mint-teal" },
    { label: "No Palm Oil", description: "Made with heart-healthy ingredients.", icon: "🌿", color: "bg-berry-pink" },
];

export default function CrunchStats() {
    return (
        <section className="bg-white dark:bg-stone-950 py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-lava-orange font-brand font-black text-sm uppercase tracking-[0.3em] mb-4 block animate-reveal">Why Mithila Essence?</span>
                    <h2 className="text-4xl md:text-6xl font-brand font-black uppercase text-stone-900 dark:text-white leading-[0.9] tracking-tighter">
                        Smart Snacking. <br /> <span className="text-stone-400">Pure Tradition.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trustCards.map((card, i) => (
                        <div key={i} className="group bg-stone-50 dark:bg-stone-900 p-8 rounded-[2.5rem] border-4 border-stone-900 dark:border-stone-800 hover:bg-stone-900 hover:text-white transition-all duration-500">
                            <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg border-2 border-stone-900 group-hover:scale-110 transition-transform`}>
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-brand font-black uppercase mb-2 tracking-tight">
                                {card.label}
                            </h3>
                            <p className="text-stone-500 group-hover:text-stone-300 font-medium leading-snug">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
