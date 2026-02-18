import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gift } from "lucide-react";

export default function RewardsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-sun-yellow/10 rounded-full flex items-center justify-center mx-auto mb-8 text-sun-yellow">
                        <Gift size={40} />
                    </div>
                    <span className="text-sun-yellow font-brand font-black text-sm uppercase tracking-[0.3em] mb-4 block">Loyalty</span>
                    <h1 className="text-5xl md:text-7xl font-brand font-black uppercase tracking-tighter mb-8 text-foreground">
                        Mithila <span className="text-sun-yellow">Rewards</span>
                    </h1>
                    <div className="bg-card-bg rounded-[2rem] p-12 border border-card-border shadow-xl">
                        <p className="text-stone-500 font-medium text-lg mb-8">
                            Your rewards journey starts with your first bite. Sign up to start earning points for every crunch!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="p-6 bg-stone-50 dark:bg-stone-900 rounded-2xl border border-card-border">
                                <h3 className="font-brand font-black text-xl mb-2 text-foreground">0</h3>
                                <p className="text-stone-400 text-xs uppercase tracking-widest">Points Balance</p>
                            </div>
                            <div className="p-6 bg-stone-50 dark:bg-stone-900 rounded-2xl border border-card-border">
                                <h3 className="font-brand font-black text-xl mb-2 text-foreground">Rookie</h3>
                                <p className="text-stone-400 text-xs uppercase tracking-widest">Current Tier</p>
                            </div>
                            <div className="p-6 bg-stone-50 dark:bg-stone-900 rounded-2xl border border-card-border">
                                <h3 className="font-brand font-black text-xl mb-2 text-foreground">10%</h3>
                                <p className="text-stone-400 text-xs uppercase tracking-widest">Next Reward</p>
                            </div>
                        </div>
                        <a
                            href="/signup"
                            className="inline-block px-10 py-4 bg-sun-yellow text-stone-900 font-brand font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest"
                        >
                            Join the Club
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
