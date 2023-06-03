import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

const getCurrentDateText = (currentDate) =>
  `${currentDate.toLocaleDateString(undefined, {
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
    <StyledClock>Dzisiaj jest {getCurrentDateText(currentDate)}</StyledClock>
  );
};

export default Clock;
