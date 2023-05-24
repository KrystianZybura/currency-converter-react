import { useState, useEffect } from "react";
import "./style.css";

const getCurrentDateText = (currentDate) =>
  `${currentDate.toLocaleDateString("pl", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })}, 
${currentDate.toLocaleTimeString()}`;

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="clock">
      Dzisiaj jest {getCurrentDateText(currentDate)}
    </span>
  );
};

export default Clock;
