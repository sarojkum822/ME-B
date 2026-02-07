"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";
import { PRODUCTS } from "@/lib/products";
import { Heart, Trash2, ShoppingBag, Star, ShieldCheck } from "lucide-react";

export default function WishlistPage() {
    const { wishlist, removeFromWishlist, clearWishlist, isInWishlist } = useWishlist();
    const [removingId, setRemovingId] = useState<number | null>(null);

    const wishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

    const handleRemove = (id: number) => {
        setRemovingId(id);
        setTimeout(() => {
            removeFromWishlist(id);
            setRemovingId(null);
        }, 300);
    };

    return (
        <main className="min-h-screen bg-stone-950 text-white">
            <Navbar />

            <section className="pt-40 pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                        <div>
                            <span className="text-berry-pink font-brand font-black text-sm uppercase tracking-[0.4em] mb-4 block">My Favorites</span>
                            <h1 className="text-5xl md:text-7xl font-brand font-black uppercase leading-[0.85] tracking-tighter">
                                Your <span className="text-berry-pink">Wishlist.</span>
                            </h1>
                        </div>
                        <div className="flex items-center gap-4">
                            {wishlistProducts.length > 0 && (
                                <button
                                    onClick={clearWishlist}
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-brand font-bold uppercase text-xs tracking-widest hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-colors"
                                >
                                    Clear All
                                </button>
                            )}
                            <Link href="/shop" className="px-8 py-3 bg-lava-orange text-white rounded-full font-brand font-bold uppercase text-xs tracking-widest hover:bg-lava-orange/80 transition-colors">
                                Explore Flavors
                            </Link>
                        </div>
                    </div>

                    {wishlistProducts.length === 0 ? (
                        /* Empty State */
                        <div className="bg-stone-900/20 p-12 md:p-20 rounded-[3rem] border border-white/5 text-center">
                            <div className="w-24 h-24 bg-berry-pink/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Heart size={48} className="text-berry-pink" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-brand font-bold mb-4">Your wishlist is empty</h2>
                            <p className="text-stone-500 mb-8 max-w-md mx-auto">
                                Start adding your favorite makhana flavors by clicking the heart icon on any product!
                            </p>
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-berry-pink text-white font-brand font-bold rounded-xl hover:bg-berry-pink/80 transition-colors"
                            >
                                <ShoppingBag size={20} />
                                Browse Products
                            </Link>
                        </div>
                    ) : (
                        /* Wishlist Items Grid */
                        <div className="bg-stone-900/20 p-6 md:p-12 rounded-[3rem] border border-white/5">
                            <div className="flex items-center justify-between mb-8">
                                <p className="text-stone-400 font-medium">
                                    <span className="text-white font-bold">{wishlistProducts.length}</span> {wishlistProducts.length === 1 ? 'item' : 'items'} saved
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {wishlistProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className={`group relative bg-white rounded-2xl p-4 transition-all duration-300 ${removingId === product.id ? "opacity-0 scale-95" : "opacity-100"
                                            }`}
                                    >
                                        {/* Remove Button */}
                                        <button
                                            onClick={() => handleRemove(product.id)}
                                            className="absolute top-3 right-3 w-10 h-10 bg-stone-100 hover:bg-red-500 text-stone-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                        {/* Discount Badge */}
                                        {product.discount > 0 && (
                                            <div className="absolute top-3 left-3 bg-mint-teal text-stone-900 px-2 py-1 rounded-lg text-xs font-black z-10">
                                                {product.discount}% OFF
                                            </div>
                                        )}

                                        {/* Product Image - Clickable */}
                                        <Link href={`/product/${product.id}`} className="block">
                                            <div className={`${product.color} w-full aspect-square rounded-xl overflow-hidden mb-4 relative`}>
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    unoptimized
                                                />
                                            </div>
                                        </Link>

                                        {/* Product Info */}
                                        <div className="text-stone-900">
                                            <Link href={`/product/${product.id}`} className="hover:text-lava-orange transition-colors">
                                                <h3 className="font-brand font-bold text-lg mb-1">{product.name}</h3>
                                            </Link>
                                            <p className="text-stone-500 text-sm mb-3">{product.cue}</p>

                                            {/* Rating */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="flex items-center gap-1 bg-mint-teal text-stone-900 px-2 py-0.5 rounded">
                                                    <Star size={12} className="fill-current" />
                                                    <span className="text-xs font-bold">{product.rating}</span>
                                                </div>
                                                <span className="text-xs text-stone-400">({product.reviews} reviews)</span>
                                            </div>

                                            {/* Assured Badge */}
                                            <div className="flex items-center gap-1 mb-4 text-mint-teal">
                                                <ShieldCheck size={14} />
                                                <span className="text-[10px] font-bold uppercase tracking-wide">Mithila Assured</span>
                                            </div>

                                            {/* Price & Add to Cart */}
                                            <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                                                <div>
                                                    <p className="font-bold text-xl">₹{product.price}</p>
                                                    {product.originalPrice > product.price && (
                                                        <p className="text-stone-400 line-through text-sm">₹{product.originalPrice}</p>
                                                    )}
                                                </div>
                                                <button className="bg-lava-orange text-white px-4 py-2 rounded-lg font-brand font-bold text-sm hover:bg-stone-900 transition-colors">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 text-center">
                                <p className="text-stone-600 font-medium mb-6">We'll notify you if any of these go on limited offer! 🎉</p>
                                <Link
                                    href="/shop"
                                    className="inline-block px-10 py-4 bg-sun-yellow text-stone-900 font-brand font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 transition-transform"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
