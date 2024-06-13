"use client";

import Image from "next/image";
import X from "@/app/assets/x";
import LinkedIn from "@/app/assets/linkedin";
import Instagram from "@/app/assets/instagram";
import Facebook from "@/app/assets/facebook";

const sponsor = [
  {
    icon: "/capacity-delta.png",
    name: "Delta Capacity",
  },
  {
    icon: "/google-wordmark.svg",
    name: "Google",
  },
  {
    icon: "/lagos-state.png",
    name: "Lagos State",
  },
];

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <Image src="/payrent-logo.png" alt="logo" width={50} height={50} />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex md:flex-row gap-2">
            <div>
              <a
                rel="noreferrer noopener"
                href="https://www.twitter.com/payrentng"
                className="opacity-60 hover:opacity-100"
              >
                <X className="w-6 h-6" />
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://www.instagram.com/payrentng"
                className="opacity-60 hover:opacity-100"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://www.facebook.com/payrentng"
                className="opacity-60 hover:opacity-100"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://www.linkedin.com/company/payrentng"
                className="opacity-60 hover:opacity-100"
              >
                <LinkedIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Sponsors</h3>
          <div className="flex md:flex-row gap-2">
            {sponsor.map(({ icon, name }) => (
              <div key={name} className="flex items-center">
                <Image
                  src={icon}
                  alt={name}
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container pb-14 text-center">
        <h3>&copy; 2024 PayRent NG</h3>
        <p className="opacity-60">All rights reserved</p>
        <span className="text-md font-serif">
          Made with ❤️ by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://owenstack.github.io"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            OwenStack
          </a>
        </span>
      </section>
    </footer>
  );
};
