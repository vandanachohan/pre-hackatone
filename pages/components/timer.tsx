"use client";

import React, { useState, useEffect } from "react";

const LiveDateTime = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59"); // Set your target date/time

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval); // Stop the timer when the target date is reached
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="hidden items-center space-x-4 bg-white md:flex">
      <div className="flex flex-col items-center">
        <span className="text-gray-500 text-xs">Days</span>
        <span className="text-3xl font-bold">{days.toString().padStart(2, "0")}</span>
      </div>
      <span className="text-brandPrimary text-lg font-bold">:</span>

      <div className="flex flex-col items-center">
        <span className="text-gray-500 text-xs">Hours</span>
        <span className="text-3xl font-bold">{hours.toString().padStart(2, "0")}</span>
      </div>
      <span className="text-brandPrimary text-lg font-bold">:</span>

      <div className="flex flex-col items-center">
        <span className="text-gray-500 text-xs">Minutes</span>
        <span className="text-3xl font-bold">{minutes.toString().padStart(2, "0")}</span>
      </div>
      <span className="text-brandPrimary text-lg font-bold">:</span>

      <div className="flex flex-col items-center">
        <span className="text-gray-500 text-xs">Seconds</span>
        <span className="text-3xl font-bold">{seconds.toString().padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default LiveDateTime;
