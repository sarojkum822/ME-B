import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf } from "lucide-react";

export default function SustainabilityPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-mint-teal/10 rounded-full flex items-center justify-center mx-auto mb-8 text-mint-teal">
                        <Leaf size={40} />
                    </div>
                    <span className="text-mint-teal font-brand font-black text-sm uppercase tracking-[0.3em] mb-4 block">Impact</span>
                    <h1 className="text-5xl md:text-7xl font-brand font-black uppercase tracking-tighter mb-12 text-foreground">
                        Rooted In <span className="text-mint-teal">Purpose</span>
                    </h1>
                    <div className="bg-card-bg rounded-[2rem] p-12 border border-card-border shadow-xl text-left space-y-8">
                        <div>
                            <h2 className="text-2xl font-brand font-black text-foreground uppercase mb-4">Ethical Sourcing</h2>
                            <p className="text-stone-500 font-medium leading-relaxed">
                                We work directly with Makhana farmers in Mithila, ensuring fair wages and supporting sustainable harvesting practices that preserve the local ecosystem.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-brand font-black text-foreground uppercase mb-4">Eco-Friendly Packaging</h2>
                            <p className="text-stone-500 font-medium leading-relaxed">
                                Our goal is to move towards 100% recyclable packaging by the end of 2026. We're constantly innovating to reduce our plastic footprint.
                            </p>
                        </div>
                        <div className="pt-8 border-t border-card-border text-center">
                            <p className="text-stone-400 font-bold uppercase tracking-widest text-sm">Every pouch counts towards a greener Mithila.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
