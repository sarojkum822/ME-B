"use client";

import { WishlistProvider } from "@/context/WishlistContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { ToastProvider } from "@/context/ToastContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <ToastProvider>
                <WishlistProvider>
                    <CartProvider>
                        <AuthProvider>
                            {children}
                        </AuthProvider>
                    </CartProvider>
                </WishlistProvider>
            </ToastProvider>
        </ThemeProvider>
    );
}
