"use client";

import { WishlistProvider } from "@/context/WishlistContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <WishlistProvider>
                <CartProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </CartProvider>
            </WishlistProvider>
        </ThemeProvider>
    );
}
