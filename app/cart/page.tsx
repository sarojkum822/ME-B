"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

const PROMO_CODES: Record<string, number> = {
    "CRUNCH10": 10,
    "MAKHANA20": 20,
    "FIRST50": 50,
};

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart: removeItem, cartTotal: subtotal } = useCart();
    const [promoCode, setPromoCode] = useState("");
    const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
    const [promoError, setPromoError] = useState("");

    const discount = appliedPromo ? Math.round(subtotal * (PROMO_CODES[appliedPromo] / 100)) : 0;
    const total = subtotal - discount;

    const applyPromo = () => {
        const code = promoCode.toUpperCase().trim();
        if (PROMO_CODES[code]) {
            setAppliedPromo(code);
            setPromoError("");
        } else {
            setPromoError("Invalid promo code");
            setAppliedPromo(null);
        }
    };

    const removePromo = () => {
        setAppliedPromo(null);
        setPromoCode("");
        setPromoError("");
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-20 bg-card-bg rounded-lg shadow-sm">
                            <div className="relative w-48 h-48 mx-auto mb-6 opacity-20">
                                <Image
                                    src="/empty-cart.png"
                                    alt="Empty Cart"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <h2 className="text-2xl font-bold mb-2 text-foreground">Your cart is empty!</h2>
                            <p className="text-muted mb-8">Add something to make me happy :)</p>
                            <Link
                                href="/shop"
                                className="inline-block px-12 py-3 bg-lava-orange text-white font-bold rounded shadow-md hover:bg-lava-orange/90 transition-all uppercase tracking-wide"
                            >
                                Shop Now
                            </Link>
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
                                    <button className="text-[13px] font-bold text-sky-600 dark:text-sky-400 border border-card-border px-4 py-2 rounded hover:shadow-sm transition-all whitespace-nowrap">
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
                                                            <button className="text-sm font-bold uppercase hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-foreground">
                                                                Save for later
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Place Order Section */}
                                    <div className="p-4 flex justify-end border-t border-card-border bg-card-bg sticky bottom-0 z-10">
                                        <button
                                            className="px-16 py-3.5 bg-lava-orange text-white font-bold rounded shadow-lg hover:bg-lava-orange/90 transition-all uppercase tracking-wide text-[15px]"
                                            onClick={() => alert("Redirecting to checkout...")}
                                        >
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Price Details */}
                            <aside className="w-full lg:w-[32%] sticky top-30">
                                <div className="bg-card-bg rounded shadow-sm border border-card-border overflow-hidden">
                                    <h3 className="px-6 py-4 text-muted font-bold uppercase tracking-wide border-b border-card-border text-[15px]">Price details</h3>

                                    <div className="p-6 space-y-5">
                                        <div className="flex justify-between text-base">
                                            <span>Price ({cartItems.length} items)</span>
                                            <span>₹{Math.round(subtotal * 1.5)}</span>
                                        </div>
                                        <div className="flex justify-between text-base items-center">
                                            <span className="flex items-center gap-1.5 text-foreground">
                                                Fees <span className="w-4 h-4 rounded-full border border-card-border flex items-center justify-center text-[10px] text-muted">?</span>
                                            </span>
                                            <div className="text-right">
                                                <span className="line-through text-muted text-sm mr-2">₹40</span>
                                                <span className="text-mint-teal">FREE</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-base">
                                            <span>Platform Fee</span>
                                            <span>₹7</span>
                                        </div>
                                        <div className="flex justify-between text-base items-center">
                                            <span>Delivery Charges</span>
                                            <div className="text-right">
                                                <span className="line-through text-stone-400 text-sm mr-2">₹80</span>
                                                <span className="text-mint-teal">Free</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between text-base text-mint-teal">
                                            <span>Discount</span>
                                            <span>- ₹{Math.round(subtotal * 0.5)}</span>
                                        </div>

                                        {appliedPromo && (
                                            <div className="flex justify-between text-base text-mint-teal">
                                                <span>Coupons Applied ({appliedPromo})</span>
                                                <span>- ₹{discount}</span>
                                            </div>
                                        )}

                                        <div className="pt-5 border-t border-dashed border-card-border flex justify-between text-lg font-bold text-foreground">
                                            <span>Total Amount</span>
                                            <span>₹{total + 7}</span>
                                        </div>

                                        <p className="text-mint-teal font-bold text-[15px]">
                                            You will save ₹{Math.round(subtotal * 0.5) + discount} on this order
                                        </p>
                                    </div>
                                </div>

                                {/* Security Badge */}
                                <div className="mt-4 flex items-center gap-3 px-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-card-border flex items-center justify-center opacity-50">
                                        <Check size={16} className="text-muted" />
                                    </div>
                                    <p className="text-xs text-muted font-medium leading-relaxed">
                                        Safe and Secure Payments.Easy returns.100% Authentic products.
                                    </p>
                                </div>
                            </aside>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
