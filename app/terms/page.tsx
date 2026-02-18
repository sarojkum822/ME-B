import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <span className="text-sun-yellow font-brand font-black text-sm uppercase tracking-[0.3em] mb-4 block">Legal</span>
                    <h1 className="text-5xl md:text-7xl font-brand font-black uppercase tracking-tighter mb-12 text-foreground">
                        Terms of <span className="text-sun-yellow">Service</span>
                    </h1>
                    <div className="prose prose-stone dark:prose-invert max-w-none space-y-8 text-stone-500 font-medium">
                        <p className="text-xl">By accessing the website at Mithila Essence, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

                        <div>
                            <h2 className="text-2xl font-brand font-black text-foreground uppercase mb-4">1. Use License</h2>
                            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Mithila Essence's website for personal, non-commercial transitory viewing only.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-brand font-black text-foreground uppercase mb-4">2. Disclaimer</h2>
                            <p>The materials on Mithila Essence's website are provided on an 'as is' basis. Mithila Essence makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
