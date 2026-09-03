import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroller from "@/components/layout/SmoothScroller";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fadil Ahmed | Data Portfolio",
  description: "Data professional portfolio showcasing pipelines, models, and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Fixed UI elements outside of any scroll containers to guarantee viewport anchoring */}
        <div className="noise-overlay z-10"></div>
        <CustomCursor />
        <Navigation />
        
        {/* Scrollable content wrapper */}
        <SmoothScroller>
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
