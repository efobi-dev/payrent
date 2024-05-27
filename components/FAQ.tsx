"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQList = [
  {
    question: "How does PayRent work?",
    answer:
      "PayRent is an innovative platform that connects landlords, tenants, and buyers with a seamless and user-friendly experience. Our extensive database of properties allows you to search, list, and manage your real estate needs efficiently.",
    value: "item-1",
  },
  {
    question: "What services does PayRent offer for renters?",
    answer:
      "For renters, PayRent provides a comprehensive listing of available properties, complete with detailed information and virtual tours. Our platform streamlines the application process, facilitating secure online payments and digital lease agreements.",
    value: "item-2",
  },
  {
    question: "How can homeowners benefit from using PayRent?",
    answer:
      "Homeowners can leverage PayRent to list their properties for sale or rent. Our platform offers extensive exposure, professional marketing tools, and a user-friendly interface for managing inquiries and viewings, ensuring a hassle-free experience.",
    value: "item-3",
  },
  {
    question: "What support does PayRent provide for investors?",
    answer:
      "Investors can utilize PayRent's powerful analytics and insights to identify lucrative investment opportunities. Our platform offers comprehensive property management solutions, streamlining the process of maintaining and maximizing the potential of your investments.",
    value: "item-4",
  },
  {
    question: "Is PayRent available nationwide?",
    answer:
      "Yes, PayRent operates nationwide, providing our services to users across the country. Our expansive network ensures a diverse range of properties and opportunities, catering to diverse housing needs and preferences.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:sales@payrentng.com"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
