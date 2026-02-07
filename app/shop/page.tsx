"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import { ChevronRight, Filter, ArrowUpDown, X, Check } from "lucide-react";

export default function ShopPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [activeSort, setActiveSort] = useState("popularity");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    return (
        <main className="min-h-screen bg-stone-100 dark:bg-background text-foreground transition-colors selection:bg-sky-100 selection:text-sky-900">
            <Navbar />

            <div className="pt-24 lg:pt-32 pb-20">
                <div className="max-w-[1440px] mx-auto px-2 lg:px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-1 text-[13px] text-stone-500 mb-2 px-2">
                        <Link href="/" className="hover:text-blue-600">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-stone-900 dark:text-stone-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis">Food Products</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start">
                        {/* Sidebar Filters - Hidden on mobile, shown on lg */}
                        <aside className="hidden lg:block w-[280px] bg-card-bg shadow-sm border border-card-border rounded-[3px] sticky top-28 h-[calc(100vh-120px)] overflow-y-auto">
                            <div className="p-4 border-b border-card-border">
                                <h2 className="text-lg font-bold text-stone-900 dark:text-white">Filters</h2>
                            </div>
                            <ProductFilters
                                activeFilter={activeFilter}
                                onFilterChange={setActiveFilter}
                            />
                        </aside>

                        {/* Product Display Area */}
                        <div className="flex-grow w-full bg-card-bg shadow-sm border border-card-border lg:rounded-[3px] min-h-[600px]">
                            {/* Desktop: Header + Horizontal Sort Bar */}
                            <div className="hidden lg:block border-b border-card-border">
                                <div className="px-4 pt-4 pb-2">
                                    <h1 className="text-base font-bold text-stone-900 dark:text-white">
                                        Food Products <span className="text-[12px] font-normal text-stone-500 ml-1">(Showing 1 – 40 products of 8,478 products)</span>
                                    </h1>
                                </div>
                                <div className="flex items-center gap-6 px-4 py-2 text-sm">
                                    <span className="font-bold text-stone-900 dark:text-white">Sort By</span>
                                    {[
                                        { id: "popularity", name: "Popularity" },
                                        { id: "price-low", name: "Price -- Low to High" },
                                        { id: "price-high", name: "Price -- High to Low" },
                                        { id: "newest", name: "Newest First" }
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => setActiveSort(opt.id)}
                                            className={`py-2 border-b-2 transition-colors ${activeSort === opt.id
                                                ? "text-blue-600 border-blue-600 font-bold"
                                                : "text-stone-600 dark:text-stone-400 border-transparent hover:text-blue-600"
                                                }`}
                                        >
                                            {opt.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Filters Bar */}
                            <div className="lg:hidden sticky top-24 z-20 flex bg-card-bg border-b border-card-border">
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
                                        <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">1</span>
                                    )}
                                </button>
                            </div>

                            {/* Grid wrapper */}
                            <div className="p-2 lg:p-4">
                                <ProductGrid filter={activeFilter} isShopPage />
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
                                className="flex-1 py-3 text-sm font-bold border border-card-border text-stone-900 dark:text-white"
                            >
                                CLEAR ALL
                            </button>
                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className="flex-1 py-3 text-sm font-bold bg-[#fb641b] text-white shadow-lg"
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
                                        className="w-5 h-5 accent-blue-600"
                                    />
                                    <span className={`text-base ${activeSort === opt.id ? "font-bold text-blue-600" : "text-stone-900 dark:text-stone-300"}`}>
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
