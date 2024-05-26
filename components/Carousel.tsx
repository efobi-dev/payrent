"use client";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export default function HeroCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {[
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
          "https://images.unsplash.com/photo-1593786267440-550458cc882a",
          "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
          "https://images.unsplash.com/photo-1593012671976-1422185230fb",
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
        ].map((image) => (
          <CarouselItem key={image}>
            <Image
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              src={image}
              width={550}
              height={550}
              alt="house"
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
