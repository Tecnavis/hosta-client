"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import Image from "next/image";
import BookingForm from "@/components/bookingForm";
import {
  fetchAHostel,
  fetchAHostelReviews,
  fetchAHostelRoom,
  postAHostelRating,
  postAHostelReviews,
} from "@/api/Api";
import * as Icons from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { Breakdown, RatingBreakdown } from "../StarRating";

export default function Details() {
  const { slug } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  const [ratingData, setRatingData] = useState<any>(null);
  const [reviews, setReviews] = useState<any>([]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [userId, setUserId] = useState<any>(null);
  const [breakdown, setBreakdown] = React.useState<Breakdown>({
    5: 0,
    4: 0,
    3: 3,
    2: 0,
    1: 1,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUserId(JSON.parse(storedUser));
      }
    }

    const loadData = async () => {
      try {
        const res = await fetchAHostelRoom(slug);

        setData(res);
      } catch (err) {
        console.error("Failed to fetch A hostels:", err);
      }
    };

    const loadReviewData = async () => {
      try {
        const res = await fetchAHostelReviews(slug);
        setReviews(res);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };

    loadData();
    loadReviewData();
  }, []);

  if (!data) return <p>Loading...</p>;

  const item = data[0];

  // Component handler
  const handleAddReview = async () => {
    if (newReview.trim() === "") return;

    const newItem = {
      roomId: slug,
      userId: userId._id,
      chat: newReview,
    };

    handleAddRating();
    try {
      const response = await postAHostelReviews(newItem);

      if (response.status === 201) {
        setNewReview("");
        await fetchAHostelReviews(slug);
      }
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  const handleAddRating = async () => {
    if (newRating === 0) return;

    const starRating = {
      ratingValue: newRating,
      userId: userId._id,
    };

    try {
      const response = await postAHostelRating(item?.hostelId?._id, starRating);

      if (response.status === 200) {
        setNewRating(0);
        await fetchAHostelReviews(slug);
      }
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <section className="!pt-44 pb-20 relative">
      <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="lg:text-52 text-40 font-semibold text-dark dark:text-white">
              {item?.hostelId?.name}
            </h1>
            <div className="flex gap-2.5">
              <Icon
                icon="ph:map-pin"
                width={24}
                height={24}
                className="text-dark/50 dark:text-white/50"
              />
              <p className="text-dark/50 dark:text-white/50 text-xm">
                {item?.hostelId?.location?.street},{" "}
                {item?.hostelId?.location?.place}
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex">
              {item?.hostelId?.amenities?.slice(0, 2)?.map((amenity: any) => {
                const LucideIcon: any =
                  Icons[amenity.icon as keyof typeof Icons];
                return (
                  <div
                    key={amenity._id}
                    className="flex flex-col gap-1 border-r border-black/10 dark:border-white/20 px-2"
                  >
                    {LucideIcon && (
                      <LucideIcon
                        //  className={`${textColor}`}
                        width={16}
                        height={16}
                      />
                    )}
                    <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                      {amenity.name}
                    </p>
                  </div>
                );
              })}

              <div className="flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8">
                <Icon
                  icon={"lineicons:arrow-all-direction"}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-8">
          <div className="lg:col-span-8 col-span-12 row-span-2">
            {item?.hostelId?.photos && item?.hostelId?.photos[0] && (
              <div className="">
                <Image
                  src={item?.hostelId?.photos[0]}
                  alt="Main Property Image"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full h-540"
                  unoptimized={true}
                />
              </div>
            )}
          </div>
          <div className="lg:col-span-4 lg:block hidden">
            {item?.photos && item?.photos[0] && (
              <Image
                src={item.photos[0]}
                alt="Property Image 2"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.photos && item?.photos[1] && (
              <Image
                src={item.photos[1]}
                alt="Property Image 3"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.photos && item?.photos[2] && (
              <Image
                src={item.photos[2]}
                alt="Property Image 4"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
        </div>

        <div className="w-full max-w-sm mt-14 rounded-2xl shadow-md p-6 bg-white dark:bg-gray-800">
          {/* Rent Amount */}
          <div className="text-center mb-4">
            <h3 className="text-xl font-medium"> Monthly Rent</h3>

            <h2 className="text-3xl font-bold text-blue-600">
              ₹{item?.hostelId?.price}
            </h2>
          </div>

          {/* Additional Fees */}
          <div className="border-t pt-4 space-y-2">
            <h3 className="text-xl font-medium">Security Deposits</h3>

            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
              <span>{"Caution Deposit"}</span>
              <span>₹{item?.hostelId?.additionalFee}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
              <span>{"Registration fee"}</span>
              <span>₹{item?.hostelId?.registrationFee}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
              <span>Refund</span>
              <span>{item?.hostelId?.refund ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 col-span-12">
            <h3 className="text-xl font-medium">Facilities</h3>
            <p className="text-sm">Provided common by this hostel</p>
            <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 grid grid-cols-2 gap-3">
              {item?.hostelId?.amenities?.map((amenity: any) => {
                const LucideIcon: any =
                  Icons[amenity.icon as keyof typeof Icons];
                return (
                  <div key={amenity._id} className="flex items-center gap-3">
                    {LucideIcon && <LucideIcon width={16} height={16} />}
                    <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                      {amenity.name}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-dark dark:text-white text-xm ">
                {item?.hostelId?.description}
              </p>
            </div>

            <Tabs
              defaultValue="nearest"
              className="py-8 w-full mt-8 border-t border-dark/5 dark:border-white/15"
            >
              {/* Tab Headers */}
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger className="cursor-pointer" value="transportation">
                  Transportation
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="nearby">
                  Near By
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="restaurants">
                  Restaurants
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <TabsContent value="transportation" className="p-4">
                <div className="grid grid-cols-3 mt-5 gap-6">
                  {item?.hostelId?.transportation?.map((amenity: any) => {
                    const LucideIcon: any =
                      Icons[amenity.icon as keyof typeof Icons];
                    return (
                      <div
                        key={amenity._id}
                        className="flex items-center gap-2.5"
                      >
                        {LucideIcon && <LucideIcon width={16} height={16} />}
                        <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                          {amenity.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="nearby" className="p-4">
                <div className="grid grid-cols-3 mt-5 gap-6">
                  {item?.hostelId?.nearbyPlaces?.map((amenity: any) => {
                    const LucideIcon: any =
                      Icons[amenity.icon as keyof typeof Icons];
                    return (
                      <div
                        key={amenity._id}
                        className="flex items-center gap-2.5"
                      >
                        {LucideIcon && <LucideIcon width={16} height={16} />}
                        <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                          {amenity.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="restaurants" className="p-4">
                <div className="grid grid-cols-3 mt-5 gap-6">
                  {item?.hostelId?.restaurants?.map((amenity: any) => {
                    const LucideIcon: any =
                      Icons[amenity.icon as keyof typeof Icons];
                    return (
                      <div
                        key={amenity._id}
                        className="flex items-center gap-2.5"
                      >
                        {LucideIcon && <LucideIcon width={16} height={16} />}
                        <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                          {amenity.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>

            <h3 className="text-xl font-medium">Accommodation</h3>
            <p className="text-sm ">Prices are per bed or room</p>
            <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {data?.map((room: any) => (
                <div
                  key={room._id}
                  className="rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-dark"
                >
                  {/* Top Image */}
                  <img
                    src={room?.photos[0]}
                    alt={room.name}
                    className="w-full h-28 object-cover"
                  />

                  {/* Facilities */}
                  <div className="p-3 space-y-2">
                    <h3 className="text-xl font-medium">{room?.roomNumber}</h3>
                    {room?.amenities?.map((facility: any) => {
                      const LucideIcon: any =
                        Icons[facility.icon as keyof typeof Icons];
                      return (
                        <div
                          key={facility._id}
                          className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300"
                        >
                          {LucideIcon && <LucideIcon size={12} />}{" "}
                          {/* smaller icon */}
                          <span className="text-xs">{facility.name}</span>{" "}
                          {/* smaller text */}
                        </div>
                      );
                    })}
                  </div>

                  {/* Prices */}
                  <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      With Food:{" "}
                      <span className="font-semibold">₹{room.withFood}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Without Food:{" "}
                      <span className="font-semibold">₹{room.withoutFood}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <iframe
              src={item?.hostelId?.googleMap}
              width="1114"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl w-full"
            ></iframe>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
              <h4 className="text-dark text-3xl font-medium dark:text-white">
                {item?.rate}
              </h4>
              <p className="text-sm text-dark/50 dark:text-white">
                Discounted Price
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer"
              >
                Contact Owner Directly
              </button>
              <div className="absolute right-0 top-4 -z-[1]">
                <Image
                  src="/images/properties/vector.svg"
                  width={400}
                  height={500}
                  alt="vector"
                  unoptimized={true}
                />
              </div>
            </div>

            <RatingBreakdown breakdown={breakdown} />

            <div className=" max-h-96 overflow-y-auto scrollbar-hide flex flex-col gap-4">
              <div className="mt-4 p-4 border border-dark/10 dark:border-white/20 rounded-xl bg-white dark:bg-dark/20">
                <textarea
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Write your review..."
                  className="w-full p-2 border border-dark/10 dark:border-white/20 rounded mb-2 text-sm text-dark dark:text-white"
                  rows={3}
                ></textarea>

                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      onClick={() => setNewRating(star)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={star <= newRating ? "#facc15" : "none"}
                      stroke="#facc15"
                      strokeWidth={2}
                      className="w-5 h-5 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>

                <button
                  onClick={handleAddReview}
                  className="w-full bg-primary text-white py-2 rounded hover:bg-dark text-sm"
                >
                  Submit Review
                </button>
              </div>

              {reviews?.map((item: any) => (
                <div
                  key={item?._id}
                  className="border p-4 rounded-xl cursor-pointer border-dark/10 dark:border-white/20 flex flex-col items-center text-center bg-white dark:bg-dark/20 shadow-sm"
                >
                  <Image
                    src={item?.userId?.image}
                    alt={item?.userId?.name}
                    width={400}
                    height={400}
                    className="w-12 h-12 rounded-full object-cover mb-2"
                    unoptimized={true}
                  />
                  <h3 className="text-sm font-medium text-dark dark:text-white">
                    {item?.userId?.name}
                  </h3>
                  <span className="text-[10px] text-dark/50 dark:text-white/50 mb-2">
                    {formatDistanceToNowStrict(parseISO(item?.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                  <p className="text-xs text-dark dark:text-white leading-relaxed">
                    {item?.chat}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full mt-14 rounded-2xl shadow-md p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-medium">Policies/Rules</h3>
              <p className="text-sm ">Mandatory hostel rules to be followed</p>
              {/* Additional Fees */}
              <div className=" pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
                  <span>{"Gate Open Time"}</span>
                  <span>{item?.hostelId?.gateOpenTime} AM </span>
                </div>
                <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
                  <span>{"Gate Close Time"}</span>
                  <span>{item?.hostelId?.gateCloseTime} PM </span>
                </div>
                <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
                  <span>{"Visitors allowed"}</span>
                  <span>{item?.hostelId?.visitorsAllow ? "Yes" : "No"}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
                  <span>{"Fulltime warden"}</span>
                  <span>{item?.hostelId?.fulltimeWarden ? "Yes" : "No"}</span>
                </div>
                <span>{"Restrictions"}</span>
                <div className="flex flex-col justify-between text-sm text-gray-700 dark:text-gray-200">
                  {item?.hostelId?.restrictions?.map(
                    (restr: any, index: any) => {
                      return <span key={index}>{restr}</span>;
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        hostelId={item?.hostelId?._id}
        data={data}
      />
    </section>
  );
}
