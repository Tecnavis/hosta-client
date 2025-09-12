import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faqs">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10 ">
          <div className="lg:mx-0 mx-auto">
            <Image
              src="/images/faqs/faq-image.png"
              alt="image"
              width={680}
              height={644}
              className="lg:w-full"
              unoptimized={true}
            />
          </div>
          <div className="lg:px-12">
        
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
              Everything about Hostay homes
            </h2>
            <p className="text-dark/50 dark:text-white/50 pr-20">
              We?re an emerging hostel aggregator based in?Kochi, Kerala,
              connecting 20,000+ tenants monthly with over 100,000 verified beds
              across 7+ cities. With our smart dashboard, property owners save
              time and costs, while tenants enjoy hassle?free coliving with
              bundled services like mess, laundry, and transport. At
              FindMyHostel, your perfect living space is just a click away.{" "}
            </p>
            <div className="my-8">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>1. Search?</AccordionTrigger>
                  <AccordionContent>
                    Browse a curated list of hostels & PGs{" "}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>2. Filter?</AccordionTrigger>
                  <AccordionContent>
                    By rent, city, deposit, room type, amenities like WiFi and
                    meals{" "}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>3. Compare?</AccordionTrigger>
                  <AccordionContent>
                    See verified ratings and transparent pricing{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
