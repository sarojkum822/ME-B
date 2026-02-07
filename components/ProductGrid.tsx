"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { Star, Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface ProductGridProps {
    filter?: string;
    isShopPage?: boolean;
}

export default function ProductGrid({ filter = "all", isShopPage = false }: ProductGridProps) {
    const { isInWishlist, toggleWishlist } = useWishlist();

    const filteredProducts = filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === filter || p.category === "all");

    const handleWishlistToggle = (e: React.MouseEvent, productId: number) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(productId);
    };

    return (
        <section className="bg-transparent">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                {filteredProducts.map((product) => (
                    <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        className="group flex flex-col bg-white dark:bg-card-bg hover:shadow-xl transition-all duration-300 border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 overflow-hidden relative rounded-[10px]"
                    >
                        {/* Wishlist transitions */}
                        <button
                            onClick={(e) => handleWishlistToggle(e, product.id)}
                            className={`absolute top-2 right-2 p-2 rounded-full z-10 transition-all ${isInWishlist(product.id)
                                ? "text-red-500 bg-red-50 dark:bg-red-900/10"
                                : "text-stone-300 hover:text-red-400 bg-transparent"
                                }`}
                        >
                            <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                        </button>

                        {/* Image Container */}
                        <div className="relative w-full aspect-[4/5] p-1 bg-white">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                unoptimized
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-3 lg:p-4 flex flex-col gap-1 border-t border-stone-100 dark:border-stone-800">
                            <h3 className="text-[14px] lg:text-[15px] font-bold text-stone-900 dark:text-stone-100 line-clamp-2 hover:text-blue-600 transition-colors h-10 lg:h-11 leading-tight mt-1">
                                {product.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center gap-1 bg-green-700 text-white px-1.5 py-0.5 rounded-[4px] text-[11px] font-bold">
                                    <span>{product.rating}</span>
                                    <Star size={10} className="fill-current" />
                                </div>
                                <span className="text-[12px] font-bold text-stone-500">({product.reviews.toLocaleString()})</span>
                                <div className="w-14 h-4 relative ml-auto">
                                    {/* Simplified logo-like Assured badge */}
                                    <div className="flex items-center bg-blue-50 dark:bg-blue-900/20 px-1 rounded-[2px] border border-blue-100 dark:border-blue-800/50">
                                        <span className="text-[9px] font-black italic text-blue-600 dark:text-blue-400">ASSURED</span>
                                    </div>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2 mt-2 flex-wrap">
                                <span className="text-[18px] lg:text-[20px] font-black text-stone-900 dark:text-white">
                                    ₹{product.price}
                                </span>
                                {product.originalPrice > product.price && (
                                    <>
                                        <span className="text-[13px] lg:text-[14px] text-stone-400 line-through font-medium">
                                            ₹{product.originalPrice}
                                        </span>
                                        <span className="text-[13px] lg:text-[14px] text-green-600 font-bold">
                                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* Delivery */}
                            <p className="text-[12px] text-stone-500 dark:text-stone-400 mt-1 font-medium">
                                Free delivery
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

