"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What exactly is Makhana?",
        answer: "Makhana, also known as popped lily seeds or fox nuts, is an ancient superfood from the wetlands of India. It's naturally gluten-free, low in calories, and high in protein and fiber, making it the ultimate guilt-free snack.",
    },
    {
        question: "Are your snacks 100% natural?",
        answer: "Absolutely! We focus on 'Neo-Artisanal' snacking. That means no artificial colors, no MSG, and no weird preservatives. We use premium spices and cold-pressed oils to give you that explosion of flavor.",
    },
    {
        question: "Is Mithila Essence vegan-friendly?",
        answer: "Yes! Most of our flavors are 100% vegan. We believe in inclusive snacking that everyone can enjoy without compromising on taste or ethics.",
    },
    {
        question: "How long does shipping take?",
        answer: "We ship nationwide! Orders are usually processed within 24 hours and reach your doorstep within 3-5 business days. Keep an eye on your inbox for tracking details!",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-sun-yellow dark:bg-stone-950 py-24 px-6 md:px-12 border-b-4 border-stone-900 dark:border-stone-800">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="bg-lava-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">
                        Any Questions?
                    </span>
                    <h2 className="text-4xl md:text-6xl font-brand font-black text-stone-900 dark:text-white">
                        The <span className="text-berry-pink text-shadow-sm">Snack</span> Intellectuals FAQ
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group border-3 border-stone-900 dark:border-stone-800 rounded-3xl bg-white dark:bg-stone-900 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <span className="text-lg md:text-xl font-brand font-bold text-stone-900 dark:text-white">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-stone-900 dark:text-white transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 md:p-8 pt-0 text-stone-600 dark:text-stone-400 font-medium leading-relaxed border-t-2 border-stone-100 dark:border-stone-800 italic">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
