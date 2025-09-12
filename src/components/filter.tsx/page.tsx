"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

const FindHostel = () => {
  return (
    <section className="py-20">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="max-w-3xl">
          <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" />
            Hostels & PGs
          </p>
          <h2 className="lg:text-52 text-40 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
            Find hostels and paying guest (PG) which suits you
          </h2>
          <p className="text-dark/50 dark:text-white/50 text-lg max-w-xl leading-[1.5]">
            Search comfortable, safe, and affordable hostels or PGs tailored for your needs — whether for students or working professionals.
          </p>
        </div>

        <form className="mt-10 flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter city or state"
            className="w-full md:w-1/2 py-4 px-6 rounded-full border border-dark/20 dark:border-white/20 bg-white dark:bg-dark/30 text-dark dark:text-white placeholder:text-dark/50 dark:placeholder:text-white/50 focus:outline-none"
          />
          <select
            className="w-full md:w-1/3 py-4 px-6 rounded-full border border-dark/20 dark:border-white/20 bg-white dark:bg-dark/30 text-dark dark:text-white focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="unisex">Unisex</option>
          </select>
          <button
            type="submit"
            className="py-4 px-8 bg-primary text-base leading-4 w-full md:w-auto text-white rounded-full font-semibold hover:bg-dark duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default FindHostel;
