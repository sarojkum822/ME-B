"use client";

import { MessageCircle, HelpCircle, Phone, FileText, ChevronRight, Search } from "lucide-react";

export default function SupportSection() {
    const faqs = [
        "How do I track my order?",
        "What is the shelf life of Makhana?",
        "Do you offer international shipping?",
        "Can I change flavor after ordering?"
    ];

    return (
        <div className="space-y-8 animate-reveal">
            <div>
                <h2 className="text-2xl font-brand font-black text-[var(--text-primary)] mb-2">Support & Help</h2>
                <p className="text-sm text-[var(--text-muted)] font-medium">We're here to help you snack better.</p>
            </div>

            {/* Quick Support Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-mint-teal/10 border border-mint-teal/20 p-6 rounded-3xl flex items-center gap-4 hover:scale-[1.02] transition-transform"
                >
                    <div className="w-14 h-14 bg-mint-teal text-white rounded-2xl flex items-center justify-center shadow-lg shadow-mint-teal/20">
                        <MessageCircle size={28} />
                    </div>
                    <div>
                        <h3 className="text-lg font-brand font-bold text-[var(--text-primary)]">WhatsApp Support</h3>
                        <p className="text-xs text-[var(--text-muted)] font-medium">Direct chat with our team</p>
                    </div>
                </a>
                <button className="bg-lava-orange/10 border border-lava-orange/20 p-6 rounded-3xl flex items-center gap-4 text-left hover:scale-[1.02] transition-transform">
                    <div className="w-14 h-14 bg-lava-orange text-white rounded-2xl flex items-center justify-center shadow-lg shadow-lava-orange/20">
                        <FileText size={28} />
                    </div>
                    <div>
                        <h3 className="text-lg font-brand font-bold text-[var(--text-primary)]">Raise a Ticket</h3>
                        <p className="text-xs text-[var(--text-muted)] font-medium">For order related issues</p>
                    </div>
                </button>
            </div>

            {/* FAQ Search */}
            <div className="space-y-4 pt-4">
                <h3 className="text-lg font-brand font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <HelpCircle size={20} /> Frequently Asked Questions
                </h3>
                <div className="bg-[var(--chip-bg)] border border-[var(--chip-border)] rounded-2xl overflow-hidden divide-y divide-[var(--chip-border)]">
                    {faqs.map((q, i) => (
                        <button key={i} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/50 dark:hover:bg-white/5 transition-colors group">
                            <span className="text-sm font-medium text-[var(--text-secondary)]">{q}</span>
                            <ChevronRight size={16} className="text-[var(--text-muted)] group-hover:translate-x-1 transition-transform" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Other contact */}
            <div className="text-center pt-8">
                <p className="text-xs text-[var(--text-muted)] font-medium mb-4">Still need help? Reach out at</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a href="mailto:support@mithilaessence.com" className="text-sm font-brand font-bold text-[var(--text-primary)] hover:text-lava-orange transition-colors">
                        support@mithilaessence.com
                    </a>
                    <div className="w-1 h-1 bg-[var(--chip-border)] rounded-full hidden md:block" />
                    <a href="tel:+919876543210" className="text-sm font-brand font-bold text-[var(--text-primary)] hover:text-lava-orange transition-colors">
                        +91 98765 43210
                    </a>
                </div>
            </div>
        </div>
    );
}
