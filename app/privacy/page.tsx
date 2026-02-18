import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <span className="text-lava-orange font-brand font-black text-sm uppercase tracking-[0.3em] mb-4 block">Legal</span>
                    <h1 className="text-5xl md:text-7xl font-brand font-black uppercase tracking-tighter mb-12 text-foreground">
                        Privacy <span className="text-lava-orange">Policy</span>
                    </h1>
                    <div className="prose prose-stone dark:prose-invert max-w-none space-y-8 text-stone-500 font-medium">
                        <p className="text-xl">Your privacy is important to us. It is Mithila Essence's policy to respect your privacy regarding any information we may collect from you across our website.</p>

                        <div>
                            <h2 className="text-2xl font-brand font-black text-foreground uppercase mb-4">1. Information We Collect</h2>
                            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-brand font-black text-foreground uppercase mb-4">2. Use of Information</h2>
                            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-brand font-black text-foreground uppercase mb-4">3. Cookies</h2>
                            <p>We use cookies to help improve your experience of our website. This includes cookies that are necessary for the operation of the site, as well as those used for analytical purposes.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
