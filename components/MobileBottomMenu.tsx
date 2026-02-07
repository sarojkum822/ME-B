"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Flame, ShoppingCart } from "lucide-react";

const NAV_ITEMS = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Shop", icon: ShoppingBag, href: "/shop" },
    { label: "Flavors", icon: Flame, href: "/flavor-guide" },
    { label: "Cart", icon: ShoppingCart, href: "/cart" },
];

export default function MobileBottomMenu() {
    const pathname = usePathname();

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100]">
            <nav className="bg-stone-900/95 backdrop-blur-xl border-t border-white/10 px-4 py-2 pb-safe flex justify-between items-center gap-2">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 flex-1 py-2 rounded-2xl transition-all duration-300 ${isActive
                                ? "bg-lava-orange text-white shadow-lg"
                                : "text-stone-400 hover:text-white"
                                }`}
                        >
                            <Icon size={20} className={isActive ? "scale-110" : ""} />
                            <span className="text-[10px] font-brand font-bold uppercase tracking-wider">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
