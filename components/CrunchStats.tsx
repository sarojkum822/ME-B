"use client";

const stats = [
    { label: "Crunch Factor", value: "100%", unit: "Pure", color: "text-lava-orange" },
    { label: "Plant Protein", value: "9", unit: "Grams", color: "text-berry-pink" },
    { label: "Guilt Level", value: "0%", unit: "None", color: "text-mint-teal" },
    { label: "Flavor Burst", value: "MAX", unit: "Intense", color: "text-sun-yellow" },
];

export default function CrunchStats() {
    return (
        <section className="bg-stone-900 py-16 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <h3 className={`text-5xl md:text-7xl font-brand font-black mb-2 transition-transform duration-500 group-hover:scale-110 ${stat.color}`}>
                                {stat.value}
                            </h3>
                            <p className="text-stone-400 font-brand font-bold text-sm uppercase tracking-[0.2em] mb-1">
                                {stat.label}
                            </p>
                            <span className="text-stone-600 font-medium text-xs uppercase tracking-widest">
                                {stat.unit}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
