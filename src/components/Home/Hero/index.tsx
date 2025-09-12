"use client";

import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Hero: React.FC = () => {

  const router = useRouter();

   const { search, setSearch, filter, setFilter } = useAppContext();
  

  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFilter(category);
    // Build query string
    // const query = new URLSearchParams();
    // if (search) query.append("search", search);
    // if (category) query.append("category", category);

    router.push(`/properties`);
  };

  return (
    <section className="!py-0">
      <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68">
          <div className="relative text-white dark:text-dark text-center md:text-start z-10">
            <p className="text-inherit text-xm font-medium">
              Find your happy place ?
            </p>
            <h1 className="text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-10">
              safe, comfy, and hassle? free stays!
            </h1>
            {/* <form className="w-full max-w-full mx-auto px-3">
              <div className="flex flex-row flex-nowrap items-center bg-white/90 dark:bg-dark/60 backdrop-blur-md border border-white/20 dark:border-dark/30 rounded-full overflow-hidden shadow-lg">
                <input
                  type="text"
                  placeholder="City or state"
                  className="flex-[2] min-w-[100px] py-2 px-3 bg-transparent text-dark dark:text-white placeholder:text-dark/50 dark:placeholder:text-white/50 focus:outline-none text-xs"
                /> */}
   <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center md:justify-start"
    >
      <div className="flex flex-row flex-nowrap items-center bg-white/90 dark:bg-dark/60 backdrop-blur-md border border-white/20 dark:border-dark/30 rounded-full overflow-hidden shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="City or state"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-[2] min-w-[100px] py-2 px-3 bg-transparent text-dark dark:text-white placeholder:text-dark/50 dark:placeholder:text-white/50 focus:outline-none text-xs sm:text-sm"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-[1] min-w-[80px] py-2 px-2 bg-transparent text-dark dark:text-white focus:outline-none border-l border-dark/10 dark:border-white/10 text-xs"
        >
          <option value="">Category</option>
          <option value="Men's hostel">Mens Hostel</option>
          <option value="Women's hostel">Womens Hostel</option>
          <option value="Others">Others</option>
        </select>

        <button
          type="submit"
          className="flex-[1] min-w-[80px] bg-primary hover:bg-dark text-white font-semibold px-3 py-2 transition-colors duration-300 whitespace-nowrap text-xs"
        >
          Search
        </button>
      </div>
    </form>
          </div>

          <div className="hidden md:block absolute -top-2 -right-68">
            <Image
              src={"/images/hero/heroBanner.png"}
              alt="heroImg"
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
