export default function WhyMakhana() {
    const benefits = [
        { icon: "💪", title: "High in Protein", description: "Helps keep you full longer and supports muscle repair" },
        { icon: "🔥", title: "Low in Calories", description: "Guilt-free snacking compared to chips and namkeen" },
        { icon: "❤️", title: "Zero Cholesterol", description: "Heart-friendly and safe for regular consumption" },
        { icon: "📉", title: "Low Glycemic Index", description: "Doesn't spike blood sugar, diabetes-friendly" },
        { icon: "🌾", title: "Rich in Fiber", description: "Improves digestion and controls hunger cravings" },
        { icon: "✨", title: "Low Fat (Roasted)", description: "Clean snack with no frying and no trans fats" },
        { icon: "🫀", title: "Heart Healthy", description: "Supports healthy blood pressure and heart function" },
        { icon: "🌿", title: "Gluten-Free", description: "Safe for gluten-intolerant and sensitive diets" },
        { icon: "🛡️", title: "Rich in Antioxidants", description: "Helps fight inflammation and supports immunity" },
        { icon: "🍃", title: "Easy to Digest", description: "Light on the stomach compared to nuts" },
    ];

    const comparison = [
        { snack: "Makhana", calories: "97 cal", protein: "3.4g", fat: "0.3g", fiber: "1.8g", verdict: "Winner! 🏆" },
        { snack: "Potato Chips", calories: "536 cal", protein: "6g", fat: "35g", fiber: "3g", verdict: "❌ High fat" },
        { snack: "Namkeen Mix", calories: "450 cal", protein: "12g", fat: "28g", fiber: "5g", verdict: "❌ Oil heavy" },
        { snack: "Cheese Puffs", calories: "540 cal", protein: "5g", fat: "32g", fiber: "1g", verdict: "❌ Ultra-processed" },
        { snack: "Roasted Peanuts", calories: "567 cal", protein: "26g", fat: "49g", fiber: "8g", verdict: "⚠️ High cal" },
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-br from-mint-teal/10 via-white dark:via-stone-900 to-sun-yellow/10 dark:from-mint-teal/5 dark:to-sun-yellow/5 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-mint-teal/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-sun-yellow/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="bg-stone-900 text-sun-yellow px-6 py-2 rounded-full font-brand font-bold text-sm uppercase tracking-widest inline-block mb-6">
                        The Smart Choice
                    </span>
                    <h2 className="text-4xl md:text-6xl font-brand font-black text-stone-900 dark:text-white mb-6">
                        Why <span className="text-mint-teal">Makhana</span>?
                    </h2>
                    <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                        Not all snacks are created equal. Here&apos;s why Makhana stands out as the healthiest choice for guilt-free munching.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/50 dark:border-stone-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                            <h3 className="font-brand font-bold text-stone-900 dark:text-white text-sm mb-1">{benefit.title}</h3>
                            <p className="text-stone-600 dark:text-stone-400 text-xs">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="bg-white dark:bg-stone-800 rounded-3xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-700">
                    <div className="bg-stone-900 text-white p-6">
                        <h3 className="text-2xl md:text-3xl font-brand font-black text-center">
                            Makhana vs. <span className="text-lava-orange">Other Snacks</span>
                        </h3>
                        <p className="text-stone-400 text-center mt-2">Per 100g serving comparison</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-stone-100 dark:bg-stone-700">
                                <tr>
                                    <th className="px-6 py-4 text-left font-brand font-bold text-stone-900 dark:text-white">Snack</th>
                                    <th className="px-6 py-4 text-center font-brand font-bold text-stone-900 dark:text-white">Calories</th>
                                    <th className="px-6 py-4 text-center font-brand font-bold text-stone-900 dark:text-white">Protein</th>
                                    <th className="px-6 py-4 text-center font-brand font-bold text-stone-900 dark:text-white">Fat</th>
                                    <th className="px-6 py-4 text-center font-brand font-bold text-stone-900 dark:text-white">Fiber</th>
                                    <th className="px-6 py-4 text-center font-brand font-bold text-stone-900 dark:text-white">Verdict</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-stone-100 dark:border-stone-700/50 ${index === 0 ? 'bg-mint-teal/10 dark:bg-mint-teal/5' : 'hover:bg-stone-50 dark:hover:bg-stone-700/30'}`}
                                    >
                                        <td className={`px-6 py-4 font-brand font-bold ${index === 0 ? 'text-mint-teal' : 'text-stone-700 dark:text-stone-300'}`}>
                                            {item.snack}
                                        </td>
                                        <td className={`px-6 py-4 text-center ${index === 0 ? 'text-mint-teal font-bold' : 'text-stone-600 dark:text-stone-400'}`}>
                                            {item.calories}
                                        </td>
                                        <td className="px-6 py-4 text-center text-stone-600 dark:text-stone-400">{item.protein}</td>
                                        <td className={`px-6 py-4 text-center ${index === 0 ? 'text-mint-teal font-bold' : 'text-stone-600 dark:text-stone-400'}`}>
                                            {item.fat}
                                        </td>
                                        <td className="px-6 py-4 text-center text-stone-600 dark:text-stone-400">{item.fiber}</td>
                                        <td className={`px-6 py-4 text-center font-brand font-bold ${index === 0 ? 'text-mint-teal' : 'text-lava-orange'}`}>
                                            {item.verdict}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-lg text-stone-600 dark:text-stone-400 mb-6">
                        Make the switch to smarter snacking today!
                    </p>
                    <a
                        href="/shop"
                        className="inline-block bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-10 py-5 rounded-2xl font-brand font-bold text-lg hover:bg-stone-800 dark:hover:bg-stone-100 hover:scale-105 transition-all shadow-xl"
                    >
                        Shop Makhana Now →
                    </a>
                </div>
            </div>
        </section>
    );
}
