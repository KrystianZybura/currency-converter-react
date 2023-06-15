import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: grid;
  place-items: center;
  height: 50px;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 8px solid #fff;
  border-top: 8px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 50%;
  animation: ${spinAnimation} 0.75s infinite linear;
`;

export { LoadingContainer, Spinner };
