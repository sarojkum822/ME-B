"use client";

import React from "react";

const MakhanaAtom = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-lava-orange/5 blur-[120px] rounded-full scale-75 animate-pulse" />

            {/* The 3D Makhana Seed */}
            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 animate-float">
                {/* Organic Shape with Layered Gradients for 3D depth */}
                <div
                    className="absolute inset-0 rounded-[45%_55%_65%_35%/55%_45%_55%_45%] shadow-[inset_-10px_-10px_40px_rgba(0,0,0,0.1),inset_20px_20px_40px_rgba(255,255,255,0.8),0_20px_40px_rgba(0,0,0,0.05)] border-b border-r border-stone-100/20"
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, #FFFFFF, #FDFCF8 60%, #F5F1E9 100%)',
                    }}
                >
                    {/* Subtle Texture/Bumps */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-stone-200/20 blur-sm" />
                    <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-stone-200/10 blur-md" />
                </div>
            </div>

            {/* Atomic Orbital Rings (SVG) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                    <defs>
                        <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#F6B24A" />
                            <stop offset="100%" stopColor="transparent" />
                        </radialGradient>
                    </defs>

                    {/* Ring 1 - Vertical-ish */}
                    <ellipse
                        cx="200" cy="200" rx="140" ry="60"
                        fill="none" stroke="#F6B24A" strokeWidth="1"
                        strokeOpacity="0.3"
                        className="animate-[spin_8s_linear_infinite]"
                        style={{ transformOrigin: 'center', transform: 'rotate(45deg)' }}
                    />

                    {/* Ring 2 - Horizontal-ish */}
                    <ellipse
                        cx="200" cy="200" rx="160" ry="70"
                        fill="none" stroke="#F6B24A" strokeWidth="1"
                        strokeOpacity="0.2"
                        className="animate-[spin_12s_linear_infinite_reverse]"
                        style={{ transformOrigin: 'center', transform: 'rotate(-30deg)' }}
                    />

                    {/* Ring 3 - Tilted */}
                    <ellipse
                        cx="200" cy="200" rx="150" ry="50"
                        fill="none" stroke="#F6B24A" strokeWidth="1"
                        strokeOpacity="0.25"
                        className="animate-[spin_10s_linear_infinite]"
                        style={{ transformOrigin: 'center', transform: 'rotate(110deg)' }}
                    />

                    {/* Glowing Particles moving along orbits (simplified animation) */}
                    <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: 'center', transform: 'rotate(45deg)' }}>
                        <circle cx="340" cy="200" r="4" fill="#F6B24A" className="animate-pulse shadow-[0_0_10px_#F6B24A]" />
                    </g>
                    <g className="animate-[spin_12s_linear_infinite_reverse]" style={{ transformOrigin: 'center', transform: 'rotate(-30deg)' }}>
                        <circle cx="200" cy="270" r="3" fill="#F6B24A" className="animate-pulse shadow-[0_0_10px_#F6B24A]" />
                    </g>
                    <g className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: 'center', transform: 'rotate(110deg)' }}>
                        <circle cx="350" cy="200" r="5" fill="#F6B24A" className="animate-pulse shadow-[0_0_15px_#F6B24A]" />
                    </g>
                </svg>
            </div>

            {/* Floating Dust Particles */}
            <div className="absolute inset-0 opacity-30">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-sun-yellow rounded-full animate-float-spin"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 1.5}s`,
                            opacity: 0.2 + Math.random() * 0.5
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default MakhanaAtom;
