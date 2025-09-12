"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

const Categories = () => {
  const router = useRouter();
     const { search, setSearch, filter, setFilter } = useAppContext();
  

  const handleNavigate = (place: string) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user && user?._id) {
      // const query = new URLSearchParams();
      // if (place) query.append("place", place);
      setFilter(place);

      router.push(`/properties`);
    } else {
      router.push("/signin");
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Vector */}
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>

      <div className="container max-w-8xl mx-auto px-4 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-6 md:gap-10">
          {/* Text Block */}
          <div className="lg:col-span-6 col-span-12">
            <h2 className="text-2xl md:text-4xl lg:text-52 mt-4 mb-2 font-medium leading-snug text-dark dark:text-white">
              India’s fastest-growing platform for verified hostels & PGs built
              for students and young professionals.
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-sm md:text-base leading-relaxed max-w-full md:max-w-3/4">
              Discover top-rated hostels across major cities — from Kerala to
              beyond. Filter by location, rent, amenities, and guest reviews.
              Book directly with property owners — no hidden fees, no agents.
            </p>
            <Link
              href="/properties"
              className="py-3 px-6 bg-primary text-sm md:text-base leading-4 block w-fit text-white rounded-full font-semibold mt-6 hover:bg-dark duration-300"
            >
              Explore Cities
            </Link>
          </div>

          {/* Image Blocks */}
          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <div onClick={() => handleNavigate("kochi")}>
                <Image
                  src="/images/categories/villas.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </div>
              <div
                onClick={() => handleNavigate("kochi")}
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-6 pb-6 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-4 mr-4">
                  <div className="bg-white text-dark rounded-full w-fit p-3">
                    <Icon icon="ph:arrow-right" width={20} height={20} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white text-lg md:text-2xl">Kochi</h3>
                  <p className="text-white/80 text-xs md:text-base leading-snug">
                    Coastal city known for its culture, modern living, and
                    vibrant lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 col-span-12">
            <div className="relative rounded-2xl overflow-hidden group">
              <div onClick={() => handleNavigate("bangalore")}>
                <Image
                  src="/images/categories/luxury-villa.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </div>
              <div
                onClick={() => handleNavigate("bangalore")}
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-6 pb-6 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-4 mr-4">
                  <div className="bg-white text-dark rounded-full w-fit p-3">
                    <Icon icon="ph:arrow-right" width={20} height={20} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white text-lg md:text-2xl">Bangalore</h3>
                  <p className="text-white/80 text-xs md:text-base leading-snug">
                    India’s tech hub, famous for startups, nightlife, and a
                    cosmopolitan vibe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <div onClick={() => handleNavigate("chennai")}>
                <Image
                  src="/images/categories/appartment.jpg"
                  alt="villas"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </div>
              <div
                onClick={() => handleNavigate("chennai")}
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-6 pb-6 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-4 mr-4">
                  <div className="bg-white text-dark rounded-full w-fit p-3">
                    <Icon icon="ph:arrow-right" width={20} height={20} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white text-lg md:text-xl">Chennai</h3>
                  <p className="text-white/80 text-xs md:text-base leading-snug">
                    A perfect blend of heritage, beaches, and growing urban
                    life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group">
              <div onClick={() => handleNavigate("hyderabad")}>
                <Image
                  src="/images/categories/office.jpg"
                  alt="office"
                  width={320}
                  height={386}
                  className="w-full"
                  unoptimized={true}
                />
              </div>
              <div
                onClick={() => handleNavigate("hyderabad")}
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-6 pb-6 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-4 mr-4">
                  <div className="bg-white text-dark rounded-full w-fit p-3">
                    <Icon icon="ph:arrow-right" width={20} height={20} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white text-lg md:text-xl">Hyderabad</h3>
                  <p className="text-white/80 text-xs md:text-base leading-snug">
                    Modern IT city with rich history, food culture, and
                    affordable housing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
