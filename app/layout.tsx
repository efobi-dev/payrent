import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/NavBar";
import { ThemeProvider } from "@/lib/providers";
import localFont from "next/font/local";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import "./globals.css";

const manrope = localFont({
  src: "./assets/manrope.ttf",
});

export const metadata: Metadata = {
  title: {
    template: "%s | PayRent",
    default: "PayRent",
  },
  description: "One Stop Real Estate Solution Provider in Nigeria",
  metadataBase: new URL("https://www.payrentng.com"),
  openGraph: {
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "flex min-h-[100dvh] flex-col bg-background",
            manrope.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Analytics />
            <Navbar />
            {children}
            <ScrollToTop />
            <Toaster />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
