import styled, { css } from "styled-components";

const StyledForm = styled.form`
  font-size: 20px;
  flex-basis: 900px;
  color: ${({ theme }) => theme.colors.primaryFontColor};
`;

const Fieldset = styled.fieldset`
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 1fr;
  grid-gap: 58px;
  border: 3px solid #ff9800;
  border-radius: 20px;
  box-shadow: 0px 0px 12px #ff9800;
  padding: 20px;
  min-height: 660px;
  background-color: #000000bf;

  @media (max-width: 767px) {
    border: 2px solid #ff9800;
    box-shadow: 0px 0px 6px #ff9800;
    grid-gap: 15px;
    margin: 0 10px;
    padding: 60px 0;
  }

  @media (max-height: 660px) {
    min-height: 100vh;
  }
`;

const Legend = styled.legend`
  border: 2px solid #ff9800;
  border-radius: 20px;
  box-shadow: 0px 0px 5px #ff9800;
  background-color: #161616;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  width: 150px;

  @media (max-width: 767px) {
    padding: 8px 16px;
    font-weight: bold;
    font-size: 17px;
    width: 80px;
  }
`;

const Select = styled.select`
  border: 2px solid #ff9800;
  border-radius: 5px;
  color: #020e06;
  padding: 1px 10px;

  @media (max-width: 340px) {
    padding: 0 5px;
    font-size: 17px;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus-visible {
    outline: 2px solid #ff5b00;
    box-shadow: 0px 0px 14px #ff5b00;
  }
`;

const SpecialText = styled.span`
  color: ${({ theme }) => theme.colors.specialTextColor};
  text-shadow: 0px 0px 7px currentColor;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

const Input = styled.input`
  border: 2px solid #ff9800;
  border-radius: 5px;
  padding: 10px;

  @media (max-width: 340px) {
    max-width: 200px;
    padding: 9px;
  }

  &:focus-visible {
    outline: 2px solid #ff5b00;
    box-shadow: 0px 0px 14px #ff5b00;
  }
`;

const Button = styled.button`
  border: 2px solid #ff9800;
  border-radius: 10px;
  background-color: #f6f6f6;
  color: #000;
  padding: 8px;
  font-size: 21px;
  min-width: 140px;
  transition: 0.3s;
  margin-top: 30px;

  @media (max-width: 767px) {
    padding: 8px;
    font-size: 18px;
    min-width: 130px;
  }

  &:hover {
    outline: 1px solid #000;
    box-shadow: 0px 0px 5px #ff9800;
    background-color: #000000bf;
    color: #fff;
    cursor: pointer;

    &:active {
      box-shadow: 0px 0px 15px #ff9800;
    }

    &:focus-visible {
      outline: 2px solid #ff5b00;
      box-shadow: 0px 0px 15px #ff5b00;
      transition: none;
    }
  }
`;

const Mark = styled.span`
  display: inline-block;
  width: 32px;
  font-size: 23px;

  @media (max-width: 767px) {
    font-size: 18px;
    width: auto;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  place-items: center;

  ${({ breakpoint }) =>
    breakpoint &&
    css`
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        margin: 10px 0;
      }
    `}
`;

export {
  StyledForm,
  Fieldset,
  Legend,
  Select,
  SpecialText,
  Input,
  Button,
  Mark,
  Wrapper,
};
