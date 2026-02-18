"use client";

import { Heart, Calendar, RefreshCw, Pause, Bell, ShoppingCart, Trash2, ChevronRight } from "lucide-react";

export default function WishlistSub() {
    const wishlist = [
        { name: "Magic Masala", price: "₹149.00", status: "In Stock", image: "/masala-pouch.png" },
        { name: "Creamy Cheese", price: "₹149.00", status: "Out of Stock", image: "/cheese-pouch.png" },
    ];

    return (
        <div className="space-y-10 animate-reveal">
            {/* Subscriptions Section */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-brand font-black text-[var(--text-primary)] mb-2">My Subscriptions</h2>
                    <p className="text-sm text-[var(--text-muted)] font-medium">Manage your recurring snack boxes.</p>
                </div>

                <div className="bg-[var(--section-white)] dark:bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-3xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-[var(--chip-border)]">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-mint-teal/10 rounded-2xl flex items-center justify-center text-mint-teal">
                                <Calendar size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-brand font-bold text-[var(--text-primary)]">Monthly Snack Box</h3>
                                <p className="text-xs text-[var(--text-muted)] font-medium">6 Packs • Mixed Flavors</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-brand font-black text-mint-teal uppercase tracking-widest mb-1">Next Delivery</p>
                            <p className="text-lg font-brand font-black text-[var(--text-primary)]">March 05, 2026</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="flex items-center justify-center gap-2 py-3 border border-[var(--chip-border)] rounded-xl text-xs font-brand font-bold text-[var(--text-primary)] hover:bg-[var(--chip-bg)] transition-colors">
                            <Pause size={14} /> Pause
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 border border-[var(--chip-border)] rounded-xl text-xs font-brand font-bold text-[var(--text-primary)] hover:bg-[var(--chip-bg)] transition-colors">
                            <RefreshCw size={14} /> Change Flavors
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 border border-[var(--chip-border)] rounded-xl text-xs font-brand font-bold text-red-500 hover:bg-red-500/5 transition-colors">
                            <Trash2 size={14} /> Cancel
                        </button>
                    </div>
                </div>
            </div>

            {/* Wishlist Section */}
            <div className="space-y-6">
                <h3 className="text-xl font-brand font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Heart size={24} className="text-berry-pink" /> My Wishlist
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wishlist.map((item, i) => (
                        <div key={i} className="bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-2xl p-4 flex items-center gap-4 group">
                            <div className="w-20 h-20 bg-[var(--background)] rounded-xl p-2 shrink-0">
                                <div className="w-full h-full bg-lava-orange/10 rounded-lg flex items-center justify-center text-lava-orange font-bold text-[10px]">
                                    Pouch
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h4 className="text-sm font-brand font-bold text-[var(--text-primary)]">{item.name}</h4>
                                <p className="text-sm font-brand font-black text-lava-orange mb-2">{item.price}</p>

                                {item.status === "In Stock" ? (
                                    <button className="flex items-center gap-1.5 text-[10px] font-brand font-black text-mint-teal uppercase tracking-wider hover:underline">
                                        <ShoppingCart size={12} /> Add to Cart
                                    </button>
                                ) : (
                                    <button className="flex items-center gap-1.5 text-[10px] font-brand font-black text-sky-blue uppercase tracking-wider hover:underline">
                                        <Bell size={12} /> Notify Me
                                    </button>
                                )}
                            </div>
                            <button className="p-2 text-[var(--text-muted)] hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
