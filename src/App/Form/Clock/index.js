import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
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
