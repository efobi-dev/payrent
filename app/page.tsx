import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { Products } from "@/components/ProductSection";
import { FAQ } from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "PayRent NG Home Page",
};

export default function Page() {
  return (
    <main className="flex-1">
      <HeroSection />
      <Products />
      <BlogSection />
      <CTASection />
      <Testimonials />
      <FAQ />
    </main>
  );
}
