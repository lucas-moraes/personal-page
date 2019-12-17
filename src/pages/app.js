import React from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "../components/nav";
import Labelheader from "../components/header";
import Body from "../pages/body";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

  body {
    background: #fbfbfb;
    margin: 0;
    font-family: Nunito Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    user-select: none;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Labelheader />
      <Body />
    </>
  );
};

export default App;
