import type { Metadata } from "next";
import { Inter, Sora, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaturnSide AI — Agentic AI Workflows",
  description:
    "SaturnSide AI deploys custom agentic systems built around your business — live in 48 hours, running without supervision.",
  metadataBase: new URL("https://saturnside.com"),
  openGraph: {
    title: "SaturnSide AI — Agentic AI Workflows",
    description:
      "SaturnSide AI deploys custom agentic systems built around your business — live in 48 hours, running without supervision.",
    url: "https://saturnside.com",
    siteName: "SaturnSide AI",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
