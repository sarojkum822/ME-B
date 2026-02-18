"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, RotateCcw, ShoppingBag, Plus } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/context/CartContext";

const QUESTIONS = [
    {
        id: 1,
        question: "What's your spice tolerance?",
        options: [
            { label: "Mild & Chill", value: "mild", icon: "🌱" },
            { label: "Kick it up a notch", value: "medium", icon: "🌶️" },
            { label: "Fire breathing dragon", value: "hot", icon: "🔥" }
        ]
    },
    {
        id: 2,
        question: "Sweet or Savory?",
        options: [
            { label: "Classic Savory", value: "savory", icon: "🧂" },
            { label: "Sweet Tooth", value: "sweet", icon: "🍯" },
            { label: "A bit of both", value: "mix", icon: "🌪️" }
        ]
    },
    {
        id: 3,
        question: "When do you snack?",
        options: [
            { label: "Workout Fuel", value: "energy", icon: "💪" },
            { label: "Late Night Binge", value: "movie", icon: "🍿" },
            { label: "Mid-day Hunger", value: "office", icon: "⏰" }
        ]
    }
];

export default function FlavorDiscoveryQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [isFinished, setIsFinished] = useState(false);
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const handleAnswer = (value: string) => {
        const newAnswers = [...answers, value];
        setAnswers(newAnswers);

        if (step < QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            setIsFinished(true);
        }
    };

    const resetQuiz = () => {
        setStep(0);
        setAnswers([]);
        setIsFinished(false);
    };

    // Simple logic to recommend a product
    const getRecommendation = () => {
        if (answers.includes("hot")) return PRODUCTS[1]; // Peri Peri
        if (answers.includes("sweet")) return PRODUCTS[5]; // Jaggery/Sweet
        return PRODUCTS[0]; // Classic
    };

    const recommendedProduct = getRecommendation();

    return (
        <section className="py-20 md:py-32 bg-[hsl(var(--espresso))] overflow-hidden">
            <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
                <div className="bg-[var(--muted)] rounded-[3rem] p-8 md:p-16 border border-[var(--muted-foreground)]/10 shadow-2xl relative">
                    <AnimatePresence mode="wait">
                        {!isFinished ? (
                            <motion.div
                                key="quiz"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-12"
                            >
                                <div className="text-center">
                                    <span className="text-[var(--accent)] font-serif font-bold italic text-[10px] uppercase tracking-[0.4em] mb-4 block">Question {step + 1} of {QUESTIONS.length}</span>
                                    <h2 className="text-3xl md:text-5xl font-serif font-black text-[var(--foreground)] uppercase leading-tight tracking-tight">
                                        {QUESTIONS[step].question}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {QUESTIONS[step].options.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleAnswer(option.value)}
                                            className="group p-8 rounded-3xl bg-[var(--cream)] border border-[var(--muted)] hover:border-[var(--accent)] hover:shadow-xl transition-all text-center"
                                        >
                                            <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform">{option.icon}</span>
                                            <span className="font-serif font-bold text-[var(--foreground)] uppercase text-sm tracking-widest">{option.label}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Progress Bar */}
                                <div className="h-1.5 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[var(--primary)]"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-10"
                            >
                                <div>
                                    <span className="text-green-500 font-serif font-bold italic text-[10px] uppercase tracking-[0.4em] mb-4 block">Success! Match Found ✨</span>
                                    <h2 className="text-4xl md:text-6xl font-serif font-black text-[var(--foreground)] uppercase leading-none tracking-tight">
                                        Your Soul <br />
                                        <span className="text-[var(--accent)] italic font-medium">Makhana.</span>
                                    </h2>
                                </div>

                                <div className="max-w-xs mx-auto p-6 bg-[var(--card-bg)] rounded-[2.5rem] border border-[var(--card-border)] shadow-xl group">
                                    <div className="aspect-square relative mb-6">
                                        <NextImage
                                            src={recommendedProduct.image}
                                            alt={recommendedProduct.name}
                                            fill
                                            className="object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-xl font-serif font-black text-[var(--foreground)] uppercase mb-2">{recommendedProduct.name}</h3>
                                    <p className="text-[var(--muted-foreground)] text-sm font-light italic mb-6">Based on your palette, this is the one you'll get hooked on.</p>

                                    <div className="flex flex-col gap-3">
                                        <button
                                            disabled={isAdding}
                                            onClick={() => {
                                                setIsAdding(true);
                                                addToCart({
                                                    id: recommendedProduct.id,
                                                    name: recommendedProduct.name,
                                                    price: recommendedProduct.price,
                                                    img: recommendedProduct.image,
                                                    color: recommendedProduct.color
                                                });
                                                setTimeout(() => setIsAdding(false), 1000);
                                            }}
                                            className="w-full py-4 bg-[var(--primary)] text-[var(--cta-primary-text)] rounded-2xl font-serif font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl shadow-[var(--primary)]/20 disabled:opacity-50"
                                        >
                                            {isAdding ? <Check size={14} /> : "ADD TO CART"} {!isAdding && <Plus size={14} />}
                                        </button>
                                        <Link
                                            href={`/product/${recommendedProduct.id}`}
                                            className="w-full py-4 bg-[var(--muted)] text-[var(--foreground)] rounded-2xl font-brand font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-colors"
                                        >
                                            View Product Details
                                        </Link>
                                    </div>
                                </div>

                                <button
                                    onClick={resetQuiz}
                                    className="flex items-center gap-2 text-[var(--muted-foreground)] font-bold text-[10px] uppercase tracking-widest mx-auto hover:text-[var(--foreground)] transition-colors"
                                >
                                    <RotateCcw size={12} /> Retake Quiz
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
