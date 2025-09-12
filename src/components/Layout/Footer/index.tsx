import Link from "next/link";
import { Icon } from "@iconify/react";
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className=" hidden sm:block relative z-10 bg-dark">
      
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                Begin your path to success contact us today.
              </h2>
              <Link
                href="/contactus"
                className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer"
              >
                Contact Owner Directly
              </Link>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-xm hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className="text-white/40 text-xm hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm ">
            ©{new Date().getFullYear()} Hostay. All rights reserved by{" "}
            <Link
              href="https://getnextjstemplates.com/"
              className="hover:text-primary"
              target="_blanck"
            >
              Tecnavis Web Solutions Pvt Ltd{" "}
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <Link href="#">
              <Icon
                icon="ph:x-logo-bold"
                width={24}
                height={24}
                className="text-white hover:text-primary duration-300"
              />
            </Link>
            <Link href="#">
              <Icon
                icon="ph:facebook-logo-bold"
                width={24}
                height={24}
                className="text-white hover:text-primary duration-300"
              />
            </Link>
            <Link href="#">
              <Icon
                icon="ph:instagram-logo-bold"
                width={24}
                height={24}
                className="text-white hover:text-primary duration-300"
              />
            </Link>
          </div>
          <div className="flex gap-8 items-center">
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Terms of service
            </Link>
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
