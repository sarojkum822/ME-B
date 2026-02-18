"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroRefined from "@/components/HeroRefined";
import TrustStrip from "@/components/TrustStrip";
import ShopQuick from "@/components/ShopQuick";
import HealthBar from "@/components/HealthBar";
import HeritageStory from "@/components/HeritageStory";
import UGCSection from "@/components/UGCSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[var(--background)]">
      <Navbar />

      {/* 1. HERO */}
      <HeroRefined />

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* ── divider: white → cream ── */}
      <SectionDivider variant="light" />

      {/* 3. BESTSELLER GRID */}
      <ShopQuick />

      {/* ── divider: cream → dark ── */}
      <SectionDivider variant="accent" />

      {/* 4. HEALTH BAR */}
      <HealthBar />

      {/* ── divider: dark → white ── */}
      <SectionDivider variant="light" />

      {/* 5. HERITAGE STORY */}
      <HeritageStory />

      {/* ── divider: white → cream ── */}
      <SectionDivider variant="light" />

      {/* 6. UGC */}
      <UGCSection />

      {/* ── divider: cream → white ── */}
      <SectionDivider variant="light" />

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* ── divider: white → cream ── */}
      <SectionDivider variant="light" />

      {/* 8. FINAL CTA */}
      <section className="relative py-16 md:py-20 text-center px-6 md:px-12 lg:px-20 overflow-hidden bg-[hsl(var(--background))]">
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-brand font-black mb-4 uppercase tracking-tight text-[var(--text-primary)]">
            Ready to Get<br />
            <span className="text-[var(--accent-warm)]">Hooked?</span>
          </h2>
          <p className="text-base md:text-lg mb-8 font-medium text-[var(--text-secondary)]">
            10% off your first order. New limited flavors drop monthly.
          </p>
          <form className="max-w-sm mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email..."
              className="flex-1 px-5 py-4 rounded-xl outline-none font-medium text-sm transition-colors bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
            />
            <button className="px-8 py-4 font-brand font-black rounded-xl text-sm uppercase tracking-widest transition-transform hover:scale-105 bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)]">
              Join
            </button>
          </form>
        </div>
      </section>

      {/* 9. FOOTER */}
      <Footer />
    </main>
  );
}
