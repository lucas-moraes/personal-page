import React from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "../components/nav";
import Labelheader from "../components/header";
import Body from "../pages/body";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

  body {
    background: ${props => (Boolean(props.theme) ? "#1b1e2b" : "#fbfbfb")}; 
    margin: 0;
    font-family: Nunito Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    user-select: none;
  }
`;

const App = () => {
  const d = new Date();
  const h = d.getHours();

  return (
    <>
      <GlobalStyle theme={h > 18 ? true : false} />
      <Nav theme={h > 18 ? true : false} />
      <Labelheader theme={h > 18 ? true : false} />
      <Body theme={h > 18 ? true : false} />
    </>
  );
};

export default App;
