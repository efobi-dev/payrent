import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/NavBar";
import { ThemeProvider } from "@/lib/providers";
import { Manrope as FontSans } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { AppProps } from "next/app";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | PayRent",
    default: "PayRent",
  },
  description: "One Stop Real Estate Solution Provider in Nigeria",
  metadataBase: new URL("https://www.payrentng.com"),
  openGraph: {
    images: "/og-image.jpg",
  },
};

export default function RootLayout({
  children,
  pageProps,
}: Readonly<{ children: React.ReactNode; pageProps: AppProps }>) {
  return (
    <ClerkProvider {...pageProps}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "flex min-h-[100dvh] flex-col bg-background",
            fontSans.variable
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
