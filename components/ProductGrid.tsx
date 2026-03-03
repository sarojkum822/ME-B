"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { Star, Heart, ShoppingBag, Check } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

interface ProductGridProps {
    filter?: string;
    sort?: string;
    isShopPage?: boolean;
}

export default function ProductGrid({ filter = "all", sort = "default", isShopPage = false }: ProductGridProps) {
    const { isInWishlist, toggleWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { showToast } = useToast();
    const [internalSortBy, setInternalSortBy] = useState<"default" | "price-low" | "price-high" | "rating">("default");

    const sortBy = isShopPage ? sort : internalSortBy;
    const setSortBy = (val: any) => {
        if (!isShopPage) setInternalSortBy(val);
    };
    const [addedId, setAddedId] = useState<number | null>(null);

    const filteredProducts = (filter === "all"
        ? PRODUCTS
        : filter === "new"
            ? PRODUCTS.filter(p => p.label === "NEW")
            : PRODUCTS.filter(p => p.category === filter || p.category === "all"))
        .sort((a, b) => {
            if (sortBy === "price-low" || sortBy === "price-low") return a.price - b.price;
            if (sortBy === "price-high" || sortBy === "price-high") return b.price - a.price;
            if (sortBy === "rating") return b.rating - a.rating;
            if (sortBy === "newest" || sortBy === "default") return b.id - a.id; // Using ID as proxy for newest
            return 0;
        });

    const handleWishlistToggle = (e: React.MouseEvent, productId: number) => {
        e.preventDefault();
        e.stopPropagation();
        const product = PRODUCTS.find(p => p.id === productId);
        toggleWishlist(productId);
        if (!isInWishlist(productId)) {
            showToast(`${product?.name} added to wishlist!`, "success");
        }
    };

    const handleQuickAdd = (e: React.MouseEvent, product: typeof PRODUCTS[0]) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.image,
            color: product.color
        });
        setAddedId(product.id);
        showToast(`${product.name} added to cart!`, "success");
        setTimeout(() => setAddedId(null), 2000);
    };

    return (
        <section className="bg-transparent">
            {/* Sorting Header - Hidden on small mobile */}
            <div className="flex justify-between items-center mb-6 md:mb-10 gap-4">
                <div className="text-[var(--text-secondary)] text-[11px] md:text-sm font-medium uppercase tracking-wider">
                    Showing <span className="text-[var(--text-primary)] font-black">{filteredProducts.length}</span> crunchy options
                </div>
                <div className="hidden lg:flex items-center gap-3">
                    <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest">Sort By:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-2 text-sm font-brand font-bold text-stone-800 dark:text-stone-200 outline-none focus:border-lava-orange transition-colors cursor-pointer"
                    >
                        <option value="default">Newest First</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Customer Rating</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                {filteredProducts.map((product) => (
                    <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        className="group flex flex-col bg-white dark:bg-card-bg hover:shadow-2xl transition-all duration-500 border border-stone-100 dark:border-stone-800 hover:border-lava-orange/30 dark:hover:border-lava-orange/30 overflow-hidden relative rounded-xl md:rounded-2xl"
                    >
                        {/* Wishlist transitions */}
                        <button
                            onClick={(e) => handleWishlistToggle(e, product.id)}
                            className={`absolute top-2 right-2 p-2 rounded-full z-10 transition-all ${isInWishlist(product.id)
                                ? "text-red-500 bg-red-50 dark:bg-red-900/10"
                                : "text-stone-300 hover:text-red-400 bg-transparent"
                                }`}
                        >
                            <Heart size={16} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                        </button>

                        {/* Image Container */}
                        <div className="relative w-full aspect-square p-2 sm:p-4 bg-stone-50/50 dark:bg-stone-900/50 overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-3 sm:p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            {/* Quick Add Overlay - Desktop Only */}
                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden lg:block">
                                <button
                                    className={`w-full py-3 rounded-xl font-brand font-bold text-xs flex items-center justify-center gap-2 shadow-xl transition-all ${addedId === product.id
                                        ? "bg-green-600 text-white"
                                        : "bg-stone-900 text-white dark:bg-white dark:text-stone-900 hover:bg-lava-orange dark:hover:bg-lava-orange hover:text-white"
                                        }`}
                                    onClick={(e) => handleQuickAdd(e, product)}
                                >
                                    {addedId === product.id ? (
                                        <>
                                            <Check size={14} />
                                            ADDED!
                                        </>
                                    ) : (
                                        <>
                                            <ShoppingBag size={14} />
                                            QUICK ADD
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-3 md:p-4 flex flex-col gap-1 border-t border-stone-100 dark:border-stone-800 flex-grow">
                            <h3 className="text-[12px] md:text-[15px] font-brand font-black uppercase tracking-tight text-stone-900 dark:text-stone-100 line-clamp-2 group-hover:text-lava-orange transition-colors h-8 md:h-11 leading-tight sm:mt-1">
                                {product.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center gap-1.5 mt-0.5 md:mt-1">
                                <div className="flex items-center gap-0.5 md:gap-1 bg-green-700 text-white px-1 md:px-1.5 py-0.5 rounded-[4px] text-[9px] md:text-[11px] font-bold">
                                    <span>{product.rating}</span>
                                    <Star size={8} className="fill-current md:size-2.5" />
                                </div>
                                <span className="text-[10px] md:text-[12px] font-bold text-stone-500">({product.reviews.toLocaleString()})</span>
                            </div>

                            {/* Price - Refined for Mobile */}
                            <div className="flex items-center gap-1.5 md:gap-2 mt-1.5 md:mt-2 flex-wrap">
                                <span className="text-base md:text-xl font-black text-stone-900 dark:text-white">
                                    ₹{product.price}
                                </span>
                                {product.originalPrice > product.price && (
                                    <div className="flex items-center gap-1">
                                        <span className="text-[11px] md:text-sm text-stone-400 line-through font-medium">
                                            ₹{product.originalPrice}
                                        </span>
                                        <span className="text-[10px] md:text-sm text-green-600 font-bold whitespace-nowrap">
                                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Delivery */}
                            <p className="text-[11px] md:text-sm text-stone-500 dark:text-stone-400 mt-1 font-medium italic opacity-80">
                                Free delivery
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
