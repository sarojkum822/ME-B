import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Ticket } from "lucide-react";

export default function GiftCardsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-mint-teal/10 rounded-full flex items-center justify-center mx-auto mb-8 text-mint-teal">
                        <Ticket size={40} />
                    </div>
                    <span className="text-mint-teal font-brand font-black text-sm uppercase tracking-[0.3em] mb-4 block">Gifting</span>
                    <h1 className="text-5xl md:text-7xl font-brand font-black uppercase tracking-tighter mb-8 text-foreground">
                        Gift <span className="text-mint-teal">The Crunch</span>
                    </h1>
                    <div className="bg-card-bg rounded-[2rem] p-12 border border-card-border shadow-xl">
                        <p className="text-stone-500 font-medium text-lg mb-8">
                            Share the Mithila experience with your friends and family. Electronic gift cards coming soon!
                        </p>
                        <div className="max-w-sm mx-auto p-8 border-2 border-dashed border-mint-teal/30 rounded-3xl mb-8">
                            <div className="aspect-[1.6/1] bg-gradient-to-br from-mint-teal to-sky-blue rounded-2xl p-6 flex flex-col justify-between text-left">
                                <div className="text-stone-900">
                                    <p className="font-brand font-black text-xl uppercase italic">Mithila Essence</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">The Premium Snack Card</p>
                                </div>
                                <div className="text-stone-900 font-brand font-black text-3xl">₹1,000</div>
                            </div>
                        </div>
                        <a
                            href="/shop"
                            className="inline-block px-10 py-4 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-brand font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest"
                        >
                            Back to Flavors
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
