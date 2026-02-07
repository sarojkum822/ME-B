import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlavorSections from "@/components/FlavorSections";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CrunchStats from "@/components/CrunchStats";
import HeritageStory from "@/components/HeritageStory";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-snack-white dark:bg-stone-950">
      {/* Global Artisanal Particles - Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-spin"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              transform: `scale(${0.3 + Math.random() * 0.7})`
            }}
          >
            <span className="text-2xl">🍿</span>
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Brands / Icons Bar */}
        <section className="bg-white dark:bg-stone-900 py-12 overflow-hidden border-y-4 border-stone-900 dark:border-stone-700">
          <div className="flex animate-marquee whitespace-nowrap gap-12 text-stone-900 dark:text-white font-brand font-black text-2xl uppercase tracking-widest">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex gap-12">
                <span>Healthy</span>
                <span className="text-lava-orange">★</span>
                <span>High Protein</span>
                <span className="text-mint-teal">★</span>
                <span>Gluten Free</span>
                <span className="text-berry-pink">★</span>
                <span>100% Vegan</span>
                <span className="text-sun-yellow">★</span>
              </div>
            ))}
          </div>
        </section>

        <CrunchStats />
        <HeritageStory />
        <FlavorSections />
        <Testimonials />
        <FAQ />

        {/* Final CTA before Footer */}
        <section className="bg-stone-900 text-white py-24 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-brand font-black mb-8">
            Ready to join the <span className="text-mint-teal">Mithila</span> revolution?
          </h2>
          <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto font-medium">
            Register now for 10% off your first order and exclusive access to new limited-run flavors.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-2">
            <input
              type="email"
              placeholder="Snack enthusiast email..."
              className="flex-1 px-6 py-4 bg-stone-800 rounded-2xl outline-none border-2 border-stone-700 focus:border-sun-yellow transition-colors font-medium text-white"
            />
            <button className="px-8 py-4 bg-sun-yellow text-stone-900 font-brand font-black rounded-2xl hover:scale-105 transition-transform whitespace-nowrap">
              Sign Me Up!
            </button>
          </form>
        </section>

        <Footer />
      </div>
    </main>
  );
}
