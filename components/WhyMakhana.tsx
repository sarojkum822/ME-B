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

    const benefitPillars = [
        {
            title: "Digestive Vitality",
            description: "High natural fiber content (1.8g per serving) that improves gut health and provides lasting satiety without the heavy feeling of processed snacks.",
            icons: ["🌾", "🍃"],
            metrics: "1.8g Fiber"
        },
        {
            title: "Heart-Focused Nutrition",
            description: "Zero cholesterol and nearly zero trans-fats. Packed with magnesium and potassium to support healthy blood pressure and cardiovascular rhythm.",
            icons: ["❤️", "🫀"],
            metrics: "0% Cholesterol"
        },
        {
            title: "Metabolic Balance",
            description: "Low Glycemic Index prevents insulin spikes, making it an ideal snack for diabetic-friendly diets and weight management journeys.",
            icons: ["📉", "✨"],
            metrics: "Low GI Index"
        },
        {
            title: "Holistic Protection",
            description: "Rich in kaempferol and other powerful antioxidants that fight cellular inflammation and support your body's natural immune defenses.",
            icons: ["🛡️", "🌿"],
            metrics: "Antioxidant Rich"
        }
    ];

    return (
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[var(--background)] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <span className="text-[hsl(var(--accent))] font-brand font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
                        The Smart Choice
                    </span>
                    <h2 className="text-5xl md:text-8xl lg:text-9xl font-brand font-black text-[var(--foreground)] leading-[0.9] tracking-tighter uppercase">
                        Why <br /> <span className="text-[var(--muted-foreground)]/20">Makhana?</span>
                    </h2>
                </div>

                {/* Benefits Pillars - Benefit First Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {benefitPillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="bg-[var(--muted)]/50 dark:bg-[var(--muted-bg)]/40 p-10 md:p-14 rounded-[2.5rem] border border-[var(--muted-foreground)]/10 flex flex-col items-start transition-all hover:shadow-xl group"
                        >
                            <div className="flex justify-between items-end w-full mb-8">
                                <div className="p-4 bg-[var(--card-bg)] rounded-2xl shadow-sm border border-[var(--card-border)]">
                                    <span className="text-3xl">{pillar.icons[0]}</span>
                                </div>
                                <span className="text-4xl md:text-5xl font-brand font-black text-[hsl(var(--accent))] leading-none">
                                    {pillar.metrics.split(' ')[0]}
                                    <span className="text-xs uppercase tracking-widest ml-1 text-stone-400 font-bold">{pillar.metrics.split(' ')[1]}</span>
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-brand font-black text-[var(--foreground)] mb-4 uppercase tracking-tight">
                                {pillar.title}
                            </h3>
                            <p className="text-[var(--muted-foreground)] text-base md:text-lg leading-relaxed font-medium">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Comparison Table - Professional Report Style */}
                <div className="bg-[var(--card-bg)] rounded-[2rem] border border-[var(--card-border)] overflow-hidden shadow-2xl">
                    <div className="p-10 md:p-14 border-b border-[var(--card-border)]">
                        <h3 className="text-2xl md:text-3xl font-brand font-black text-[var(--foreground)] uppercase tracking-tight">
                            The Competitive <span className="text-[var(--muted-foreground)]/30">Edge.</span>
                        </h3>
                        <p className="text-[var(--muted-foreground)] mt-2 font-medium uppercase tracking-widest text-xs">Per 100g serving comparison</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[var(--muted)]/30">
                                <tr>
                                    <th className="px-8 py-5 font-brand font-bold text-[var(--muted-foreground)] uppercase tracking-widest text-[10px]">Snack Type</th>
                                    <th className="px-8 py-5 text-center font-brand font-bold text-[var(--muted-foreground)] uppercase tracking-widest text-[10px]">Calories</th>
                                    <th className="px-8 py-5 text-center font-brand font-bold text-[var(--muted-foreground)] uppercase tracking-widest text-[10px]">Protein</th>
                                    <th className="px-8 py-5 text-center font-brand font-bold text-[var(--muted-foreground)] uppercase tracking-widest text-[10px]">Fat</th>
                                    <th className="px-8 py-5 text-center font-brand font-bold text-[var(--muted-foreground)] uppercase tracking-widest text-[10px]">Fiber</th>
                                    <th className="px-8 py-5 text-right font-brand font-bold text-[var(--muted-foreground)] uppercase tracking-widest text-[10px]">Verdict</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[var(--card-border)]/50">
                                {comparison.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`group transition-colors ${index === 0 ? 'bg-[var(--primary)]/[0.05]' : 'hover:bg-[var(--muted)]/50'}`}
                                    >
                                        <td className={`px-8 py-6 font-brand font-bold ${index === 0 ? 'text-[var(--accent)] text-lg' : 'text-[var(--foreground)]'}`}>
                                            {item.snack}
                                        </td>
                                        <td className={`px-8 py-6 text-center ${index === 0 ? 'text-[var(--foreground)] font-black' : 'text-[var(--muted-foreground)]'}`}>
                                            {item.calories}
                                        </td>
                                        <td className="px-8 py-6 text-center text-[var(--muted-foreground)] font-medium">{item.protein}</td>
                                        <td className={`px-8 py-6 text-center ${index === 0 ? 'text-[var(--foreground)] font-black' : 'text-[var(--muted-foreground)]'}`}>
                                            {item.fat}
                                        </td>
                                        <td className="px-8 py-6 text-center text-[var(--muted-foreground)] font-medium">{item.fiber}</td>
                                        <td className={`px-8 py-6 text-right font-brand font-bold ${index === 0 ? 'text-[var(--accent)]' : 'text-[var(--muted-foreground)] text-xs uppercase'}`}>
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
                    <p className="text-lg text-[var(--muted-foreground)] mb-6">
                        Make the switch to smarter snacking today!
                    </p>
                    <a
                        href="/shop"
                        className="inline-block bg-[var(--foreground)] text-[var(--background)] px-10 py-5 rounded-2xl font-brand font-bold text-lg hover:opacity-90 hover:scale-105 transition-all shadow-xl"
                    >
                        Shop Makhana Now →
                    </a>
                </div>
            </div>
        </section>
    );
}
