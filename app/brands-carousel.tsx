"use client";
import { useEffect, useMemo, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Pause, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { brandLogos } from "./brand-logos";
export default function BrandsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const autoScroll = useMemo(
    () =>
      AutoScroll({
        speed: 0.7,
        startDelay: 0,
        direction: "backward",
        playOnInit: false,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: true,
      }),
    []
  );
  const plugins = useMemo(() => [autoScroll], [autoScroll]);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!api) return;
    if (paused || reducedMotion) autoScroll.stop();
    else autoScroll.play();
  }, [api, autoScroll, paused, reducedMotion]);
  return (
    <div className="min-w-0" data-testid="brands-carousel">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start", dragFree: true }}
        plugins={plugins}
        aria-label="Általunk forgalmazott márkák"
        aria-live="off"
        className="w-full"
      >
        <CarouselContent className="-ml-4 py-2">
          {brandLogos.map((brand) => (
            <CarouselItem
              key={brand.name}
              className="basis-1/2 pl-4 sm:basis-1/3 lg:basis-1/5"
            >
              <a
                className="flex h-40 items-center justify-center border border-line bg-white px-5 transition-colors hover:border-brand focus-visible:outline-offset-[-3px] motion-reduce:transition-none"
                href={brand.href}
                aria-label={`${brand.name} termékek`}
              >
                <img
                  className="h-28 w-full max-w-40 object-contain"
                  src={brand.image}
                  alt={brand.name}
                  width="160"
                  height="112"
                  draggable={false}
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
