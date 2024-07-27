import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/lib/providers";
import localFont from "next/font/local";
import { ScrollToTop } from "@/components/ScrollToTop";
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
    images: "/opengraph.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
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
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
