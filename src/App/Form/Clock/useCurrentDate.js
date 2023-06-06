import { useState, useEffect } from "react";

const getCurrentDateText = (currentDate) =>
  `${currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  })}, 
${currentDate.toLocaleTimeString()}`;

const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return getCurrentDateText(currentDate);
};

export { useCurrentDate };
