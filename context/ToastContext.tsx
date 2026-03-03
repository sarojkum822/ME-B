"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((message: string, type: ToastType = "success") => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-24 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            className={`pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border backdrop-blur-xl ${toast.type === "success"
                                ? "bg-white/90 dark:bg-stone-900/90 border-green-500/20 text-stone-900 dark:text-white"
                                : toast.type === "error"
                                    ? "bg-red-50/90 dark:bg-red-900/90 border-red-500/20 text-red-900 dark:text-red-50"
                                    : "bg-white/90 dark:bg-stone-900/90 border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white"
                                }`}
                        >
                            {toast.type === "success" && <CheckCircle2 size={20} className="text-green-500" />}
                            {toast.type === "error" && <AlertCircle size={20} className="text-red-500" />}
                            {toast.type === "info" && <Info size={20} className="text-sky-500" />}

                            <p className="text-sm font-brand font-bold uppercase tracking-wide">{toast.message}</p>

                            <button
                                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                                className="ml-2 text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
