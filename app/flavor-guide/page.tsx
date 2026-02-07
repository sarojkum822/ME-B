"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FLAVORS = [
    {
        name: "Sea Salt & Vinegar",
        description: "The timeless classic. A sharp, tangy kick balanced with mineral-rich Himalayan salt crystals.",
        spice: 2, crunch: 10, sweet: 1, color: "bg-sky-blue"
    },
    {
        name: "Peri Peri Volcano",
        description: "For the brave. Infused with 12 secret bird's eye chilies and a hint of smoky citrus.",
        spice: 10, crunch: 9, sweet: 2, color: "bg-lava-orange"
    },
    {
        name: "Wild Honey Glaze",
        description: "A golden masterpiece. Hand-glazed with forest honey for a delicate, floral sweetness.",
        spice: 1, crunch: 8, sweet: 10, color: "bg-berry-pink"
    },
    {
        name: "Lemon Minty Fresh",
        description: "Nature's detox. Zesty lemon zest paired with cool, garden-fresh mint leaves.",
        spice: 3, crunch: 9, sweet: 3, color: "bg-mint-teal"
    },
    {
        name: "Dark Chocolate",
        description: "Gourmet indulgence. Coated in 70% artisanal dark cocoa for a guilt-free luxury treat.",
        spice: 0, crunch: 8, sweet: 8, color: "bg-stone-800"
    },
    {
        name: "Himalayan Pink Salt",
        description: "Purity defined. Minimalist seasoning to let the natural artisanal crunch shine through.",
        spice: 1, crunch: 10, sweet: 0, color: "bg-stone-400"
    }
];

export default function FlavorGuidePage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-mint-teal selection:text-stone-900">
            <Navbar />

            {/* Guide Hero */}
            <section className="pt-40 pb-20 px-6 text-center bg-stone-950 dark:bg-stone-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-mint-teal/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lava-orange/10 rounded-full blur-[100px]" />

                <div className="relative z-10">
                    <h1 className="text-6xl md:text-9xl font-brand font-black uppercase tracking-tighter mb-8 leading-none">
                        Your Flavor <br />
                        <span className="text-sun-yellow">Odyssey</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-stone-400 font-medium">
                        A detailed breakdown of our artisanal profiles, heat levels, and the science of the crunch.
                    </p>
                </div>
            </section>

            {/* Flavor Grid Table */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FLAVORS.map((flavor) => (
                        <div key={flavor.name} className="bg-white rounded-[2.5rem] p-10 shadow-2xl border-4 border-stone-900 group hover:-translate-y-2 transition-transform duration-500">
                            <div className={`${flavor.color} w-20 h-20 rounded-2xl mb-8 flex items-center justify-center text-4xl shadow-lg border-2 border-stone-900`}>
                                {flavor.name.includes("Sea") ? "🌊" : flavor.name.includes("Peri") ? "🔥" : flavor.name.includes("Honey") ? "🍯" : flavor.name.includes("Lemon") ? "🍋" : flavor.name.includes("Dark") ? "🍫" : "⛰️"}
                            </div>
                            <h2 className="text-3xl font-brand font-black uppercase mb-4 tracking-tighter leading-none">{flavor.name}</h2>
                            <p className="text-stone-500 font-medium mb-10 leading-relaxed italic border-l-4 border-stone-100 pl-4">
                                "{flavor.description}"
                            </p>

                            {/* Detailed Scales */}
                            <div className="space-y-6">
                                {[
                                    { label: "Spice Level", val: flavor.spice, color: "bg-lava-orange" },
                                    { label: "Crunch Factor", val: flavor.crunch, color: "bg-sky-blue" },
                                    { label: "Sweetness", val: flavor.sweet, color: "bg-berry-pink" }
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className="flex justify-between text-xs font-brand font-black uppercase tracking-widest mb-2 text-stone-400">
                                            <span>{stat.label}</span>
                                            <span className="text-stone-900">{stat.val}/10</span>
                                        </div>
                                        <div className="h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-900/5">
                                            <div
                                                className={`h-full ${stat.color} transition-all duration-1000 delay-300`}
                                                style={{ width: `${stat.val * 10}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
