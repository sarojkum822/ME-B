"use client";

import Link from "next/link";
import ProductGrid from "./ProductGrid";

export default function ShopQuick() {
    return (
        <section className="bg-white dark:bg-stone-900 py-24 px-6 border-y-4 border-stone-900 dark:border-stone-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="text-berry-pink font-brand font-black text-sm uppercase tracking-[0.3em] mb-4 block animate-reveal">Ready to Snack?</span>
                        <h2 className="text-5xl md:text-7xl font-brand font-black uppercase text-stone-900 dark:text-white leading-[0.9] tracking-tighter">
                            Shop Quick. <br /> <span className="text-stone-400">Snack Faster.</span>
                        </h2>
                    </div>
                    <Link
                        href="/shop"
                        className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-brand font-black px-12 py-6 rounded-2xl hover:scale-105 transition-all text-lg shadow-xl uppercase tracking-widest whitespace-nowrap"
                    >
                        View All Products
                    </Link>
                </div>

                <div className="bg-stone-50 dark:bg-stone-950 p-8 rounded-[3rem] border-4 border-stone-900 dark:border-stone-800 shadow-[20px_20px_0px_0px_rgba(28,25,23,0.05)]">
                    <ProductGrid filter="all" />
                </div>

                <div className="mt-16 text-center">
                    <p className="text-stone-500 font-medium text-lg">
                        Free shipping on all orders over <span className="font-black text-stone-900 dark:text-white">₹499</span>. Delivered fresh across India.
                    </p>
                </div>
            </div>
        </section>
    );
}
