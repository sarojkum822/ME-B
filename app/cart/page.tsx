"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag, Tag, Sparkles, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import ProductGrid from "@/components/ProductGrid";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const PROMO_CODES: Record<string, number> = {
    "CRUNCH10": 10,
    "MAKHANA20": 20,
    "FIRST50": 50,
};

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart: removeItem, cartTotal: subtotal, appliedPromo, setPromo } = useCart();
    const { showToast } = useToast();
    const router = useRouter();
    const [promoCode, setPromoCode] = useState("");
    const [promoError, setPromoError] = useState("");
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const discount = appliedPromo ? appliedPromo.discount : 0;
    const total = subtotal - discount;

    const applyPromo = () => {
        const code = promoCode.toUpperCase().trim();
        if (PROMO_CODES[code]) {
            const discountValue = Math.round(subtotal * (PROMO_CODES[code] / 100));
            setPromo(code, discountValue);
            setPromoError("");
            showToast(`Promo ${code} applied!`, "success");
        } else {
            setPromoError("Invalid promo code");
            setPromo(null);
        }
    };

    const removePromo = () => {
        setPromo(null);
        setPromoCode("");
        setPromoError("");
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {cartItems.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center py-20 px-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-lava-orange/10 blur-3xl rounded-full" />
                                <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center bg-white dark:bg-stone-900 rounded-full border border-card-border shadow-2xl">
                                    <ShoppingBag size={64} className="text-lava-orange/40" />
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-brand font-black uppercase tracking-tight text-foreground mb-4">Your cart is empty</h2>
                            <p className="text-stone-500 font-medium text-lg max-w-md mb-10 leading-relaxed">
                                Looks like you haven't added any crunch to your life yet. Ready to experience the Mithila magic?
                            </p>
                            <Link
                                href="/shop"
                                className="px-12 py-5 bg-lava-orange text-white font-brand font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-lava-orange/20 uppercase tracking-widest text-lg"
                            >
                                Start Shopping
                            </Link>

                            {/* Recommendations for Empty Cart */}
                            <div className="mt-24 w-full">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
                                    <h3 className="text-sm font-brand font-black uppercase tracking-[0.3em] text-stone-400">Recommended for You</h3>
                                    <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
                                </div>
                                <ProductGrid filter="all" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-4 items-start">
                            {/* Left Column: Items */}
                            <div className="w-full lg:w-[68%] space-y-4">
                                {/* Shipping Header */}
                                <div className="bg-card-bg p-4 rounded shadow-sm flex items-center justify-between border border-card-border">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-stone-600 dark:text-stone-400">From Saved Addresses</span>
                                    </div>
                                    <button
                                        onClick={() => showToast("Pincode check coming soon!", "info")}
                                        className="text-[13px] font-bold text-sky-600 dark:text-sky-400 border border-card-border px-4 py-2 rounded hover:shadow-sm transition-all whitespace-nowrap"
                                    >
                                        Enter Delivery Pincode
                                    </button>
                                </div>

                                {/* Items Card */}
                                <div className="bg-card-bg rounded shadow-sm border border-card-border overflow-hidden">
                                    <div className="divide-y divide-card-border dark:divide-stone-800">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
                                                {/* Left: Product Info */}
                                                <div className="flex gap-6 flex-grow">
                                                    <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 relative">
                                                        <Image src={item.img} alt={item.name} fill className="object-contain" unoptimized />
                                                    </div>
                                                    <div className="space-y-2 flex-grow">
                                                        <div className="flex justify-between items-start gap-4">
                                                            <Link href={`/product/${item.id}`} className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                                                                <h3 className="text-[15px] md:text-base font-medium text-foreground leading-tight line-clamp-2">{item.name}</h3>
                                                            </Link>
                                                            <div className="hidden md:block text-right text-sm">
                                                                <p className="text-foreground">Delivery by Thu Feb 12</p>
                                                            </div>
                                                        </div>
                                                        <p className="text-xs text-stone-400">Pack of 1</p>
                                                        <p className="text-xs text-stone-400">Seller: Mithila Essence</p>

                                                        <div className="flex items-center gap-3 mt-2">
                                                            <span className="text-stone-400 line-through text-sm">₹{Math.round(item.price * 1.5)}</span>
                                                            <span className="text-lg font-bold text-stone-900">₹{item.price}</span>
                                                            <span className="text-mint-teal text-xs font-bold uppercase">33% Off</span>
                                                        </div>

                                                        <div className="flex items-center gap-4 mt-6">
                                                            {/* Quantity Control */}
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, -1)}
                                                                    className="w-7 h-7 flex items-center justify-center border border-card-border rounded-full hover:bg-muted-bg disabled:opacity-30 text-foreground"
                                                                    disabled={item.qty <= 1}
                                                                >
                                                                    <Minus size={14} />
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    readOnly
                                                                    value={item.qty}
                                                                    className="w-10 text-center text-sm font-bold border border-card-border bg-transparent py-1 text-foreground"
                                                                />
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, 1)}
                                                                    className="w-7 h-7 flex items-center justify-center border border-card-border rounded-full hover:bg-muted-bg disabled:opacity-30 text-foreground"
                                                                    disabled={item.qty >= 10}
                                                                >
                                                                    <Plus size={14} />
                                                                </button>
                                                            </div>

                                                            <button
                                                                onClick={() => removeItem(item.id)}
                                                                className="text-sm font-bold uppercase hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-foreground"
                                                            >
                                                                Remove
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    showToast("Item saved for later!", "info");
                                                                }}
                                                                className="text-sm font-bold uppercase hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-foreground px-2"
                                                            >
                                                                Save for later
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-6 flex justify-end border-t border-card-border bg-white dark:bg-stone-900 sticky bottom-0 z-10 rounded-b-3xl">
                                        {isOrderPlaced ? (
                                            <div className="flex items-center gap-2 text-mint-teal font-bold uppercase tracking-widest text-sm w-full justify-center">
                                                <Check className="w-5 h-5" /> Order Placed Successfully!
                                            </div>
                                        ) : (
                                            <button
                                                disabled={isCheckoutLoading}
                                                className="px-16 py-3.5 bg-lava-orange text-white font-brand font-black rounded-2xl shadow-lg hover:scale-[1.02] transition-all uppercase tracking-widest text-sm disabled:opacity-50"
                                                onClick={() => {
                                                    setIsCheckoutLoading(true);
                                                    setTimeout(() => {
                                                        router.push("/checkout");
                                                    }, 800);
                                                }}
                                            >
                                                {isCheckoutLoading ? "Processing..." : "Place Order"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Price Details */}
                            <aside className="w-full lg:w-[32%] space-y-4">
                                {/* Promo Code Section */}
                                <div className="bg-card-bg rounded-3xl p-6 border border-card-border shadow-sm">
                                    <h4 className="text-xs font-brand font-black uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
                                        <Tag size={14} /> Apply Promo Code
                                    </h4>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter code (CRUNCH10)"
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                            className="flex-1 bg-background border border-card-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-lava-orange uppercase font-bold"
                                        />
                                        <button
                                            onClick={applyPromo}
                                            className="px-4 py-2 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-xl text-xs font-black uppercase tracking-widest hover:opacity-90 transition-opacity"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {promoError && <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-tight">{promoError}</p>}
                                    {appliedPromo && (
                                        <div className="mt-4 flex items-center justify-between bg-mint-teal/5 p-3 rounded-xl border border-mint-teal/20">
                                            <div className="flex items-center gap-2">
                                                <Sparkles size={14} className="text-mint-teal" />
                                                <span className="text-xs font-black text-mint-teal uppercase tracking-widest">{appliedPromo.code} Applied</span>
                                            </div>
                                            <button onClick={removePromo} className="text-stone-400 hover:text-red-500 transition-colors">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-card-bg rounded-3xl border border-card-border shadow-sm overflow-hidden sticky top-32">
                                    <h3 className="px-8 py-5 border-b border-card-border text-xs font-brand font-black uppercase tracking-[0.2em] text-stone-400">Price details</h3>

                                    <div className="p-8 space-y-4">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-stone-500">Price ({cartItems.length} items)</span>
                                            <span className="text-foreground">₹{subtotal}</span>
                                        </div>
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-stone-500">Discount</span>
                                            <span className="text-mint-teal">- ₹0</span>
                                        </div>
                                        {appliedPromo && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex justify-between text-sm font-medium text-mint-teal"
                                            >
                                                <span>Coupon Discount</span>
                                                <span>- ₹{discount}</span>
                                            </motion.div>
                                        )}
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-stone-500">Delivery Charges</span>
                                            <span className="text-mint-teal uppercase tracking-widest text-[10px] font-black">Free</span>
                                        </div>
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-stone-500">Platform Fee</span>
                                            <span className="text-foreground">₹7</span>
                                        </div>

                                        <div className="pt-6 border-t border-dashed border-card-border flex justify-between text-xl font-brand font-black text-foreground uppercase tracking-tight">
                                            <span>Total Amount</span>
                                            <span>₹{total + 7}</span>
                                        </div>

                                        <div className="bg-mint-teal/5 p-4 rounded-2xl border border-mint-teal/10 mt-6">
                                            <p className="text-mint-teal font-brand font-black text-xs uppercase tracking-widest text-center">
                                                You save ₹{discount} on this order
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Security Badge */}
                                <div className="mt-4 flex items-center gap-3 px-2">
                                    <div className="w-8 h-8 rounded-full border border-card-border flex items-center justify-center opacity-50">
                                        <Check size={16} className="text-muted" />
                                    </div>
                                    <p className="text-xs text-muted font-medium leading-relaxed">
                                        Safe and Secure Payments.Easy returns.100% Authentic products.
                                    </p>
                                </div>
                            </aside>
                        </div>
                    )}

                    {/* Recommendations for Non-Empty Cart */}
                    {cartItems.length > 0 && (
                        <div className="mt-24">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
                                <h3 className="text-sm font-brand font-black uppercase tracking-[0.3em] text-stone-400">Complete the Cravings</h3>
                                <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
                            </div>
                            <ProductGrid filter="all" />
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
