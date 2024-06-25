import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogContent,
} from "./ui/dialog";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "./ui/carousel";
import { Properties } from "@/types/types";

export function ImageDialog({ images }: { images: Properties["images"] }) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
    api.scrollTo(startIndex);
  }, [api, startIndex]);

  const handleOpenChange = useCallback((open: boolean) => {
    setOpen(open);
    if (!open) {
      setStartIndex(0);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-6">
        {images.map((image, i) => (
          <DialogTrigger asChild key={i}>
            <div
              className="relative aspect-square overflow-hidden rounded-xl transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setStartIndex(i)}
            >
              <Image
                src={image}
                alt={`image ${i + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </DialogTrigger>
        ))}
      </div>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Gallery</DialogTitle>
          <DialogDescription>
            Check out the detailed, clear images of this property
          </DialogDescription>
        </DialogHeader>
        <Carousel className="w-full max-w-xl mx-auto" setApi={setApi}>
          <CarouselContent>
            {images.map((image, j) => (
              <CarouselItem key={j}>
                <div className="relative aspect-square">
                  <Image
                    src={image}
                    alt={`image ${j + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
