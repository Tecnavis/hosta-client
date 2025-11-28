// // "use client";

// // import React, { Dispatch, SetStateAction, useState } from "react";
// // import { Icon } from "@iconify/react";
// // import { useAppContext } from "@/context/AppContext";


// // interface HeroSubProps {
// //   title: string ;
// //   description: string;
// // }

// // // ✅ Filters Component
// // function Filter({ setFilter }: { setFilter: Dispatch<SetStateAction<string>> }) {
// //   return (
// //     <div className="w-full flex justify-center mb-6">
// //       <div className="w-full max-w-4xl mx-auto px-4 flex flex-wrap gap-4 justify-center">
// //         {/* Category */}
// //         <select
// //           onChange={(e) => setFilter(e.target.value)}
// //           className="py-2 px-4 bg-white/90 dark:bg-dark/60 
// //         border border-white/20 dark:border-dark/30 rounded-full 
// //         text-dark dark:text-white focus:outline-none text-xs md:text-sm"
// //         >
// //           <option value="">Category</option>
// //           <option value="Men's hostel">Mens Hostel</option>
// //           <option value="Women's hostel">Womens Hostel</option>
// //           <option value="Others">Others</option>
// //         </select>

// //         {/* Rent */}
// //         <select
// //           onChange={(e) => setFilter(e.target.value)}
// //           className="py-2 px-4 bg-white/90 dark:bg-dark/60 
// //         border border-white/20 dark:border-dark/30 rounded-full 
// //         text-dark dark:text-white focus:outline-none text-xs md:text-sm"
// //         >
// //           <option value="">Rent</option>
// //           <option value="low">Low to High</option>
// //           <option value="high">High to Low</option>
// //         </select>

// //         {/* Meals */}
// //         <select
// //           onChange={(e) => setFilter(e.target.value)}
// //           className="py-2 px-4 bg-white/90 dark:bg-dark/60 
// //         border border-white/20 dark:border-dark/30 rounded-full 
// //         text-dark dark:text-white focus:outline-none text-xs md:text-sm"
// //         >
// //           <option value="">Meals</option>
// //           <option value="with food">With food</option>
// //           <option value="without food">Without food</option>
// //         </select>
// //       </div>
// //     </div>
// //   );
// // }

// // const popularPlaces = [
// //   "Kochi",
// //   "Calicut",
// //   "Thiruvananthapuram",
// //   "Thrissur",
// //   "Malappuram",
// //   "Kannur",
// //   "Kottayam",
// //   "Alappuzha",
// // ];


// // export default function HeroSub({
// //   title,
// //   description,
// // }: HeroSubProps) {
// //   const [isFocused, setIsFocused] = useState(false);
// //                 const { search, setSearch, filter, setFilter } = useAppContext();


// //   return (
// //     <section className="relative pt-40 pb-20 text-center bg-cover overflow-x-hidden">
// //       <img src="/banner.jpeg" alt="" />
// //       {/* ✅ Search Bar */}
// //       <div className="w-full flex justify-center mb-6">
// //         <div className="w-full max-w-3xl mx-auto px-4">
// //           <div
// //             className="flex items-center bg-white/90 dark:bg-dark/60 
// //           backdrop-blur-md border border-white/20 dark:border-dark/30 
// //           rounded-full overflow-hidden shadow-lg"
// //           >
// //             {/* 👈 Back Button (only when focused) */}
// //             {isFocused && (
// //               <button
// //                 onClick={() => {
// //                   setIsFocused(false);
// //                   setSearch("");
// //                 }}
// //                 className="p-2 pl-3 text-dark/70 dark:text-white/70 hover:text-dark dark:hover:text-white"
// //               >
// //                 <Icon icon="mdi:arrow-left" width={22} />
// //               </button>
// //             )}

// //             <input
// //               type="text"
// //               placeholder="City or state"
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //               className="flex-1 py-2 px-4 bg-transparent text-dark dark:text-white 
// //               placeholder:text-dark/50 dark:placeholder:text-white/50 
// //               focus:outline-none text-xs md:text-sm"
// //               onFocus={() => setIsFocused(true)}
// //             />

// //             {/* 👇 type=button prevents unwanted form submit */}
// //             <button
// //               type="button"
// //               className="bg-primary hover:bg-dark text-white font-semibold 
// //               px-5 py-2 transition-colors duration-300 text-xs md:text-sm"
// //             >
// //               Search
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ✅ Show Popular Places + Title & Description when NOT focused */}
// //       {!isFocused && (
// //         <>
// //           {/* Popular Places */}
// //           <div className="max-w-5xl mx-auto mb-8">
// //             <div className="flex overflow-x-auto scrollbar-hide gap-6 pl-4 pr-4 snap-x snap-mandatory">
// //               {popularPlaces.map((place) => (
// //                 <div
// //                   key={place}
// //                   className="flex flex-col items-center shrink-0 snap-start"
// //                 >
// //                   <div
// //                     onClick={() => setFilter(place)}
// //                     className="w-16 cursor-pointer h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold"
// //                   >
// //                     {place[0]}
// //                   </div>
// //                   <p className="text-sm text-dark dark:text-white mt-2">
// //                     {place}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Title & Description */}
// //           <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-bold">
// //             {title}
// //           </h2>

// //           <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full max-w-2xl mx-auto mt-2">
// //             {description}
// //           </p>
// //         </>
// //       )}

// //       {/* ✅ Show Filters on Top + Recent Searches when focused */}
// //       {isFocused && (
// //         <>
// //           {/* Filters on top */}
// //           <Filter setFilter={setFilter} />

// //            <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-bold">
// //             {title}
// //           </h2>

// //           <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full max-w-2xl mx-auto mt-2">
// //             {description}
// //           </p>

// //         </>
// //       )}
// //     </section>
// //   );
// // }


// "use client";

// import React, { Dispatch, SetStateAction, useState } from "react";
// import { Icon } from "@iconify/react";
// import { useAppContext } from "@/context/AppContext";

// interface HeroSubProps {
//   title: string;
//   description: string;
// }

// // ✅ Filters Component
// function Filter({ setFilter }: { setFilter: Dispatch<SetStateAction<string>> }) {
//   return (
//     <div className="w-full flex justify-center mb-6">
//       <div className="w-full max-w-4xl mx-auto px-4 flex flex-wrap gap-4 justify-center">
//         {/* Category */}
//         <select
//           onChange={(e) => setFilter(e.target.value)}
//           className="py-2 px-4 bg-white/90 dark:bg-dark/60 
//         border border-white/20 dark:border-dark/30 rounded-full 
//         text-dark dark:text-white focus:outline-none text-xs md:text-sm"
//         >
//           <option value="">Category</option>
//           <option value="Men's hostel">Mens Hostel</option>
//           <option value="Women's hostel">Womens Hostel</option>
//           <option value="Others">Others</option>
//         </select>

//         {/* Rent */}
//         <select
//           onChange={(e) => setFilter(e.target.value)}
//           className="py-2 px-4 bg-white/90 dark:bg-dark/60 
//         border border-white/20 dark:border-dark/30 rounded-full 
//         text-dark dark:text-white focus:outline-none text-xs md:text-sm"
//         >
//           <option value="">Rent</option>
//           <option value="low">Low to High</option>
//           <option value="high">High to Low</option>
//         </select>

//         {/* Meals */}
//         <select
//           onChange={(e) => setFilter(e.target.value)}
//           className="py-2 px-4 bg-white/90 dark:bg-dark/60 
//         border border-white/20 dark:border-dark/30 rounded-full 
//         text-dark dark:text-white focus:outline-none text-xs md:text-sm"
//         >
//           <option value="">Meals</option>
//           <option value="with food">With food</option>
//           <option value="without food">Without food</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// const popularPlaces = [
//   "Kochi",
//   "Calicut",
//   "Thiruvananthapuram",
//   "Thrissur",
//   "Malappuram",
//   "Kannur",
//   "Kottayam",
//   "Alappuzha",
// ];

// export default function HeroSub({
//   title,
//   description,
// }: HeroSubProps) {
//   const [isFocused, setIsFocused] = useState(false);
//   const { search, setSearch, filter, setFilter } = useAppContext();

//   return (
//     <section 
//       className="relative pt-40 pb-20 text-center bg-cover bg-center bg-no-repeat overflow-x-hidden"
//       style={{
//         backgroundImage: "url('/banner.jpeg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat"
//       }}
//     >
//       {/* Dark overlay for better text readability */}
//       <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      
//       {/* Content */}
//       <div className="relative z-10">
//         {/* ✅ Search Bar */}
//         <div className="w-full flex justify-center mb-6">
//           <div className="w-full max-w-3xl mx-auto px-4">
//             <div
//               className="flex items-center bg-white/90 dark:bg-dark/60 
//             backdrop-blur-md border border-white/20 dark:border-dark/30 
//             rounded-full overflow-hidden shadow-lg"
//             >
//               {/* 👈 Back Button (only when focused) */}
//               {isFocused && (
//                 <button
//                   onClick={() => {
//                     setIsFocused(false);
//                     setSearch("");
//                   }}
//                   className="p-2 pl-3 text-dark/70 dark:text-white/70 hover:text-dark dark:hover:text-white"
//                 >
//                   <Icon icon="mdi:arrow-left" width={22} />
//                 </button>
//               )}

//               <input
//                 type="text"
//                 placeholder="City or state"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="flex-1 py-2 px-4 bg-transparent text-dark dark:text-white 
//                 placeholder:text-dark/50 dark:placeholder:text-white/50 
//                 focus:outline-none text-xs md:text-sm"
//                 onFocus={() => setIsFocused(true)}
//               />

//               {/* 👇 type=button prevents unwanted form submit */}
//               <button
//                 type="button"
//                 className="bg-primary hover:bg-dark text-white font-semibold 
//                 px-5 py-2 transition-colors duration-300 text-xs md:text-sm"
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Show Popular Places + Title & Description when NOT focused */}
//         {!isFocused && (
//           <>
//             {/* Popular Places */}
//             <div className="max-w-5xl mx-auto mb-8">
//               <div className="flex overflow-x-auto scrollbar-hide gap-6 pl-4 pr-4 snap-x snap-mandatory">
//                 {popularPlaces.map((place) => (
//                   <div
//                     key={place}
//                     className="flex flex-col items-center shrink-0 snap-start"
//                   >
//                     <div
//                       onClick={() => setFilter(place)}
//                       className="w-16 cursor-pointer h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold"
//                     >
//                       {place[0]}
//                     </div>
//                     <p className="text-sm text-white mt-2 font-medium">
//                       {place}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Title & Description */}
//             <h2 className="text-white text-4xl md:text-5xl font-bold">
//               {title}
//             </h2>

//             <p className="text-lg text-white/80 font-normal w-full max-w-2xl mx-auto mt-2">
//               {description}
//             </p>
//           </>
//         )}

//         {/* ✅ Show Filters on Top + Recent Searches when focused */}
//         {isFocused && (
//           <>
//             {/* Filters on top */}
//             <Filter setFilter={setFilter} />

//             <h2 className="text-white text-4xl md:text-5xl font-bold">
//               {title}
//             </h2>

//             <p className="text-lg text-white/80 font-normal w-full max-w-2xl mx-auto mt-2">
//               {description}
//             </p>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Icon } from "@iconify/react";
import { useAppContext } from "@/context/AppContext";

interface HeroSubProps {
  title: string;
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
  { 
    name: "Kochi", 
    icon: "mdi:ferry" // Port city, shipping
  },
  { 
    name: "Calicut", 
    icon: "mdi:pepper" // Historical spice trade
  },
  { 
    name: "Thiruvananthapuram", 
  icon: "mdi:city" // Capital government
  },
  { 
    name: "Thrissur", 
    icon: "mdi:elephant" // Famous for Thrissur Pooram (elephant festival)
  },
  { 
    name: "Malappuram", 
    icon: "mdi:soccer" // Football hub
  },
  { 
    name: "Kannur", 
    icon: "mdi:beach" // Beautiful beaches
  },
  { 
    name: "Kottayam", 
    icon: "mdi:leaf" // Rubber plantations
  },
  { 
    name: "Alappuzha", 
    icon: "mdi:sail-boat" // Backwaters, houseboats
  },
  { 
    name: "Palakkad", 
    icon: "mdi:gate" // Palakkad Gap, fort
  },
  { 
    name: "Kollam", 
    icon: "mdi:fish" // Fishing and cashew industry
  },
  { 
    name: "Kasaragod", 
    icon: "mdi:island" // Bekal Fort, islands
  },
  { 
    name: "Idukki", 
    icon: "mdi:terrain" // Hilly terrain, wildlife
  },
  { 
    name: "Wayanad", 
    icon: "mdi:forest" // Forests, wildlife sanctuary
  },
  { 
    name: "Pathanamthitta", 
    icon: "mdi:church" // Pilgrim centers
  },
  { 
    name: "Ernakulam", 
    icon: "mdi:city-variant" // Urban center
  }
];

export default function HeroSub({
  title,
  description,
}: HeroSubProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { search, setSearch, filter, setFilter } = useAppContext();

  return (
    <section 
      className="relative pt-40 pb-20 text-center bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: "url('/banner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10">
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
                    key={place.name}
                    className="flex flex-col items-center shrink-0 snap-start"
                  >
                    <div
                      onClick={() => setFilter(place.name)}
                      className="w-16 cursor-pointer h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold hover:bg-primary/80 transition-colors duration-300"
                    >
                      <Icon icon={place.icon} width={24} />
                    </div>
                    <p className="text-sm text-white mt-2 font-medium">
                      {place.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Title & Description */}
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              {title}
            </h2>

            <p className="text-lg text-white/80 font-normal w-full max-w-2xl mx-auto mt-2">
              {description}
            </p>
          </>
        )}

        {/* ✅ Show Filters on Top + Recent Searches when focused */}
        {isFocused && (
          <>
            {/* Filters on top */}
            <Filter setFilter={setFilter} />

            <h2 className="text-white text-4xl md:text-5xl font-bold">
              {title}
            </h2>

            <p className="text-lg text-white/80 font-normal w-full max-w-2xl mx-auto mt-2">
              {description}
            </p>
          </>
        )}
      </div>
    </section>
  );
}