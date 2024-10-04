import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: "Nunito", sans-serif;
    font-stretch: 75% 125%;
    font-style: normal;
    font-weight: 300 800;
    src: url("NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf")
      format("truetype");
  }

  :root {
    font-family: "Nunito", sans-serif;
    line-height: 1.5;
    font-weight: 300;
    text-rendering: optimizeLegibility;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
