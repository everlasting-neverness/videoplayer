import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 10px;
    font-family: 'Hind', sans-serif;
    height: 3000px;
  }
`;

export default GlobalStyle;
