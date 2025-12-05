"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date("2025-12-08T00:00:00+05:30"); // IST is UTC+5:30

      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null;
  }

  const allZero = Object.values(timeLeft).every((v) => v === 0);

  const NumberBox = ({ value, unit }: { value: number; unit: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex items-center justify-center bg-transparent rounded-lg">
        <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#FF6622]">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-1 md:mt-2 text-[10px] sm:text-xs md:text-sm uppercase text-gray-400">{unit}</span>
    </div>
  );

  return (
    <div>
      {allZero ? (
        <h2 className="text-4xl md:text-6xl font-bold">
          Plasmas Discord Channel Live Now
        </h2>
      ) : (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-5 text-center">
          <NumberBox value={timeLeft.days} unit="Days" />
          <NumberBox value={timeLeft.hours} unit="Hours" />
          <NumberBox value={timeLeft.minutes} unit="Minutes" />
          <NumberBox value={timeLeft.seconds} unit="Seconds" />
        </div>
      )}
    </div>
  );
};

export default Countdown;
