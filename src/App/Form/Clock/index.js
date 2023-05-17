import { useState } from "react";
import "./style.css";

const Clock = () => {
  const [localDate, setLocalDate] = useState(
    new Date().toLocaleString("pl", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  );

  setInterval(() => {
    setLocalDate(
      new Date().toLocaleString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
    );
  }, 1000);

  return <span className="form__clock">{`Dzisiaj jest ${localDate}`}</span>;
};

export default Clock;
