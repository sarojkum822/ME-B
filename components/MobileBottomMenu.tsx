"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, ShoppingCart, User } from "lucide-react";

const NAV_ITEMS = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Shop", icon: ShoppingBag, href: "/shop" },
    { label: "Account", icon: User, href: "/account" },
    { label: "Cart", icon: ShoppingCart, href: "/cart" },
];

export default function MobileBottomMenu() {
    const pathname = usePathname();

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100]">
            <nav className="bg-white/45 dark:bg-stone-900/45 backdrop-blur-[24px] border-t border-white/20 dark:border-white/5 px-6 py-3 pb-safe-offset-4 flex justify-between items-center gap-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            id={item.label === "Account" ? "mobile-bottom-account" : undefined}
                            className={`relative flex flex-col items-center gap-0.5 flex-1 py-1 transition-all duration-300 ${isActive
                                ? "text-lava-orange"
                                : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                                }`}
                        >
                            <div className={`p-2 rounded-full transition-all duration-300 ${isActive ? "bg-lava-orange/10 mb-0.5" : ""}`}>
                                <Icon size={22} className={isActive ? "scale-110" : ""} />
                            </div>
                            <span className={`text-[10px] font-medium transition-all duration-300 ${isActive ? "opacity-100" : "opacity-60"}`}>
                                {item.label}
                            </span>
                            {isActive && (
                                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-lava-orange rounded-full animate-pulse" />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
