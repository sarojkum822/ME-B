"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WishlistContextType {
    wishlist: number[];
    addToWishlist: (productId: number) => void;
    removeFromWishlist: (productId: number) => void;
    toggleWishlist: (productId: number) => void;
    isInWishlist: (productId: number) => boolean;
    clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("mithila-wishlist");
        if (stored) {
            try {
                setWishlist(JSON.parse(stored));
            } catch {
                setWishlist([]);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save wishlist to localStorage when it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("mithila-wishlist", JSON.stringify(wishlist));
        }
    }, [wishlist, isLoaded]);

    const addToWishlist = (productId: number) => {
        setWishlist(prev => {
            if (prev.includes(productId)) return prev;
            return [...prev, productId];
        });
    };

    const removeFromWishlist = (productId: number) => {
        setWishlist(prev => prev.filter(id => id !== productId));
    };

    const toggleWishlist = (productId: number) => {
        setWishlist(prev => {
            if (prev.includes(productId)) {
                return prev.filter(id => id !== productId);
            }
            return [...prev, productId];
        });
    };

    const isInWishlist = (productId: number) => {
        return wishlist.includes(productId);
    };

    const clearWishlist = () => {
        setWishlist([]);
    };

    return (
        <WishlistContext.Provider value={{
            wishlist,
            addToWishlist,
            removeFromWishlist,
            toggleWishlist,
            isInWishlist,
            clearWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}
