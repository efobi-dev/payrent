import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import Packages from "@/components/Packages";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { Products } from "@/components/ProductSection";
import { FAQ } from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayRent NG",
  description:
    "Welcome to PayRent, your one stop  property management service.",
};

export default function Page() {
  return (
    <main className="flex-1">
      <HeroSection />
      <Packages />
      <Products />
      <BlogSection />
      <CTASection />
      <Testimonials />
      <FAQ />
    </main>
  );
}
