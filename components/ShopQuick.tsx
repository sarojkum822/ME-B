"use client";

import Link from "next/link";
import ProductGrid from "./ProductGrid";

export default function ShopQuick() {
    return (
        <section className="py-8 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[var(--background)]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8 text-center md:text-left">
                    <div className="max-w-xl">
                        <span className="text-[var(--accent)] font-serif font-bold italic text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block animate-reveal">Ready to Snack?</span>
                        <h2 className="text-3xl md:text-6xl font-serif font-black uppercase text-[var(--foreground)] leading-[0.9] tracking-tight">
                            Shop Quick. <br /> <span className="text-[var(--muted-foreground)]">Snack Faster.</span>
                        </h2>
                    </div>
                    <Link
                        href="/shop"
                        className="bg-[var(--primary)] text-[var(--cta-primary-text)] font-serif font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all text-lg shadow-xl uppercase tracking-widest whitespace-nowrap"
                    >
                        View All Products
                    </Link>
                </div>

                <div className="bg-[var(--muted)] p-4 md:p-8 rounded-[1.5rem] md:rounded-[3rem] border border-[var(--muted-foreground)]/10 shadow-[20px_20px_0px_0px_rgba(28,25,23,0.03)]">
                    <ProductGrid filter="all" />
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[var(--muted-foreground)] font-sans font-light text-lg italic">
                        Free shipping on all orders over <span className="font-bold text-[var(--foreground)]">₹499</span>. Delivered fresh across India.
                    </p>
                </div>
            </div>
        </section>
    );
}
