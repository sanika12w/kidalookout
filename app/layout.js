import { Geist, Geist_Mono, Inter } from "next/font/google";
import LenisProvider from "@/lib/LenisProvider";
import FloatingSocials from "@/components/FloatingSocials";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flighty — The Ultimate Flight Tracker & Travel App",
  description: "Experience premium, pilot-grade flight tracking. Predict delays, share statuses with friends, explore airport intelligence, and animate your personal flight history.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-flighty-bg text-black selection:bg-flighty-green/20 selection:text-black">
        <LenisProvider>
          {children}
          <FloatingSocials />
        </LenisProvider>
      </body>
    </html>
  );
}

