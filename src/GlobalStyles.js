import { createGlobalStyle } from "styled-components";
import background from "./background.webp";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  .hidden {
    display: none;
  }

  #root {
    font-family: "Open Sans", sans-serif;
    background-image: url("${background}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
