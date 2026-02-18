"use client";

import { ShieldCheck, Flame, Leaf, Award } from "lucide-react";

export default function BrandTrustSection() {
    const values = [
        { icon: <ShieldCheck size={20} />, label: "Made in Bihar" },
        { icon: <Flame size={20} />, label: "Roasted, not fried" },
        { icon: <Leaf size={20} />, label: "No palm oil" },
        { icon: <Award size={20} />, label: "Clean ingredients" },
    ];

    return (
        <div className="pt-8 border-t border-[var(--chip-border)]">
            <h4 className="text-[10px] font-brand font-black text-[var(--text-muted)] uppercase tracking-[0.2em] mb-6 text-center">
                The Mithila Essence Promise
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {values.map((v, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-lava-orange/5 flex items-center justify-center text-lava-orange">
                            {v.icon}
                        </div>
                        <span className="text-xs font-brand font-bold text-[var(--text-secondary)]">
                            {v.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
