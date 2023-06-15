import styled from "styled-components";

const Message = styled.span`
  color: ${({ theme }) => theme.colors.errorMessageColor};
  margin: 0 10%;
  text-align: center;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}px) {
    margin-top: -30px;
  }
`;

export { Message };
