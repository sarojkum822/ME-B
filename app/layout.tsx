import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import MobileBottomMenu from "@/components/MobileBottomMenu";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mithila Essence | The Fun Way to Snack",
  description: "Vibrant, healthy, and deliciously crunchy Makhana snacks.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mithila Essence",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6B35",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mithila Essence" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${dmSans.variable} ${playfair.variable} ${inter.variable} antialiased font-sans pb-32 lg:pb-0`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
          <MobileBottomMenu />
        </Providers>
      </body>
    </html>
  );
}
