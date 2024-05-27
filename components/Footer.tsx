"use client";

import Image from "next/image";

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
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
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
