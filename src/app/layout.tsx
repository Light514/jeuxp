import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CookieBanner, EasterEggsProvider } from "@/components/shared";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "JeuXP - Centre de défis cyberpunk à Montréal",
    template: "%s | JeuXP",
  },
  description:
    "Découvre JeuXP, le premier centre de défis cyberpunk à Montréal. 6 salles, 3 minutes par défi, système XP. Une expérience immersive unique.",
  keywords: [
    "JeuXP",
    "défis",
    "cyberpunk",
    "Montréal",
    "escape game",
    "jeux",
    "expérience immersive",
    "Carrefour Angrignon",
  ],
  authors: [{ name: "JeuXP" }],
  openGraph: {
    type: "website",
    locale: "fr_CA",
    alternateLocale: "en_CA",
    siteName: "JeuXP",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-screen">
        <EasterEggsProvider>
          {children}
        </EasterEggsProvider>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
