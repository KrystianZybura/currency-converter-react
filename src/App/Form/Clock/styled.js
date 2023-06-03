import styled from "styled-components";

const StyledClock = styled.span`
  font-family: monospace;
  font-size: 15px;
  justify-self: end;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    text-align: center;
    word-break: break-word;
  }
`;

export { StyledClock };
