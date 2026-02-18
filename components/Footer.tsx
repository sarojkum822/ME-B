"use client";

import Link from "next/link";
import { Instagram, Twitter, MessageCircle, Linkedin } from "lucide-react";

const SOCIAL_LINKS = [
    { Icon: Instagram, href: "https://instagram.com/mithilaessence", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com/mithilaessence", label: "Twitter" },
    { Icon: MessageCircle, href: "https://wa.me/919876543210", label: "WhatsApp" },
    { Icon: Linkedin, href: "https://linkedin.com/company/mithilaessence", label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className="bg-[#1E1E1E] text-white pt-10 md:pt-16 pb-6 md:pb-12 px-6 md:px-12 lg:px-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-12 gap-x-8 mb-10 md:mb-16">
                {/* Brand Column */}
                <div className="col-span-2 md:col-span-2 space-y-6 text-left flex flex-col items-start px-2 md:px-0">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl md:text-3xl font-serif font-black tracking-tight uppercase leading-none">
                            Mithila <span className="text-[var(--primary)] italic font-medium">Essence</span>
                        </span>
                    </div>
                    <p className="text-[var(--muted-foreground)] font-sans font-light leading-relaxed text-xs md:text-sm max-w-sm italic opacity-80">
                        Born from the sacred wetlands of Mithila, we're bringing the age-old goodness of
                        Makhana to the modern world with a bold, neo-artisanal attitude.
                    </p>

                    <div className="flex gap-6 pt-2">
                        {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-all duration-300 hover:scale-110"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-span-1 text-left">
                    <h4 className="text-xs md:text-sm font-serif font-black mb-6 text-[var(--primary)] uppercase tracking-widest border-b border-[var(--primary)]/10 pb-2 inline-block">Shop</h4>
                    <ul className="space-y-3.5 text-[var(--muted-foreground)] font-sans font-medium text-xs md:text-sm">
                        <li><Link href="/shop" className="hover:text-[var(--cream)] transition-colors">All Flavors</Link></li>
                        <li><Link href="/shop?filter=sweet" className="hover:text-[var(--cream)] transition-colors">Gift Bundles</Link></li>
                        <li><Link href="/shop" className="hover:text-[var(--cream)] transition-colors">Subscription</Link></li>
                        <li><Link href="/account" className="text-[var(--primary)] hover:text-[var(--cream)] transition-colors flex items-center gap-1.5 font-bold italic">Crunch Rewards ✨</Link></li>
                        <li><Link href="/contact" className="hover:text-[var(--cream)] transition-colors">Wholesale</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div className="col-span-1 text-left">
                    <h4 className="text-xs md:text-sm font-serif font-black mb-6 text-[var(--primary)] uppercase tracking-widest border-b border-[var(--primary)]/10 pb-2 inline-block">Company</h4>
                    <ul className="space-y-3.5 text-[var(--muted-foreground)] font-sans font-medium text-xs md:text-sm">
                        <li><Link href="/our-story" className="hover:text-[var(--cream)] transition-colors">Our Story</Link></li>
                        <li><Link href="/sustainability" className="hover:text-[var(--cream)] transition-colors">Sustainability</Link></li>
                        <li><Link href="/contact" className="hover:text-[var(--cream)] transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-[var(--cream)] transition-colors">Newsroom</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-[var(--cream)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[var(--muted-foreground)] text-[10px] md:text-xs font-bold uppercase tracking-widest text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8">
                    <p className="opacity-70">© 2026 Mithila Essence.</p>
                    <div className="flex gap-6 justify-center">
                        <Link href="/privacy" className="hover:text-[var(--cream)] transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-[var(--cream)] transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-[var(--cream)] transition-colors">Cookies</Link>
                    </div>
                </div>

                {/* Payment Icons - Styled more like the brand */}
                <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <div className="px-2 py-1 bg-white/5 rounded-lg border border-white/10 font-black text-[9px] text-white tracking-tighter">VISA</div>
                    <div className="px-2 py-1 bg-white/5 rounded-lg border border-white/10 font-black text-[9px] text-white tracking-tighter">MC</div>
                    <div className="px-2 py-1 bg-white/5 rounded-lg border border-white/10 font-black text-[9px] text-white tracking-tighter">UPI</div>
                    <div className="px-2 py-1 bg-white/5 rounded-lg border border-white/10 font-black text-[9px] text-white tracking-tighter">GPAY</div>
                </div>
            </div>

            {/* Safe Area Spacer for Bottom Menu on Mobile */}
            <div className="h-12 lg:hidden" />
        </footer>
    );
}
