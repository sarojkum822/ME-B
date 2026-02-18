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
        <section className="bg-stone-50 dark:bg-stone-950 py-20 md:py-32 px-6 md:px-12 lg:px-20 border-t border-stone-100 dark:border-stone-900">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-lava-orange font-brand font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
                        Got Questions?
                    </span>
                    <h2 className="text-4xl md:text-6xl font-brand font-black text-stone-900 dark:text-white leading-tight">
                        Common <span className="text-stone-300 dark:text-stone-700">Inquiries.</span>
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.slice(0, 3).map((faq, index) => (
                        <div
                            key={index}
                            className={`group border border-stone-100 dark:border-stone-800 rounded-2xl bg-white dark:bg-stone-900 transition-all duration-300 ${openIndex === index ? 'shadow-md ring-1 ring-stone-100 dark:ring-stone-800' : 'hover:border-stone-200 dark:hover:border-stone-700'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <span className="text-base md:text-lg font-brand font-bold text-stone-900 dark:text-white group-hover:text-lava-orange transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`text-stone-400 transition-transform duration-500 ${openIndex === index ? "rotate-180 text-lava-orange" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 md:p-8 pt-0 text-stone-500 dark:text-stone-400 font-medium leading-[1.8] text-sm md:text-base max-w-2xl">
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
