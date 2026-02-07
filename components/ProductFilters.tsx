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
                <div className="px-4 py-3 border-b border-card-border bg-stone-50/50 dark:bg-white/5">
                    <h3 className="text-[13px] font-bold uppercase text-stone-900 dark:text-stone-100 tracking-widest">Categories</h3>
                    <div className="flex flex-col gap-2 mt-3">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => onFilterChange(cat.id)}
                                className={`text-[14px] text-left transition-colors flex items-center justify-between ${activeFilter === cat.id
                                    ? "text-sky-600 font-bold"
                                    : "text-stone-600 dark:text-stone-300 hover:text-sky-600 dark:hover:text-sky-400"
                                    }`}
                            >
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {isOverlay && (
                <div className="flex flex-col gap-6 p-4">
                    <div>
                        <h3 className="text-xs font-bold text-stone-500 uppercase mb-4">Categories</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => onFilterChange(cat.id)}
                                    className={`px-3 py-2 text-sm rounded-[3px] border transition-all ${activeFilter === cat.id
                                        ? "bg-sky-50 border-sky-600 text-sky-600 font-bold"
                                        : "bg-white dark:bg-stone-900 border-card-border text-stone-600 dark:text-stone-400"
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="px-4 py-4 border-b border-card-border">
                <h3 className="text-[13px] font-bold uppercase text-stone-900 dark:text-white tracking-widest mb-4">Price</h3>
                <div className="flex items-center gap-2">
                    <select className="flex-1 text-[13px] border border-card-border p-1 bg-card-bg">
                        <option>Min</option>
                        <option>₹100</option>
                        <option>₹200</option>
                        <option>₹500</option>
                    </select>
                    <span className="text-stone-400 text-xs">to</span>
                    <select className="flex-1 text-[13px] border border-card-border p-1 bg-card-bg">
                        <option>₹500+</option>
                        <option>₹1000</option>
                        <option>₹2000</option>
                    </select>
                </div>
            </div>

            <div className="px-4 py-4 border-b border-card-border">
                <h3 className="text-[13px] font-bold uppercase text-stone-900 dark:text-white tracking-widest mb-4">Customer Ratings</h3>
                {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-3 mb-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded-[2px] border-card-border text-sky-600 focus:ring-0" />
                        <span className="text-[14px] text-stone-600 dark:text-stone-400 flex items-center gap-1 group-hover:text-sky-600 Transition-colors">
                            {rating}★ & above
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
