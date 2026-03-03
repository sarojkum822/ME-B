"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CreditCard, Truck, ShieldCheck, MapPin, ChevronLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CheckoutPage() {
    const { cartItems, cartTotal: subtotal, clearCart, appliedPromo } = useCart();
    const router = useRouter();
    const { showToast } = useToast();

    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("upi");
    const [upiId, setUpiId] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });

    const tax = Math.round((subtotal - (appliedPromo?.discount || 0)) * 0.12);
    const shipping = subtotal > 500 ? 0 : 40;
    const discount = appliedPromo ? appliedPromo.discount : 0;
    const total = subtotal - discount + tax + shipping;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validateShipping = () => {
        if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.pincode) {
            showToast("Please fill all shipping details.", "error");
            return false;
        }
        if (formData.phone.length < 10) {
            showToast("Invalid phone number.", "error");
            return false;
        }
        if (formData.pincode.length !== 6) {
            showToast("Invalid pincode.", "error");
            return false;
        }
        return true;
    };

    const handleContinueToPayment = () => {
        if (validateShipping()) {
            setStep(2);
            window.scrollTo(0, 0);
        }
    };

    const handlePlaceOrder = () => {
        if (paymentMethod === "upi" && !upiId.includes("@")) {
            showToast("Please enter a valid UPI ID.", "error");
            return;
        }
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            clearCart();
            router.push("/checkout/success");
        }, 2000);
    };

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <Navbar />
                <div className="pt-40 pb-32 px-6 text-center animate-in fade-in duration-700">
                    <div className="w-24 h-24 bg-stone-100 dark:bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-8 border border-card-border">
                        <ShoppingBag size={40} className="text-stone-300" />
                    </div>
                    <h1 className="text-4xl font-brand font-black mb-4 uppercase tracking-tight">Your cart is empty</h1>
                    <p className="text-stone-500 mb-10 text-lg">Looks like you haven't added anything yet.</p>
                    <Link href="/shop" className="px-10 py-4 bg-lava-orange text-white font-brand font-black rounded-xl hover:scale-105 transition-transform uppercase tracking-widest shadow-xl shadow-lava-orange/20">
                        Return to Shop
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-2 mb-8 text-sm text-stone-400 font-bold uppercase tracking-widest">
                        <Link href="/cart" className="hover:text-foreground">Cart</Link>
                        <ChevronRight size={14} />
                        <span className={step === 1 ? "text-lava-orange" : "text-stone-400"}>Shipping</span>
                        <ChevronRight size={14} />
                        <span className={step === 2 ? "text-lava-orange" : "text-stone-400"}>Payment</span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Left Column: Form */}
                        <div className="w-full lg:w-[65%] space-y-6">
                            {step === 1 ? (
                                <div className="bg-card-bg rounded-3xl p-8 border border-card-border shadow-sm">
                                    <h2 className="text-2xl font-brand font-black mb-6 uppercase tracking-tight flex items-center gap-3">
                                        <MapPin className="text-lava-orange" /> Shipping Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold uppercase text-stone-400">Full Name</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleInput} placeholder="John Doe" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-lava-orange" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold uppercase text-stone-400">Phone Number</label>
                                            <input type="text" name="phone" value={formData.phone} onChange={handleInput} placeholder="+91 98765 43210" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-lava-orange" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 mb-6">
                                        <label className="text-xs font-bold uppercase text-stone-400">Address (House No, Building, Street, Area)</label>
                                        <input type="text" name="address" value={formData.address} onChange={handleInput} placeholder="Apt 4B, Mithila Heights" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-lava-orange" />
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold uppercase text-stone-400">City</label>
                                            <input type="text" name="city" value={formData.city} onChange={handleInput} placeholder="Darbhanga" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-lava-orange" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold uppercase text-stone-400">State</label>
                                            <input type="text" name="state" value={formData.state} onChange={handleInput} placeholder="Bihar" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-lava-orange" />
                                        </div>
                                        <div className="space-y-1.5 col-span-2 md:col-span-1">
                                            <label className="text-xs font-bold uppercase text-stone-400">Pincode</label>
                                            <input type="text" name="pincode" value={formData.pincode} onChange={handleInput} placeholder="846004" className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-lava-orange" />
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleContinueToPayment}
                                        className="w-full py-4 bg-lava-orange text-white font-brand font-black rounded-2xl hover:scale-[1.02] transition-transform uppercase tracking-widest shadow-lg shadow-lava-orange/20"
                                    >
                                        Continue to Payment
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-card-bg rounded-3xl p-8 border border-card-border shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-brand font-black uppercase tracking-tight flex items-center gap-3">
                                            <CreditCard className="text-lava-orange" /> Payment Method
                                        </h2>
                                        <button onClick={() => setStep(1)} className="text-xs font-bold uppercase text-stone-400 flex items-center gap-1 hover:text-lava-orange transition-colors">
                                            <ChevronLeft size={16} /> Edit Shipping
                                        </button>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div
                                            onClick={() => setPaymentMethod("upi")}
                                            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${paymentMethod === "upi" ? "border-lava-orange bg-lava-orange/5" : "border-stone-100 hover:border-stone-200"}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-stone-100 font-bold text-xs">UPI</div>
                                                <div>
                                                    <p className="font-bold text-sm">UPI (Google Pay, PhonePe, Paytm)</p>
                                                    <p className="text-xs text-stone-400">Pay securely using your UPI ID</p>
                                                </div>
                                            </div>
                                            <div className={`w-5 h-5 rounded-full border-4 ${paymentMethod === "upi" ? "border-lava-orange" : "border-transparent bg-stone-100"}`} />
                                        </div>

                                        {paymentMethod === "upi" && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="px-4 pb-4"
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="yourname@bank"
                                                    value={upiId}
                                                    onChange={(e) => setUpiId(e.target.value)}
                                                    className="w-full bg-background border border-card-border rounded-xl px-4 py-3 focus:outline-none focus:border-lava-orange font-bold text-sm"
                                                />
                                            </motion.div>
                                        )}

                                        <div
                                            onClick={() => setPaymentMethod("card")}
                                            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${paymentMethod === "card" ? "border-lava-orange bg-lava-orange/5" : "border-stone-100 hover:border-stone-200"}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-stone-100"><CreditCard size={20} className="text-stone-400" /></div>
                                                <div>
                                                    <p className="font-bold text-sm">Debit / Credit Card</p>
                                                    <p className="text-xs text-stone-400">Visa, Mastercard, RuPay</p>
                                                </div>
                                            </div>
                                            <div className={`w-5 h-5 rounded-full border-4 ${paymentMethod === "card" ? "border-lava-orange" : "border-transparent bg-stone-100"}`} />
                                        </div>

                                        {paymentMethod === "card" && (
                                            <div className="px-4 pb-4 text-xs font-bold text-lava-orange uppercase tracking-widest text-center py-2 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-dashed border-card-border">
                                                Card processing coming soon!
                                            </div>
                                        )}

                                        <div
                                            onClick={() => setPaymentMethod("cod")}
                                            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${paymentMethod === "cod" ? "border-lava-orange bg-lava-orange/5" : "border-stone-100 hover:border-stone-200"}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-stone-100 font-bold text-xs">COD</div>
                                                <div>
                                                    <p className="font-bold text-sm">Cash on Delivery</p>
                                                    <p className="text-xs text-stone-400">Pay when you receive the order</p>
                                                </div>
                                            </div>
                                            <div className={`w-5 h-5 rounded-full border-4 ${paymentMethod === "cod" ? "border-lava-orange" : "border-transparent bg-stone-100"}`} />
                                        </div>
                                    </div>

                                    <button
                                        disabled={isProcessing || (paymentMethod === "card")}
                                        onClick={handlePlaceOrder}
                                        className="w-full py-4 bg-lava-orange text-white font-brand font-black rounded-2xl hover:scale-[1.02] transition-transform uppercase tracking-widest shadow-lg shadow-lava-orange/20 disabled:opacity-50"
                                    >
                                        {isProcessing ? "Processing..." : paymentMethod === "cod" ? "Confirm Order" : `Pay ₹${total}`}
                                    </button>
                                    <div className="flex items-center justify-center gap-2 mt-4 text-stone-400 text-xs font-medium">
                                        <ShieldCheck size={14} /> 256-bit SSL Secure Payment
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-card-bg rounded-2xl p-6 border border-card-border flex items-center gap-4">
                                    <div className="w-12 h-12 bg-mint-teal/10 rounded-full flex items-center justify-center text-mint-teal">
                                        <Truck size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Free Delivery</p>
                                        <p className="text-xs text-stone-400">On orders above ₹500</p>
                                    </div>
                                </div>
                                <div className="bg-card-bg rounded-2xl p-6 border border-card-border flex items-center gap-4">
                                    <div className="w-12 h-12 bg-sky-blue/10 rounded-full flex items-center justify-center text-sky-blue">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Quality Assured</p>
                                        <p className="text-xs text-stone-400">Fresh from Mithila wetlands</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Order Summary */}
                        <aside className="w-full lg:w-[35%]">
                            <div className="bg-card-bg rounded-3xl p-8 border border-card-border shadow-sm sticky top-32">
                                <h3 className="text-xl font-brand font-black mb-6 uppercase tracking-tight">Order Summary</h3>
                                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="w-16 h-16 bg-white rounded-xl border border-stone-100 p-2 flex-shrink-0 relative">
                                                <Image src={item.img} alt={item.name} fill className="object-contain" unoptimized />
                                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-lava-orange text-white text-[10px] flex items-center justify-center rounded-full font-bold">{item.qty}</span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="font-bold text-sm line-clamp-1">{item.name}</p>
                                                <p className="text-xs text-stone-400">Pack of 1</p>
                                                <p className="text-sm font-bold mt-1">₹{item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 pt-6 border-t border-dashed border-card-border text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-stone-400">Subtotal</span>
                                        <span className="font-bold">₹{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-stone-400">Discount</span>
                                        <span className="text-mint-teal font-bold">- ₹{discount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-stone-400">Shipping</span>
                                        <span className={shipping === 0 ? "text-mint-teal font-bold" : "font-bold"}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-stone-400">Taxes (GST 12%)</span>
                                        <span className="font-bold">₹{tax}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-brand font-black pt-3 border-t border-card-border mt-3">
                                        <span>Total</span>
                                        <span>₹{total}</span>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-stone-50 dark:bg-stone-900 rounded-2xl border border-dashed border-card-border text-center">
                                    <p className="text-xs text-stone-400 uppercase font-bold tracking-widest mb-1">Coupon Code</p>
                                    <p className={`text-sm font-bold ${appliedPromo ? "text-mint-teal" : "text-stone-300"}`}>
                                        {appliedPromo ? `${appliedPromo.code} - Applied` : "None Applied"}
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
