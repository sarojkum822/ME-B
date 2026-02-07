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
        <footer className="bg-stone-900 text-white pt-24 pb-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🍿</span>
                        <span className="text-3xl font-brand font-black tracking-tight">
                            Mithila <span className="text-sun-yellow">Essence</span>
                        </span>
                    </div>
                    <p className="text-stone-400 font-medium leading-relaxed">
                        Smarter snacking, reimagined. We're bringing the age-old goodness of
                        Makhana to the modern world with a bold, new attitude.
                    </p>
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-sun-yellow hover:text-stone-900 transition-all duration-300"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-brand font-bold mb-8 text-sun-yellow">Shop</h4>
                    <ul className="space-y-4 text-stone-400 font-medium">
                        <li><Link href="/shop" className="hover:text-white transition-colors">All Flavors</Link></li>
                        <li><Link href="/shop?filter=sweet" className="hover:text-white transition-colors">Gift Bundles</Link></li>
                        <li><Link href="/shop" className="hover:text-white transition-colors">Subscription</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Wholesale</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-xl font-brand font-bold mb-8 text-sun-yellow">Company</h4>
                    <ul className="space-y-4 text-stone-400 font-medium">
                        <li><Link href="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link href="/our-story" className="hover:text-white transition-colors">Sustainability</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Newsroom</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-xl font-brand font-bold mb-8 text-sun-yellow">Stay Crunchy</h4>
                    <p className="text-stone-400 mb-6 font-medium">Get the latest flavor drops & snack hacks.</p>
                    <form
                        className="relative"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
                            if (email) {
                                alert(`Thanks for subscribing with ${email}! 🎉`);
                                form.reset();
                            }
                        }}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="w-full bg-stone-800 border-2 border-stone-700 rounded-xl px-4 py-3 outline-none focus:border-sun-yellow transition-colors font-medium"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-2 bg-sun-yellow text-stone-900 px-4 py-1 rounded-lg font-bold hover:scale-105 transition-transform text-sm"
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 text-sm font-medium">
                <p>© 2026 Mithila Essence. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="/our-story" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/our-story" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="/our-story" className="hover:text-white transition-colors">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}

