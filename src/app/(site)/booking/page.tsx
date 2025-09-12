"use client";

import { fetchAHostelBookings } from "@/api/Api";
import Image from "next/image";
import { useEffect, useState } from "react";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function Bookings() {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState<any>(null);

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    setUserId(parsedUser);

    // ✅ only fetch if parsedUser exists
    const loadData = async () => {
      try {
        const res = await fetchAHostelBookings(parsedUser._id);        
        setData(res);
      } catch (err) {
        console.error("Failed to fetch hostels bookings:", err);
      }
    };

    loadData();
  }
}, []);


  return (
    <section className="pt-20 pb-10 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-dark dark:text-white">
        My Bookings
      </h1>

      <div className="flex flex-col gap-4">
        {data.map((booking: any) => (
          <div
            key={booking?._id}
            className="flex flex-col sm:flex-row bg-white dark:bg-dark/20 border border-dark/10 dark:border-white/20 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="w-full sm:w-40 h-40 relative">
              <Image
                src={booking?.hostelId?.photos[0]}
                alt={booking?.hostelId?.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="flex flex-col flex-1 p-4">
              <h2 className="text-lg font-medium text-dark dark:text-white">
                {booking?.hostelId?.name}
              </h2>
              <p className="text-sm text-dark/50 dark:text-white/50 mb-2">
                ₹ {booking?.hostelId?.price}
              </p>

              <span
                className={`inline-block px-3 py-1 text-xs rounded-full font-medium w-fit ${
                  statusColors[booking.status]
                }`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
