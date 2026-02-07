import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyMakhana from "@/components/WhyMakhana";

export default function WhyMakhanaPage() {
    return (
        <main className="min-h-screen relative bg-snack-white dark:bg-stone-950">
            {/* Global Artisanal Particles - Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float-spin"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.7}s`,
                            transform: `scale(${0.3 + Math.random() * 0.7})`
                        }}
                    >
                        <span className="text-2xl">🍿</span>
                    </div>
                ))}
            </div>

            <div className="relative z-10">
                <Navbar />

                {/* Hero Section for Why Makhana Page */}
                <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
                    <div className="max-w-7xl mx-auto text-center">
                        <span className="bg-mint-teal text-stone-900 px-6 py-2 rounded-full font-brand font-bold text-sm uppercase tracking-widest inline-block mb-6">
                            Discover the Benefits
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-brand font-black text-white mb-6">
                            Why Choose <span className="text-mint-teal">Makhana</span>?
                        </h1>
                        <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
                            The ancient superfood that&apos;s redefining modern snacking. Discover why health-conscious foodies
                            are making the switch to this nutrient-packed wonder.
                        </p>
                    </div>
                </section>

                <WhyMakhana />

                {/* Additional Why Makhana Sections */}
                <section className="py-24 px-6 bg-white dark:bg-stone-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="bg-sun-yellow text-stone-900 px-4 py-2 rounded-full font-brand font-bold text-xs uppercase tracking-wide inline-block mb-4">
                                    Ancient Wisdom
                                </span>
                                <h2 className="text-3xl md:text-4xl font-brand font-black text-stone-900 dark:text-white mb-6">
                                    A 3,000 Year Old <span className="text-lava-orange">Superfood</span>
                                </h2>
                                <p className="text-stone-600 dark:text-stone-400 text-lg mb-6 leading-relaxed">
                                    Makhana, also known as fox nuts or lotus seeds, has been treasured in Asian cultures for millennia.
                                    Harvested from the Euryale ferox plant, these seeds are roasted to perfection, creating a light,
                                    crunchy snack that&apos;s naturally delicious.
                                </p>
                                <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
                                    In Ayurveda, makhana is celebrated for its cooling properties and is considered beneficial for
                                    heart health, digestion, and overall well-being.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-sun-yellow/20 to-lava-orange/20 rounded-3xl p-8 aspect-square flex items-center justify-center">
                                <span className="text-9xl">🪷</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Perfect For Section */}
                <section className="py-24 px-6 bg-stone-50 dark:bg-stone-800">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-brand font-black text-stone-900 dark:text-white mb-6">
                                Perfect For <span className="text-berry-pink">Everyone</span>
                            </h2>
                            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
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
                                <div key={index} className="bg-white dark:bg-stone-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <h3 className="font-brand font-bold text-stone-900 dark:text-white text-lg mb-2">{item.title}</h3>
                                    <p className="text-stone-600 dark:text-stone-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-stone-900 text-white py-24 text-center px-6">
                    <h2 className="text-4xl md:text-6xl font-brand font-black mb-8">
                        Ready to try <span className="text-mint-teal">Makhana</span>?
                    </h2>
                    <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto font-medium">
                        Experience the perfect blend of taste and nutrition with our premium flavored makhana.
                    </p>
                    <a
                        href="/shop"
                        className="inline-block px-10 py-5 bg-mint-teal text-stone-900 font-brand font-black rounded-2xl hover:scale-105 transition-transform text-xl"
                    >
                        Shop Our Flavors →
                    </a>
                </section>

                <Footer />
            </div>
        </main>
    );
}
