import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  return <StyledClock>Dzisiaj jest {useCurrentDate()}</StyledClock>;
};

export default Clock;
