"use client";

import { postAHostelBooking } from "@/api/Api";
import React, { useEffect, useState } from "react";

export default function BookingForm({ isOpen, onClose,  hostelId, data }) {
  const [formData, setFormData] = useState({
    checkInDate: "",
  });

    const [search, setSearch] = useState("");
      const [roomId, setRoomId] = useState("");
        const [userId, setUserId] = useState<any>(null);




  const filteredOwners = data.filter((o: any) =>
    o?.roomNumber.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUserId(JSON.parse(storedUser));
      }
    }
  }, []);



  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = async () => {
    try {
      const booking = {
        userId: userId._id, 
        roomId,
        hostelId,
        checkInDate: formData.checkInDate,
      };

      const response = await postAHostelBooking(booking);

      if (response.status === 201) {
        onClose();
      }
    } catch (error) {
      console.error("Error posting booking:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-dark rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-dark dark:text-white">
          Book This Property
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          

          <div className="space-y-2">
            <label htmlFor="owner">Rooms</label>

            {/* Search box */}
            <input
              type="text"
              placeholder="Search rooms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-1"
            />

            {/* Owner select */}
            <select
              id="owner"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select Room</option>
              {filteredOwners.map((o: any) => (
                <option key={o._id} value={o._id}>
                  {o.roomNumber}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleBooking}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-dark"
            >
              Confirm Booking
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
