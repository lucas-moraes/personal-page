import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "../components/nav";
import Labelheader from "../components/header";
import Body from "./body";


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

  body {
    background: ${ props => ( Boolean( props.theme ) ? "#1b1e2b" : "#fbfbfb" ) }; 
    margin: 0;
    font-family: Nunito Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    user-select: none;
    transition: 0.5s;
  }
`;

const App = () => {
  const [ Default, setDefault ] = useState<boolean>( false );

  useEffect( () => {
    const d = new Date();
    const h = d.getHours();

    if ( h > 18 || h < 5 ) {
      setDefault( true );
    } else {
      setDefault( false );
    }
  }, [] );

  function onHandleChange () {
    if ( Default ) {
      setDefault( false );
    } else {
      setDefault( true );
    }
  }

  return (
    <>
      <GlobalStyle theme={ Default } />
      <Nav theme={ Default } handleChange={ onHandleChange } />
      <Labelheader theme={ Default } />
      <Body theme={ Default } />
    </>
  );
};

export default App;
