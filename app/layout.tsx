import type { Metadata } from "next";
import { Outfit, Fredoka, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import MobileBottomMenu from "@/components/MobileBottomMenu";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mithila Essence | The Fun Way to Snack",
  description: "Vibrant, healthy, and deliciously crunchy Makhana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${fredoka.variable} ${inter.variable} antialiased font-sans pb-32 lg:pb-0`}
      >
        <Providers>
          {children}
          <MobileBottomMenu />
        </Providers>
      </body>
    </html>
  );
}

