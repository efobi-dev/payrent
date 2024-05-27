import HeroSection from "@/components/HeroSection";
import Sponsors from "@/components/Sponsors";
import BlogSection from "@/components/BlogSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "PayRent NG Home Page",
};

export default function Page() {
  return (
    <main className="flex-1">
      <HeroSection />
      <Sponsors />
      <BlogSection />
    </main>
  );
}
