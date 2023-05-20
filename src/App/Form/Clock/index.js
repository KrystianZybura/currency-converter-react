import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentDateText = `${currentDate.toLocaleDateString("pl", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })}, 
  ${currentDate.toLocaleTimeString()}`;

  return <span className="form__clock">Dzisiaj jest {currentDateText}</span>;
};

export default Clock;
