import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [localDate, setLocalDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setLocalDate(new Date());
    }, 1000);
  }, [localDate]);

  return (
    <span className="form__clock">
      {`Dzisiaj jest 
      ${localDate.toLocaleDateString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })}, 
      ${localDate.toLocaleTimeString()}`}
    </span>
  );
};

export default Clock;
