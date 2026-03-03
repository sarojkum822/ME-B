"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    qty: number;
    color: string;
    img: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, "qty">) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, delta: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
    lastAddedId: number | null;
    appliedPromo: { code: string; discount: number } | null;
    setPromo: (code: string | null, discount?: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const INITIAL_CART: CartItem[] = [
    { id: 1, name: "Sea Salt & Vinegar", price: 299, qty: 1, color: "bg-sky-blue", img: "/realistic_images/salted.png" },
];

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
    const [lastAddedId, setLastAddedId] = useState<number | null>(null);
    const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        const savedPromo = localStorage.getItem("appliedPromo");
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart from local storage", e);
            }
        }
        if (savedPromo) {
            try {
                setAppliedPromo(JSON.parse(savedPromo));
            } catch (e) {
                console.error("Failed to parse promo from local storage", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to local storage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("cart", JSON.stringify(cartItems));
            localStorage.setItem("appliedPromo", JSON.stringify(appliedPromo));
        }
    }, [cartItems, appliedPromo, isLoaded]);

    const addToCart = (newItem: Omit<CartItem, "qty">) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === newItem.id);
            if (existingItem) {
                return prev.map((item) =>
                    item.id === newItem.id ? { ...item, qty: Math.min(item.qty + 1, 10) } : item
                );
            }
            return [...prev, { ...newItem, qty: 1 }];
        });
        setLastAddedId(newItem.id);
        // Reset after animation duration
        setTimeout(() => setLastAddedId(null), 1000);
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: number, delta: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, qty: Math.max(1, Math.min(10, item.qty + delta)) }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        setAppliedPromo(null);
    };

    const setPromo = (code: string | null, discount: number = 0) => {
        if (!code) {
            setAppliedPromo(null);
        } else {
            setAppliedPromo({ code, discount });
        }
    };

    const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
                lastAddedId,
                appliedPromo,
                setPromo,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
