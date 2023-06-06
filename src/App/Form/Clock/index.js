import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) =>
  `${date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  })}, 
${date.toLocaleTimeString()}`;

const Clock = () => {
  const date = useCurrentDate();

  return <StyledClock>Dzisiaj jest {formatDate(date)}</StyledClock>;
};

export default Clock;
