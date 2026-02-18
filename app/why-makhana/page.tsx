import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyMakhana from "@/components/WhyMakhana";

export default function WhyMakhanaPage() {
    return (
        <main className="min-h-screen relative bg-[var(--background)] overflow-hidden">
            {/* Global Artisanal Particles - Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
            </div>

            {/* Mithila Motif Background Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
                <svg className="absolute right-0 top-0 h-full w-1/2" viewBox="0 0 600 800" fill="none">
                    <g stroke="currentColor" strokeWidth="1.5" className="text-stone-900 dark:text-white">
                        <circle cx="450" cy="200" r="100" />
                        <circle cx="450" cy="200" r="60" />
                        <path d="M450 100 L450 300 M350 200 L550 200" />
                        <path d="M450 400 Q500 500 450 600 Q400 700 450 800" />
                    </g>
                </svg>
            </div>

            <div className="relative z-10">
                <Navbar />

                {/* Hero Section for Why Makhana Page */}
                <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-stone-900 overflow-hidden">
                    {/* Hero Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint-teal/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <span className="bg-[hsl(var(--accent)_/_0.15)] text-[hsl(var(--accent))] border border-[hsl(var(--accent)_/_0.3)] px-6 py-2 rounded-full font-brand font-bold text-xs uppercase tracking-[0.2em] inline-block mb-8">
                            Nutritional Excellence
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-brand font-black text-white mb-8 tracking-tighter uppercase">
                            The <span className="text-[hsl(var(--accent))]">Superfood</span><br />Standard
                        </h1>
                        <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto leading-relaxed font-medium">
                            Treasured for 3,000 years. Perfected for the modern palate.
                            Discover why health-conscious foodies are making the switch.
                        </p>
                    </div>

                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
                </section>

                <WhyMakhana />

                {/* Additional Why Makhana Sections */}
                <section className="py-24 px-6 md:px-12 lg:px-20 bg-[var(--section-white)]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="bg-[hsl(var(--primary))] text-[var(--cta-primary-text)] px-4 py-2 rounded-full font-brand font-bold text-xs uppercase tracking-wide inline-block mb-4">
                                    Ancient Wisdom
                                </span>
                                <h2 className="text-3xl md:text-4xl font-brand font-black text-[var(--text-primary)] mb-6">
                                    A 3,000 Year Old <span className="text-[hsl(var(--accent))]">Superfood</span>
                                </h2>
                                <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
                                    Makhana, also known as fox nuts or lotus seeds, has been treasured in Asian cultures for millennia.
                                    Harvested from the Euryale ferox plant, these seeds are roasted to perfection, creating a light,
                                    crunchy snack that&apos;s naturally delicious.
                                </p>
                                <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
                                    In Ayurveda, makhana is celebrated for its cooling properties and is considered beneficial for
                                    heart health, digestion, and overall well-being.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-[hsl(var(--primary)_/_0.2)] to-[hsl(var(--accent)_/_0.2)] rounded-3xl p-8 aspect-square flex items-center justify-center">
                                <span className="text-9xl">🪷</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Perfect For Section */}
                <section className="py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-brand font-black text-[var(--text-primary)] mb-6">
                                Perfect For <span className="text-[hsl(var(--accent))]">Everyone</span>
                            </h2>
                            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                                Whether you&apos;re a fitness enthusiast, busy professional, or a parent looking for healthy snacks for kids.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: "🏋️", title: "Fitness Enthusiasts", desc: "High protein, low calorie snack for pre/post workout" },
                                { icon: "👶", title: "Kids & Families", desc: "Safe, nutritious, and delicious for growing children" },
                                { icon: "💼", title: "Office Workers", desc: "Perfect desk snack that won't cause energy crashes" },
                                { icon: "🧘", title: "Health Conscious", desc: "Ideal for weight management and mindful eating" },
                            ].map((item, index) => (
                                <div key={index} className="bg-[var(--section-white)] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group border border-[var(--chip-border)]">
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <h3 className="font-brand font-bold text-[var(--text-primary)] text-lg mb-2">{item.title}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-[#1E1410] text-white py-24 text-center px-6 md:px-12 lg:px-20">
                    <h2 className="text-4xl md:text-6xl font-brand font-black mb-8">
                        Ready to try <span className="text-[#F6B24A]">Makhana</span>?
                    </h2>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
                        Experience the perfect blend of taste and nutrition with our premium flavored makhana.
                    </p>
                    <a
                        href="/shop"
                        className="inline-block px-10 py-5 bg-[#F6B24A] text-[#1E1410] font-brand font-black rounded-2xl hover:scale-105 transition-transform text-xl"
                    >
                        Shop Our Flavors →
                    </a>
                </section>

                <Footer />
            </div>
        </main>
    );
}
