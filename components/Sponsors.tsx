"use client";

import Image from "next/image";

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

export const Sponsors = () => {
  return (
    <section className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Partners
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsor.map(({ icon, name }) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>
              <Image
                src={icon}
                alt={name}
                width={150}
                height={150}
                className="rounded-full"
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Sponsors;
