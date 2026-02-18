import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag } from "lucide-react";

export default function OrdersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-lava-orange/10 rounded-full flex items-center justify-center mx-auto mb-8 text-lava-orange">
                        <ShoppingBag size={40} />
                    </div>
                    <span className="text-lava-orange font-brand font-black text-sm uppercase tracking-[0.3em] mb-4 block">Accounts</span>
                    <h1 className="text-5xl md:text-7xl font-brand font-black uppercase tracking-tighter mb-8 text-foreground">
                        My <span className="text-strawberry-red">Orders</span>
                    </h1>
                    <div className="bg-card-bg rounded-[2rem] p-12 border border-card-border shadow-xl">
                        <p className="text-stone-500 font-medium text-lg mb-8">
                            You haven't placed any orders yet. Ready to experience the crunch?
                        </p>
                        <a
                            href="/shop"
                            className="inline-block px-10 py-4 bg-lava-orange text-white font-brand font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest"
                        >
                            Start Shopping
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
