import styled from "styled-components";

const StyledClock = styled.span`
  font-family: monospace;
  font-size: 15px;
  align-self: flex-end;
  margin: -40px -50px -10px;

  @media (max-width: 768px) {
    margin: 0;
    text-align: center;
    word-break: break-word;
  }
`;

export { StyledClock };
