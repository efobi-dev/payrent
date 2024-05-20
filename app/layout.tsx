import type {Metadata} from "next";
import {Analytics} from "@vercel/analytics/react";
import {ThemeProvider} from "@/lib/providers";
import {Raleway as FontSans} from "next/font/google";
import {cn} from "@/lib/utils";
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
  description: "",
  metadataBase: new URL("https://www.payrentng.com"),
  openGraph: {
    images: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
