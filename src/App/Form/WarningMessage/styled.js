import styled from "styled-components";

const Message = styled.span`
  color: ${({ theme }) => theme.colors.warningMessageColor};
  font-size: 22px;
  text-shadow: 0px 0px 5px #200804;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 18px;
    font-weight: bold;
    margin: 0 20px;
  }
`;
export { Message };
