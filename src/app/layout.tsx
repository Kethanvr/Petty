import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AIProvider } from "@/context/AIContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingAI from "@/components/FloatingAI";
import { ClerkProvider } from "@clerk/nextjs";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Petty - AI Powered Pet Food Website | Premium Nutrition & Smart Care",
  description:
    "Discover Petty - the AI-powered pet food platform offering premium nutrition at affordable prices. Get personalized pet care advice, smart product recommendations, and expert guidance with our intelligent Petty AI assistant.",
  icons: {
    icon: "https://t4.ftcdn.net/jpg/05/65/62/93/360_F_565629355_3MAzwiVK6CtXTgzW3YSjHqMWfd8R3OtG.jpg",
  },
};

// Add Script to fix hydration issues with generated IDs
function FixHydrationScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Remove fdprocessedid attributes before hydration
            function removeFdProcessedIds() {
              document.querySelectorAll('[fdprocessedid]').forEach(el => {
                el.removeAttribute('fdprocessedid');
              });
            }
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', removeFdProcessedIds);
            } else {
              removeFdProcessedIds();
            }
          })();
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <FixHydrationScript />
        </head>        <body
          className={`${geist.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
          suppressHydrationWarning={true}
        >
          <AIProvider>
            <CartProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <FloatingAI />
            </CartProvider>
          </AIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
