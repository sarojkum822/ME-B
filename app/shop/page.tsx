"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import { ChevronRight, Filter, ArrowUpDown, X, Check } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { useSearchParams } from "next/navigation";

export default function ShopPage() {
    const searchParams = useSearchParams();
    const filterParam = searchParams.get("filter");
    const sortParam = searchParams.get("sort");

    const [activeFilter, setActiveFilter] = useState(filterParam || "all");
    const [activeSort, setActiveSort] = useState(sortParam || "newest");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    useEffect(() => {
        if (filterParam) setActiveFilter(filterParam);
        if (sortParam) setActiveSort(sortParam);
    }, [filterParam, sortParam]);

    const filteredProductsCount = activeFilter === "all"
        ? PRODUCTS.length
        : activeFilter === "new"
            ? PRODUCTS.filter(p => p.label === "NEW").length
            : PRODUCTS.filter(p => p.category === activeFilter).length;

    return (
        <main className="min-h-screen bg-snack-white dark:bg-stone-950 text-foreground transition-colors relative overflow-hidden">
            {/* Global Artisanal Particles - Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
            </div>

            <Navbar />

            <div className="relative z-10 pt-24 lg:pt-32 pb-20">
                <div className="max-w-[1440px] mx-auto px-2 lg:px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-1 text-[13px] text-stone-500 mb-4 px-2 font-medium">
                        <Link href="/" className="hover:text-lava-orange transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-stone-900 dark:text-stone-400 font-bold whitespace-nowrap overflow-hidden text-ellipsis uppercase tracking-widest text-[10px]">Premium Snacks</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start">
                        {/* Sidebar Filters - Hidden on mobile, shown on lg */}
                        <aside className="hidden lg:block w-[280px] bg-card-bg shadow-2xl shadow-stone-900/5 dark:shadow-none border border-card-border rounded-3xl sticky top-28 h-[calc(100vh-120px)] overflow-y-auto">
                            <div className="p-5 border-b border-card-border">
                                <h2 className="text-xl font-brand font-black uppercase tracking-tight text-stone-900 dark:text-white">Filters</h2>
                            </div>
                            <ProductFilters
                                activeFilter={activeFilter}
                                onFilterChange={setActiveFilter}
                            />
                        </aside>

                        {/* Product Display Area */}
                        <div className="flex-grow w-full bg-card-bg shadow-2xl shadow-stone-900/5 dark:shadow-none border border-card-border lg:rounded-3xl min-h-[600px] overflow-hidden">
                            {/* Desktop: Header + Horizontal Sort Bar */}
                            <div className="hidden lg:block border-b border-card-border">
                                <div className="px-6 pt-6 pb-2">
                                    <h1 className="text-lg font-brand font-black uppercase tracking-tight text-stone-900 dark:text-white">
                                        {activeFilter === "new" ? "New Arrivals" : "All Cravings"}
                                        <span className="text-[12px] font-bold text-stone-400 ml-2 tracking-widest uppercase">(Showing {filteredProductsCount} Flavors)</span>
                                    </h1>
                                </div>
                                <div className="flex items-center gap-8 px-6 py-3 text-sm">
                                    <span className="font-brand font-black uppercase tracking-widest text-[10px] text-stone-400">Sort By</span>
                                    {[
                                        { id: "popularity", name: "Popularity" },
                                        { id: "price-low", name: "Price: Low to High" },
                                        { id: "price-high", name: "Price: High to Low" },
                                        { id: "newest", name: "Newest First" }
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setActiveSort(opt.id)}
                                            className={`py-2 border-b-2 transition-all font-brand font-bold uppercase tracking-widest text-[11px] ${activeSort === opt.id
                                                ? "text-lava-orange border-lava-orange"
                                                : "text-stone-500 dark:text-stone-400 border-transparent hover:text-lava-orange"
                                                }`}
                                        >
                                            {opt.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Filters Bar */}
                            <div className="lg:hidden fixed top-[60px] left-0 right-0 z-20 flex bg-card-bg border-b border-card-border shadow-sm">
                                <button
                                    onClick={() => setIsSortOpen(true)}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 border-r border-card-border active:bg-stone-50"
                                >
                                    <ArrowUpDown size={16} />
                                    <span className="text-sm font-medium">Sort</span>
                                </button>
                                <button
                                    onClick={() => setIsFilterOpen(true)}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 active:bg-stone-50"
                                >
                                    <Filter size={16} />
                                    <span className="text-sm font-medium">Filter</span>
                                    {activeFilter !== 'all' && (
                                        <span className="bg-lava-orange text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">1</span>
                                    )}
                                </button>
                            </div>

                            {/* Grid wrapper */}
                            <div className="p-2 lg:p-4">
                                <ProductGrid filter={activeFilter} sort={activeSort} isShopPage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Sheets (Filter/Sort) */}
            {isFilterOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] flex flex-col">
                    <div className="absolute inset-0 bg-black/60" onClick={() => setIsFilterOpen(false)} />
                    <div className="relative mt-auto bg-white dark:bg-card-bg w-full h-[90vh] flex flex-col transition-colors">
                        <div className="flex justify-between items-center p-4 border-b border-card-border">
                            <h2 className="text-lg font-bold">Filters</h2>
                            <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            <ProductFilters
                                activeFilter={activeFilter}
                                onFilterChange={setActiveFilter}
                                isOverlay
                            />
                        </div>
                        <div className="p-4 border-t border-card-border flex gap-4 bg-white dark:bg-card-bg transition-colors">
                            <button
                                onClick={() => { setActiveFilter("all"); setIsFilterOpen(false); }}
                                className="flex-1 py-4 text-xs font-brand font-black uppercase tracking-widest border border-card-border rounded-xl text-stone-900 dark:text-white"
                            >
                                CLEAR ALL
                            </button>
                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className="flex-1 py-4 text-xs font-brand font-black uppercase tracking-widest bg-lava-orange text-white rounded-xl shadow-lg shadow-lava-orange/20"
                            >
                                APPLY
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isSortOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] flex flex-col">
                    <div className="absolute inset-0 bg-black/60" onClick={() => setIsSortOpen(false)} />
                    <div className="relative mt-auto bg-white dark:bg-card-bg w-full p-4 transition-colors">
                        <h2 className="text-stone-500 font-bold text-xs uppercase mb-4">Sort By</h2>
                        <div className="space-y-4">
                            {[
                                { id: "popularity", name: "Popularity" },
                                { id: "price-low", name: "Price -- Low to High" },
                                { id: "price-high", name: "Price -- High to Low" },
                                { id: "newest", name: "Newest First" }
                            ].map((opt) => (
                                <label key={opt.id} className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        checked={activeSort === opt.id}
                                        onChange={() => { setActiveSort(opt.id); setIsSortOpen(false); }}
                                        className="w-5 h-5 accent-lava-orange"
                                    />
                                    <span className={`text-base font-brand font-bold uppercase tracking-tight ${activeSort === opt.id ? "text-lava-orange" : "text-stone-900 dark:text-stone-300"}`}>
                                        {opt.name}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
