"use client";

const CATEGORIES = [
    { id: "all", name: "All Products" },
    { id: "spicy", name: "Fiery & Spicy" },
    { id: "salty", name: "Classic Salty" },
    { id: "sweet", name: "Honey & Sweet" },
    { id: "herb", name: "Herb & Garlic" },
];

const PROFILES = ["Crunchiness", "Spice Level", "Protein", "Fiber"];

import { X } from "lucide-react";

interface ProductFiltersProps {
    activeFilter: string;
    onFilterChange: (id: string) => void;
    isOverlay?: boolean;
    onClose?: () => void;
}

export default function ProductFilters({ activeFilter, onFilterChange, isOverlay, onClose }: ProductFiltersProps) {
    return (
        <div className="flex flex-col h-full bg-card-bg">
            {!isOverlay && (
                <div className="px-5 py-5 border-b border-card-border bg-stone-50/50 dark:bg-white/5">
                    <h3 className="text-[11px] font-brand font-black uppercase text-stone-400 tracking-widest leading-none mb-4">Categories</h3>
                    <div className="flex flex-col gap-3">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => onFilterChange(cat.id)}
                                className={`text-[12px] font-brand font-bold uppercase tracking-widest text-left transition-all flex items-center justify-between ${activeFilter === cat.id
                                    ? "text-lava-orange"
                                    : "text-stone-600 dark:text-stone-400 hover:text-lava-orange"
                                    }`}
                            >
                                <span>{cat.name}</span>
                                {activeFilter === cat.id && <div className="w-1 h-1 bg-lava-orange rounded-full shadow-[0_0_8px_rgba(255,107,53,0.8)]" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {isOverlay && (
                <div className="flex flex-col gap-6 p-4">
                    <div>
                        <h3 className="text-[10px] font-brand font-black text-stone-400 uppercase tracking-widest mb-4">Categories</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => onFilterChange(cat.id)}
                                    className={`px-4 py-3 text-xs font-brand font-bold uppercase tracking-widest rounded-xl border transition-all ${activeFilter === cat.id
                                        ? "bg-lava-orange/5 border-lava-orange text-lava-orange shadow-lg shadow-lava-orange/10"
                                        : "bg-white dark:bg-stone-900 border-card-border text-stone-500 dark:text-stone-400"
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="px-5 py-6 border-b border-card-border">
                <h3 className="text-[11px] font-brand font-black uppercase text-stone-400 tracking-widest mb-5 leading-none">Price Range</h3>
                <div className="flex items-center gap-2">
                    <select className="flex-1 text-[11px] font-brand font-bold uppercase tracking-wider border border-card-border rounded-lg p-2 bg-background focus:border-lava-orange outline-none transition-colors">
                        <option>Min</option>
                        <option>₹100</option>
                        <option>₹200</option>
                        <option>₹500</option>
                    </select>
                    <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest px-1">To</span>
                    <select className="flex-1 text-[11px] font-brand font-bold uppercase tracking-wider border border-card-border rounded-lg p-2 bg-background focus:border-lava-orange outline-none transition-colors">
                        <option>₹500+</option>
                        <option>₹1000</option>
                        <option>₹2000</option>
                    </select>
                </div>
            </div>

            <div className="px-5 py-6 border-b border-card-border">
                <h3 className="text-[11px] font-brand font-black uppercase text-stone-400 tracking-widest mb-5 leading-none">Customer Ratings</h3>
                {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-3 mb-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded-md border-card-border text-lava-orange focus:ring-0 checked:bg-lava-orange" />
                        <span className="text-[12px] font-brand font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 flex items-center gap-1 group-hover:text-lava-orange transition-colors">
                            {rating}★ <span className="text-[10px] opacity-50">& Above</span>
                        </span>
                    </label>
                ))}
            </div>

            <div className="px-4 py-4">
                <h3 className="text-[13px] font-bold uppercase text-stone-900 dark:text-white tracking-widest mb-4">Offers</h3>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded-[2px] border-card-border text-sky-600 focus:ring-0" />
                    <span className="text-[14px] text-stone-600 dark:text-stone-400 group-hover:text-sky-600 Transition-colors">
                        Mithila Assured
                    </span>
                </label>
            </div>
        </div>
    );
}
