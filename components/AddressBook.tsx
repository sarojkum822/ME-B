"use client";

import { MapPin, Plus, Home, Briefcase, Gift, Edit2, Trash2, CheckCircle2 } from "lucide-react";

export default function AddressBook() {
    const addresses = [
        {
            id: 1,
            label: "Home",
            icon: <Home size={18} />,
            name: "Saroj Kumar",
            address: "123 Mithila Towers, 4th Floor",
            city: "Patna",
            state: "Bihar",
            pincode: "800001",
            phone: "+91 98765 43210",
            isDefault: true
        },
        {
            id: 2,
            label: "Office",
            icon: <Briefcase size={18} />,
            name: "Saroj Kumar",
            address: "Tech Hub, Sector 62",
            city: "Noida",
            state: "Uttar Pradesh",
            pincode: "201301",
            phone: "+91 98765 43210",
            isDefault: false
        }
    ];

    return (
        <div className="space-y-8 animate-reveal">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-brand font-black text-[var(--text-primary)]">Saved Addresses</h2>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-lava-orange text-white font-brand font-bold rounded-xl text-sm hover:scale-105 transition-transform">
                    <Plus size={18} /> Add New Address
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((addr) => (
                    <div
                        key={addr.id}
                        className={`bg-[var(--section-white)] dark:bg-[var(--chip-bg)] border-2 rounded-3xl p-6 md:p-8 relative ${addr.isDefault ? "border-lava-orange" : "border-[var(--chip-border)]"
                            }`}
                    >
                        {addr.isDefault && (
                            <div className="absolute top-6 right-6 flex items-center gap-1.5 text-lava-orange">
                                <CheckCircle2 size={16} />
                                <span className="text-[10px] font-brand font-black uppercase tracking-wider">Default</span>
                            </div>
                        )}

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[var(--chip-bg)] rounded-xl flex items-center justify-center text-[var(--text-primary)]">
                                {addr.icon}
                            </div>
                            <h3 className="text-lg font-brand font-bold text-[var(--text-primary)]">{addr.label}</h3>
                        </div>

                        <div className="space-y-1 mb-8">
                            <p className="font-brand font-bold text-[var(--text-primary)]">{addr.name}</p>
                            <p className="text-sm text-[var(--text-muted)] font-medium leading-relaxed">
                                {addr.address}, {addr.city}, {addr.state} - {addr.pincode}
                            </p>
                            <p className="text-sm text-[var(--text-muted)] font-medium">{addr.phone}</p>
                        </div>

                        {/* PIN Serviceability Alert (Mock) */}
                        <div className="bg-mint-teal/5 border border-mint-teal/20 rounded-xl px-4 py-2 mb-8 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-mint-teal animate-pulse" />
                            <span className="text-[10px] font-brand font-bold text-mint-teal uppercase tracking-widest">Serviceable at {addr.pincode}</span>
                        </div>

                        <div className="flex items-center gap-4 border-t border-[var(--chip-border)] pt-6">
                            <button className="flex items-center gap-2 text-xs font-brand font-bold text-[var(--text-primary)] hover:text-lava-orange transition-colors">
                                <Edit2 size={14} /> Edit
                            </button>
                            <button className="flex items-center gap-2 text-xs font-brand font-bold text-red-500 hover:text-red-600 transition-colors">
                                <Trash2 size={14} /> Delete
                            </button>
                            {!addr.isDefault && (
                                <button className="ml-auto text-[10px] font-brand font-black uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                                    Set as Default
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {/* Placeholder for Add New */}
                <button className="border-2 border-dashed border-[var(--chip-border)] rounded-3xl p-8 flex flex-col items-center justify-center gap-4 text-[var(--text-muted)] hover:border-lava-orange/50 hover:text-lava-orange transition-all group min-h-[300px]">
                    <div className="w-14 h-14 bg-[var(--chip-bg)] rounded-full flex items-center justify-center group-hover:bg-lava-orange/10 transition-colors">
                        <MapPin size={24} />
                    </div>
                    <div className="text-center">
                        <p className="font-brand font-bold text-sm">Add another address</p>
                        <p className="text-xs">Office, Gifting, or Home</p>
                    </div>
                </button>
            </div>
        </div>
    );
}
