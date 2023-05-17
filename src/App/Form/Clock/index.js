import { useState } from "react";
import "./style.css";

const Clock = () => {
  const [localDate, setLocalDate] = useState(new Date());

  setInterval(() => {
    setLocalDate(new Date());
  }, 1000);

  return <span className="form__clock">{`${localDate}`}</span>;
};

export default Clock;
