import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [localDate, setLocalDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setLocalDate(new Date());
    }, 1000);
  }, []);

  const currentDate = `${localDate.toLocaleDateString("pl", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })}, 
  ${localDate.toLocaleTimeString()}`;

  return <span className="form__clock">Dzisiaj jest {currentDate}</span>;
};

export default Clock;
