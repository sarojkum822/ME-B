"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById, getRelatedProducts, Product } from "@/lib/products";
import { Heart, ShoppingBag, Truck, Shield, RotateCcw, ChevronDown, ChevronUp, Star, Minus, Plus, MapPin, Tag, Check } from "lucide-react";
import { ShippingIcon, AuthenticIcon, ReturnIcon } from "@/components/BrandTrustIcons";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";

interface ProductPageClientProps {
    productId: number;
}

export default function ProductPageClient({ productId }: ProductPageClientProps) {
    const product = getProductById(productId);
    const relatedProducts = getRelatedProducts(productId);
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { showToast } = useToast();

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false); // We'll sync this with WishlistContext
    const [showAllOffers, setShowAllOffers] = useState(false);
    const [pincode, setPincode] = useState("");
    const [pincodeChecked, setPincodeChecked] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

    if (!product) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <Navbar />
                <div className="pt-40 pb-32 px-6 text-center">
                    <h1 className="text-4xl font-brand font-black mb-4 uppercase">Product Not Found</h1>
                    <p className="text-muted mb-8 text-lg">The product you're looking for doesn't exist.</p>
                    <Link href="/shop" className="inline-block px-8 py-4 bg-lava-orange text-white font-brand font-bold rounded-xl hover:bg-lava-orange/90 transition-colors">
                        Back to Shop
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.image,
            color: product.color
        });
        setAddedToCart(true);
        showToast(`${product.name} added to cart!`, "success");
        setTimeout(() => setAddedToCart(false), 2000);
    };

    const handlePincodeCheck = () => {
        if (pincode.length === 6) {
            setPincodeChecked(true);
            showToast("Delivery is available for your location!", "info");
        } else {
            showToast("Please enter a valid 6-digit pincode.", "error");
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />

            {/* Breadcrumb */}
            <div className="pt-24 pb-4 px-6 max-w-7xl mx-auto">
                <nav className="flex items-center gap-2 text-sm text-stone-500 font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
                    <span>/</span>
                    <span className="text-foreground font-bold">{product.name}</span>
                </nav>
            </div>

            {/* Main Product Section */}
            <section className="pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Left: Image Gallery */}
                        <div className="lg:w-1/2">
                            <div className="sticky top-28">
                                {/* Main Image */}
                                <div className="relative aspect-square bg-white rounded-3xl overflow-hidden mb-4 group ring-1 ring-black/5">
                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                        className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                    >
                                        <Heart
                                            size={24}
                                            className={`transition-colors ${isWishlisted ? 'fill-berry-pink text-berry-pink' : 'text-stone-400'}`}
                                        />
                                    </button>

                                    {/* Product Label */}
                                    <div className="absolute top-4 left-4 z-10 bg-stone-900 text-white px-4 py-2 rounded-full text-xs font-brand font-black tracking-widest uppercase shadow-md">
                                        {product.label}
                                    </div>

                                    {/* Main Product Image */}
                                    <Image
                                        src={product.images[selectedImage]}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-8 group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                                    />
                                </div>

                                {/* Thumbnail Gallery */}
                                <div className="flex gap-3">
                                    {product.images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative w-20 h-20 rounded-xl overflow-hidden border transition-all bg-white ${selectedImage === index
                                                ? 'border-lava-orange ring-2 ring-lava-orange/20'
                                                : 'border-card-border hover:border-lava-orange/50'
                                                }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${product.name} view ${index + 1}`}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Product Info */}
                        <div className="lg:w-1/2 space-y-6">
                            {/* Brand & Title */}
                            <div>
                                <span className="text-lava-orange font-brand font-black text-sm uppercase tracking-widest">Mithila Essence</span>
                                <h1 className="text-3xl md:text-5xl font-brand font-black uppercase tracking-tight mt-2 text-foreground">{product.name}</h1>
                                <p className="text-stone-500 font-medium text-lg mt-2">{product.cue}</p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 bg-green-700 text-white px-2 py-1 rounded text-sm font-bold shadow-sm">
                                    <span>{product.rating}</span>
                                    <Star size={12} className="fill-current" />
                                </div>
                                <span className="text-stone-500 font-medium">{product.reviews.toLocaleString()} Ratings & Reviews</span>
                                <span className="text-stone-300">|</span>
                                <span className="text-lava-orange font-brand font-black uppercase tracking-widest text-[10px] bg-lava-orange/5 px-2 py-1 rounded-full">{product.bought} bought this month</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-4 py-4 border-t border-b border-card-border">
                                <span className="text-3xl font-brand font-black text-foreground">₹{product.price}</span>
                                <span className="text-lg text-stone-400 line-through font-medium">₹{product.originalPrice}</span>
                                <span className="text-green-600 text-base font-black">{product.discount}% OFF</span>
                            </div>

                            {/* Offers */}
                            <div className="space-y-3">
                                <h3 className="font-brand font-bold text-lg flex items-center gap-2 text-foreground">
                                    <Tag size={18} className="text-sun-yellow" />
                                    Available Offers
                                </h3>
                                <div className="space-y-2">
                                    {(showAllOffers ? product.offers : product.offers.slice(0, 2)).map((offer, index) => (
                                        <div key={index} className="flex items-start gap-3 text-sm">
                                            <span className="text-green-600 font-bold mt-0.5">•</span>
                                            <div>
                                                <span className="font-bold text-foreground">{offer.title}: </span>
                                                <span className="text-stone-500 font-medium">{offer.description}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {product.offers.length > 2 && (
                                    <button
                                        onClick={() => setShowAllOffers(!showAllOffers)}
                                        className="text-strawberry-red text-sm font-bold flex items-center gap-1 hover:underline"
                                    >
                                        {showAllOffers ? 'Show Less' : `+${product.offers.length - 2} More Offers`}
                                        {showAllOffers ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                )}
                            </div>

                            {/* Delivery */}
                            <div className="bg-card-bg rounded-2xl p-5 space-y-4 border border-card-border shadow-sm">
                                <h3 className="font-brand font-bold flex items-center gap-2 text-foreground">
                                    <Truck size={18} className="text-lava-orange" />
                                    Delivery
                                </h3>
                                <div className="flex gap-3">
                                    <div className="flex-1 relative">
                                        <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                                        <input
                                            type="text"
                                            value={pincode}
                                            onChange={(e) => { setPincode(e.target.value); setPincodeChecked(false); }}
                                            placeholder="Enter Pincode"
                                            maxLength={6}
                                            className="w-full bg-background border border-card-border rounded-xl pl-10 pr-4 py-3 text-foreground placeholder-stone-400 focus:outline-none focus:border-lava-orange transition-colors font-medium"
                                        />
                                    </div>
                                    <button
                                        onClick={handlePincodeCheck}
                                        className="px-6 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-brand font-bold rounded-xl hover:opacity-90 transition-opacity shadow-md"
                                    >
                                        Check
                                    </button>
                                </div>
                                {pincodeChecked && (
                                    <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
                                        <Check size={16} />
                                        <span>Delivery available! Expected by <strong>3-5 business days</strong></span>
                                    </div>
                                )}
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center gap-6">
                                <span className="font-brand font-bold text-foreground">Quantity:</span>
                                <div className="flex items-center bg-card-bg rounded-xl border border-card-border">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-3 hover:bg-muted-bg transition-colors rounded-l-xl text-foreground"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus size={18} className={quantity <= 1 ? 'text-stone-300' : 'text-foreground'} />
                                    </button>
                                    <span className="px-6 py-3 font-brand font-bold text-lg min-w-[60px] text-center text-foreground">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                                        className="p-3 hover:bg-muted-bg transition-colors rounded-r-xl text-foreground"
                                        disabled={quantity >= 10}
                                    >
                                        <Plus size={18} className={quantity >= 10 ? 'text-stone-300' : 'text-foreground'} />
                                    </button>
                                </div>
                                <span className="text-stone-500 text-sm">
                                    {product.stockCount < 50 ? (
                                        <span className="text-lava-orange font-bold">Only {product.stockCount} left!</span>
                                    ) : (
                                        `${product.stockCount} in stock`
                                    )}
                                </span>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={handleAddToCart}
                                    className={`flex-1 py-4 px-8 rounded-2xl font-brand font-black uppercase tracking-wide text-lg flex items-center justify-center gap-3 transition-all ${addedToCart
                                        ? 'bg-green-600 text-white'
                                        : 'bg-lava-orange text-white hover:bg-lava-orange/90 hover:shadow-xl hover:-translate-y-1'
                                        } shadow-lg shadow-lava-orange/20`}
                                >
                                    {addedToCart ? (
                                        <>
                                            <Check size={22} />
                                            Added!
                                        </>
                                    ) : (
                                        <>
                                            <ShoppingBag size={22} />
                                            Add to Cart
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={() => {
                                        toggleWishlist(product.id);
                                        if (!isInWishlist(product.id)) {
                                            showToast(`${product.name} saved to wishlist!`, "success");
                                        }
                                    }}
                                    className={`py-4 px-6 rounded-2xl font-brand font-bold uppercase text-sm border flex items-center justify-center gap-2 transition-all ${isInWishlist(product.id)
                                        ? 'bg-pink-50 dark:bg-pink-900/20 border-pink-500 text-pink-500'
                                        : 'border-card-border text-stone-500 hover:border-stone-400 hover:text-stone-800 dark:hover:text-stone-200'
                                        }`}
                                >
                                    <Heart size={20} className={isInWishlist(product.id) ? 'fill-current' : ''} />
                                    {isInWishlist(product.id) ? 'Saved' : 'Wishlist'}
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-card-border">
                                <div className="text-center group/badge">
                                    <div className="w-12 h-12 bg-white dark:bg-stone-800 border border-card-border rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover/badge:border-sun-yellow group-hover/badge:bg-sun-yellow/5 transition-all duration-300">
                                        <ShippingIcon className="w-6 h-6 text-sun-yellow group-hover/badge:scale-110 transition-transform" />
                                    </div>
                                    <p className="text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-wider leading-tight">Free Shipping<br />Above ₹499</p>
                                </div>
                                <div className="text-center group/badge">
                                    <div className="w-12 h-12 bg-white dark:bg-stone-800 border border-card-border rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover/badge:border-green-500 group-hover/badge:bg-green-500/5 transition-all duration-300">
                                        <AuthenticIcon className="w-6 h-6 text-green-600 group-hover/badge:scale-110 transition-transform" />
                                    </div>
                                    <p className="text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-wider leading-tight">100% Authentic<br />Source</p>
                                </div>
                                <div className="text-center group/badge">
                                    <div className="w-12 h-12 bg-white dark:bg-stone-800 border border-card-border rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover/badge:border-lava-orange group-hover/badge:bg-lava-orange/5 transition-all duration-300">
                                        <ReturnIcon className="w-6 h-6 text-lava-orange group-hover/badge:scale-110 transition-transform" />
                                    </div>
                                    <p className="text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-wider leading-tight">Easy Returns<br />in 7 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-16 px-6 bg-card-bg border-t border-b border-card-border mt-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-brand font-black uppercase mb-6 text-foreground">Product Description</h2>
                            <p className="text-stone-500 leading-relaxed text-lg">{product.description}</p>
                        </div>

                        {/* Highlights */}
                        <div>
                            <h2 className="text-2xl font-brand font-black uppercase mb-6 text-foreground">Highlights</h2>
                            <ul className="space-y-3">
                                {product.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check size={18} className="text-green-600 flex-shrink-0 mt-1" />
                                        <span className="text-stone-500 font-medium">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Nutrition Table */}
                    <div className="mt-12 pt-12 border-t border-card-border">
                        <h2 className="text-2xl font-brand font-black uppercase mb-6 text-foreground">Nutrition Information <span className="text-stone-400 text-base font-normal">(per {product.weight} serving)</span></h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {Object.entries(product.nutritionInfo).map(([key, value]) => (
                                <div key={key} className="bg-background rounded-2xl p-4 text-center border border-card-border shadow-sm">
                                    <p className="text-2xl font-brand font-black text-foreground">{value}</p>
                                    <p className="text-stone-400 text-sm capitalize mt-1 font-bold">{key}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Reviews Summary */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-brand font-black uppercase mb-8 text-foreground">Customer Reviews</h2>
                    <div className="bg-card-bg rounded-3xl p-8 border border-card-border shadow-sm">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Overall Rating */}
                            <div className="text-center md:border-r md:border-card-border md:pr-8">
                                <div className="text-6xl font-brand font-black text-foreground">{product.rating}</div>
                                <div className="flex justify-center gap-1 my-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={20}
                                            className={`${star <= Math.round(product.rating) ? 'fill-green-600 text-green-600' : 'text-stone-300'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-stone-500 font-medium">{product.reviews.toLocaleString()} reviews</p>
                            </div>

                            {/* Rating Breakdown */}
                            <div className="flex-1 space-y-2 w-full max-w-md">
                                {[5, 4, 3, 2, 1].map((stars) => {
                                    const percentage = stars === 5 ? 72 : stars === 4 ? 18 : stars === 3 ? 6 : stars === 2 ? 3 : 1;
                                    return (
                                        <div key={stars} className="flex items-center gap-3">
                                            <span className="text-sm font-medium w-8 text-foreground">{stars} ★</span>
                                            <div className="flex-1 h-2 bg-muted-bg rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-green-500 rounded-full"
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                            <span className="text-sm text-stone-500 w-12">{percentage}%</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Write Review CTA */}
                            <div className="text-center">
                                <button className="px-6 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-brand font-bold rounded-xl hover:opacity-90 transition-opacity shadow-md">
                                    Write a Review
                                </button>
                                <p className="text-stone-400 text-sm mt-2">Share your experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-16 px-6 border-t border-card-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-brand font-black uppercase mb-8 text-foreground">You May Also Like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {relatedProducts.map((item) => (
                            <Link
                                key={item.id}
                                href={`/product/${item.id}`}
                                className="group bg-card-bg rounded-2xl p-4 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-card-border"
                            >
                                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-white">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="font-brand font-bold text-foreground text-sm line-clamp-1 group-hover:text-lava-orange transition-colors">{item.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="font-bold text-foreground text-lg">₹{item.price}</span>
                                    <span className="text-sm text-stone-400 line-through">₹{item.originalPrice}</span>
                                    <span className="text-xs text-green-600 font-black">{item.discount}% off</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile Sticky CTA */}
            <div className="lg:hidden fixed bottom-16 left-0 right-0 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 px-4 py-3 z-40 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                <div className="flex-1">
                    <p className="text-[10px] text-stone-400 font-medium">Total Price</p>
                    <p className="text-xl font-brand font-black text-stone-900 dark:text-white">₹{product.price * quantity}</p>
                </div>
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isWishlisted ? 'bg-pink-50 dark:bg-pink-900/20' : 'bg-stone-100 dark:bg-stone-800'}`}
                >
                    <Heart size={22} className={isWishlisted ? 'fill-berry-pink text-berry-pink' : 'text-stone-400'} />
                </button>
                <button
                    onClick={handleAddToCart}
                    className={`flex-1 max-w-[180px] py-3.5 rounded-xl font-brand font-bold uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${addedToCart
                        ? 'bg-green-600 text-white'
                        : 'bg-lava-orange text-white shadow-lava-orange/30'
                        }`}
                >
                    {addedToCart ? (
                        <>
                            <Check size={18} />
                            Added!
                        </>
                    ) : (
                        <>
                            <ShoppingBag size={18} />
                            Add to Cart
                        </>
                    )}
                </button>
            </div>

            {/* Spacer for mobile sticky bar + bottom menu */}
            <div className="lg:hidden h-32" />

            <Footer />
        </main>
    );
}
