import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [localDate, setLocalDate] = useState([
    {
      date: new Date().toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
    },
    {
      time: new Date().toLocaleTimeString(),
    },
  ]);

  useEffect(() => {
    setInterval(() => {
      setLocalDate(
        localDate.map((date) => ({
          ...date,
          time: new Date().toLocaleTimeString(),
        }))
      );
    }, 1000);
  });

  return (
    <span className="form__clock">{`Dzisiaj jest ${localDate[0].date}, ${localDate[1].time}`}</span>
  );
};

export default Clock;
