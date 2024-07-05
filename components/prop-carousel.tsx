"use client";

import { useEffect, useCallback, useState } from "react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import Image from "next/image";
import { Properties } from "@/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";

export function PropertyCarousel({ images }: { images: Properties["images"] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [autoplayPlugin, setAutoplayPlugin] = useState<AutoplayType | null>(
    null
  );
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!api) return;

    const autoplay = Autoplay({ delay: 1700, stopOnInteraction: false });
    setAutoplayPlugin(autoplay);

    return () => {
      autoplay.destroy();
    };
  }, [api]);

  useEffect(() => {
    if (!api || !autoplayPlugin) return;

    if (isHovering) {
      autoplayPlugin.play();
    } else {
      autoplayPlugin.stop();
    }
  }, [api, autoplayPlugin, isHovering]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={autoplayPlugin ? [autoplayPlugin] : []}
      className="w-full max-w-xs mx-auto"
      setApi={setApi}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CarouselContent>
        {images.map((image, index) =>
          image ? (
            <CarouselItem key={`${image}-${index}`}>
              <div className="p-1">
                <Image
                  className="w-full h-48 object-cover rounded-md"
                  src={image}
                  alt={`Property ${image} - Image ${index + 1}`}
                  width={400}
                  height={250}
                />
              </div>
            </CarouselItem>
          ) : null
        )}
      </CarouselContent>
    </Carousel>
  );
}
