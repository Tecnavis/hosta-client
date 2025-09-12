"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Icon } from "@iconify/react";
import { useAppContext } from "@/context/AppContext";


interface HeroSubProps {
  title: string ;
  description: string;
}

// ✅ Filters Component
function Filter({ setFilter }: { setFilter: Dispatch<SetStateAction<string>> }) {
  return (
    <div className="w-full flex justify-center mb-6">
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-wrap gap-4 justify-center">
        {/* Category */}
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="py-2 px-4 bg-white/90 dark:bg-dark/60 
        border border-white/20 dark:border-dark/30 rounded-full 
        text-dark dark:text-white focus:outline-none text-xs md:text-sm"
        >
          <option value="">Category</option>
          <option value="Men's hostel">Mens Hostel</option>
          <option value="Women's hostel">Womens Hostel</option>
          <option value="Others">Others</option>
        </select>

        {/* Rent */}
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="py-2 px-4 bg-white/90 dark:bg-dark/60 
        border border-white/20 dark:border-dark/30 rounded-full 
        text-dark dark:text-white focus:outline-none text-xs md:text-sm"
        >
          <option value="">Rent</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

        {/* Meals */}
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="py-2 px-4 bg-white/90 dark:bg-dark/60 
        border border-white/20 dark:border-dark/30 rounded-full 
        text-dark dark:text-white focus:outline-none text-xs md:text-sm"
        >
          <option value="">Meals</option>
          <option value="with food">With food</option>
          <option value="without food">Without food</option>
        </select>
      </div>
    </div>
  );
}

const popularPlaces = [
  "Kochi",
  "Calicut",
  "Thiruvananthapuram",
  "Thrissur",
  "Malappuram",
  "Kannur",
  "Kottayam",
  "Alappuzha",
];

// const recentSearches = [
//   "All of Malappuram",
//   "Indira Gandhi Memorial Bus Terminal",
//   "Saudippadi Bus Station",
//   "New Bus Stand",
//   "Kuttanpadi Bus Stop",
//   "Thadathil Kundu Bus Stop",
//   "Kizhakekulambu Bus Stop",
// ];

export default function HeroSub({
  title,
  description,
}: HeroSubProps) {
  const [isFocused, setIsFocused] = useState(false);
                const { search, setSearch, filter, setFilter } = useAppContext();


  //   const params = useSearchParams();
  // const searchparm = params.get("search");
  // const category = params.get("category");
  //   const place = params.get("place");

  //  setFilter(place || "");
  //   // setFilter(category || "");
  //   setSearch(searchparm || "");

  return (
    <section className="relative pt-40 pb-20 text-center bg-cover overflow-x-hidden">
      {/* ✅ Search Bar */}
      <div className="w-full flex justify-center mb-6">
        <div className="w-full max-w-3xl mx-auto px-4">
          <div
            className="flex items-center bg-white/90 dark:bg-dark/60 
          backdrop-blur-md border border-white/20 dark:border-dark/30 
          rounded-full overflow-hidden shadow-lg"
          >
            {/* 👈 Back Button (only when focused) */}
            {isFocused && (
              <button
                onClick={() => {
                  setIsFocused(false);
                  setSearch("");
                }}
                className="p-2 pl-3 text-dark/70 dark:text-white/70 hover:text-dark dark:hover:text-white"
              >
                <Icon icon="mdi:arrow-left" width={22} />
              </button>
            )}

            <input
              type="text"
              placeholder="City or state"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 py-2 px-4 bg-transparent text-dark dark:text-white 
              placeholder:text-dark/50 dark:placeholder:text-white/50 
              focus:outline-none text-xs md:text-sm"
              onFocus={() => setIsFocused(true)}
            />

            {/* 👇 type=button prevents unwanted form submit */}
            <button
              type="button"
              className="bg-primary hover:bg-dark text-white font-semibold 
              px-5 py-2 transition-colors duration-300 text-xs md:text-sm"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Show Popular Places + Title & Description when NOT focused */}
      {!isFocused && (
        <>
          {/* Popular Places */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="flex overflow-x-auto scrollbar-hide gap-6 pl-4 pr-4 snap-x snap-mandatory">
              {popularPlaces.map((place) => (
                <div
                  key={place}
                  className="flex flex-col items-center shrink-0 snap-start"
                >
                  <div
                    onClick={() => setFilter(place)}
                    className="w-16 cursor-pointer h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold"
                  >
                    {place[0]}
                  </div>
                  <p className="text-sm text-dark dark:text-white mt-2">
                    {place}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Title & Description */}
          <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-bold">
            {title}
          </h2>

          <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full max-w-2xl mx-auto mt-2">
            {description}
          </p>
        </>
      )}

      {/* ✅ Show Filters on Top + Recent Searches when focused */}
      {isFocused && (
        <>
          {/* Filters on top */}
          <Filter setFilter={setFilter} />

           <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-bold">
            {title}
          </h2>

          <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full max-w-2xl mx-auto mt-2">
            {description}
          </p>

          {/* Recent Searches */}
          {/* <div className="max-w-4xl mx-auto mb-10  text-left px-4">
            <h3 className="text-sm font-semibold text-dark/70 dark:text-white/70 mb-3">
              Frequently searched in {search || "your city"}
            </h3>
            <ul className="space-y-3">
              {recentSearches.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-dark dark:text-white"
                >
                  <Icon icon="mdi:bus" className="text-primary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div> */}
        </>
      )}
    </section>
  );
}
