import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{$theme: boolean}>`
  body {
    background: ${ props => ( props.$theme === true ? "#1b1e2b" : "#fbfbfb" ) }; 
    margin: 0;
    font-family: Nunito Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    user-select: none;
    transition: 0.5s;
  }
`;