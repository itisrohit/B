import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen, Patrick_Hand } from "next/font/google";
import { SmoothScrollProvider } from "@/components/scrapbook/SmoothScrollProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  subsets: ["latin"],
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memory Lane | Our Digital Scrapbook",
  description: "An animated, retro-inspired interactive scrapbook space capturing memories, shared notes, and future bucket lists.",
  keywords: ["digital scrapbook", "romantic website", "y2k aesthetic", "kawaii retro", "interactive memory book"],
  authors: [{ name: "Antigravity Dev" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${silkscreen.variable} ${patrickHand.variable} bg-bg-primary text-text-primary antialiased selection:bg-pink-200 selection:text-pink-900`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
