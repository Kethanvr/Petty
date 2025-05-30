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
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no",
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

// Add Script to prevent zoom on mobile
function PreventZoomScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Prevent zoom on mobile devices
            function preventZoom() {
              document.addEventListener('touchmove', function(e) {
                if (e.scale !== 1) {
                  e.preventDefault();
                }
              }, { passive: false });
              
              document.addEventListener('gesturestart', function(e) {
                e.preventDefault();
              });
              
              document.addEventListener('gesturechange', function(e) {
                e.preventDefault();
              });
              
              document.addEventListener('gestureend', function(e) {
                e.preventDefault();
              });
              
              // Prevent double-tap zoom
              let lastTouchEnd = 0;
              document.addEventListener('touchend', function(e) {
                const now = (new Date()).getTime();
                if (now - lastTouchEnd <= 300) {
                  e.preventDefault();
                }
                lastTouchEnd = now;
              }, false);
              
              // Prevent zoom on input focus
              document.addEventListener('focusin', function(e) {
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
                  e.target.style.fontSize = '16px';
                }
              });
            }
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', preventZoom);
            } else {
              preventZoom();
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
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-touch-fullscreen" content="yes" />
          <FixHydrationScript />
          <PreventZoomScript />
        </head>
        <body
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
