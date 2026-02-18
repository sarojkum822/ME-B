"use client";

interface SectionDividerProps {
    variant?: "light" | "dark" | "accent";
    className?: string;
}

export default function SectionDivider({ variant = "light", className = "" }: SectionDividerProps) {
    const gradients: Record<string, string> = {
        light:
            "from-transparent via-stone-300/40 to-transparent",
        dark:
            "from-transparent via-white/10 to-transparent",
        accent:
            "from-transparent via-[hsl(var(--accent)_/_0.2)] to-transparent",
    };

    return (
        <div className={`w-full flex items-center justify-center py-0 ${className}`}>
            <div
                className={`w-[85%] max-w-5xl h-px bg-gradient-to-r ${gradients[variant]}`}
            />
        </div>
    );
}
