"use client";

import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ShoppingBag, Filter, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [results, setResults] = useState(PRODUCTS);

    useEffect(() => {
        if (!query.trim()) {
            setResults(PRODUCTS);
        } else {
            const filtered = PRODUCTS.filter(p =>
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.cue.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        }
    }, [query]);

    return (
        <section className="pt-40 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 text-stone-400 font-brand font-black uppercase tracking-widest text-xs mb-4">
                            <Search size={14} /> Search Results
                        </div>
                        <h1 className="text-4xl md:text-6xl font-brand font-black uppercase tracking-tighter">
                            {query ? (
                                <>Results for <span className="text-lava-orange italic">"{query}"</span></>
                            ) : (
                                <>Browse <span className="text-lava-orange italic">Everything</span></>
                            )}
                        </h1>
                    </div>
                    <p className="text-stone-400 font-bold uppercase tracking-widest text-sm">
                        {results.length} Products Found
                    </p>
                </div>

                {results.length === 0 ? (
                    <div className="py-32 text-center bg-card-bg rounded-[3rem] border border-card-border shadow-inner">
                        <div className="w-24 h-24 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-card-border">
                            <Search size={40} className="text-stone-300" />
                        </div>
                        <h2 className="text-3xl font-brand font-black uppercase mb-4">No results found</h2>
                        <p className="text-stone-500 mb-10 text-lg max-w-md mx-auto">
                            We couldn't find anything matching your search. Try a different flavor or browse our bestsellers.
                        </p>
                        <Link href="/shop" className="px-10 py-4 bg-lava-orange text-white font-brand font-black rounded-xl hover:scale-105 transition-transform uppercase tracking-widest shadow-xl shadow-lava-orange/20">
                            Explore All Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {results.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group"
                            >
                                <Link href={`/product/${product.id}`}>
                                    <div className="relative aspect-square bg-white dark:bg-stone-900 rounded-[2.5rem] border border-card-border p-8 mb-6 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-stone-900/10 group-hover:-translate-y-2">
                                        <div className="absolute top-6 left-6 z-10 px-3 py-1 bg-stone-100/80 dark:bg-stone-800/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-stone-500">
                                            {product.category}
                                        </div>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/5 transition-colors duration-500" />
                                    </div>
                                </Link>
                                <div className="px-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-brand font-black text-xl uppercase tracking-tight group-hover:text-lava-orange transition-colors">{product.name}</h3>
                                        <p className="font-brand font-black text-xl">₹{product.price}</p>
                                    </div>
                                    <p className="text-stone-400 text-sm font-medium italic mb-4 line-clamp-1">{product.cue}</p>
                                    <Link
                                        href={`/product/${product.id}`}
                                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-stone-900 dark:text-white group-hover:gap-4 transition-all"
                                    >
                                        View Details <ArrowRight size={14} className="text-lava-orange" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default function SearchPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Suspense fallback={
                <div className="py-32 text-center animate-pulse">
                    <Search className="mx-auto mb-8 text-stone-200" size={64} />
                    <div className="h-10 w-64 bg-stone-100 mx-auto rounded-full mb-4" />
                    <div className="h-4 w-48 bg-stone-50 mx-auto rounded-full" />
                </div>
            }>
                <SearchContent />
            </Suspense>
            <Footer />
        </main>
    );
}
