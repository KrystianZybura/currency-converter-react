import styled from "styled-components";

const StyledClock = styled.span`
  font-family: monospace;
  font-size: 15px;
  justify-self: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}px) {
    margin: 0 30px 20px;
    text-align: center;
    justify-self: center;
    word-break: break-word;
  }
`;

export { StyledClock };
