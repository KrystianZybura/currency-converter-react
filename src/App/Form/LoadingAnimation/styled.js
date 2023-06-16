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
  height: 35px;
`;

const Spinner = styled.div`
  width: 35px;
  height: 35px;
  border: 7px solid #fff;
  border-top: 7px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 50%;
  animation: ${spinAnimation} 0.75s infinite linear;
`;

export { LoadingContainer, Spinner };
