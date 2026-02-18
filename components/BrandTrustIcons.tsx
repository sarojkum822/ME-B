"use client";

import React from "react";

export const ShippingIcon = ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M3 11H16V18H3V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M16 11H21L18 14H16V11Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="14" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 11V8C10 6.89543 10.8954 6 12 6H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    </div>
);

export const AuthenticIcon = ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M12 3L4 6V11C4 16.5 12 21 12 21C12 21 20 16.5 20 11V6L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 11L11 13L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 3L12 21" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
    </div>
);

export const ReturnIcon = ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 20L9 17M12 20L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
        </svg>
    </div>
);
