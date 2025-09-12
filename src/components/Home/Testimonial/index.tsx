"use client";

import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonials } from "@/app/api/testimonial";

const Testimonial = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="bg-dark relative overflow-hidden py-20" id="testimonial">
      <div className="absolute right-0 top-0">
        <Image
          src="/images/testimonial/Vector.png"
          alt="victor"
          width={700}
          height={1039}
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="mb-10">
          <h2 className="lg:text-52 text-3xl md:text-4xl font-medium text-white">
            Student Testimonials
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="mt-9">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Image on Mobile */}
                  <div className="w-full lg:hidden mb-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto"
                      unoptimized={true}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <Icon
                        icon="ph:house-simple"
                        width={32}
                        height={32}
                        className="text-primary"
                      />
                      <div>
                        <h4 className="text-white text-xl md:text-2xl lg:text-3xl font-normal">
                          {item.review}
                        </h4>

                        {/* Star Rating */}
                        <div className="flex gap-1 mt-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Icon
                              key={i}
                              icon="ic:baseline-star"
                              width={20}
                              height={20}
                              className="text-yellow-400"
                            />
                          ))}
                        </div>

                        <div className="flex items-center mt-6 gap-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-full hidden lg:block"
                            unoptimized={true}
                          />
                          <div>
                            <h6 className="text-white text-base font-medium">
                              {item.name}
                            </h6>
                            <p className="text-white/50 text-sm">{item?.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image on Desktop */}
                  <div className="hidden lg:block flex-shrink-0 rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={320}
                      height={320}
                      className="rounded-2xl"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 gap-2.5">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
