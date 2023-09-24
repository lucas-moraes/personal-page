import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Labelheader from "../components/Header";
import Body from "./Body";
import { GlobalStyle } from "./styles";

const App = () => {
  const [ theme, setTheme ] = useState<boolean>( false );

  useEffect( () => {
    const d = new Date();
    const h = d.getHours();

    if ( h > 18 || h < 5 ) {
      setTheme( true );
    } else {
      setTheme( false );
    }
  }, [] );

  function onHandleChange () {
    setTheme( !theme );
  }

  return (
    <>
      <GlobalStyle $theme={ theme } />
      <Nav theme={ theme } handleChange={ onHandleChange } />
      <Labelheader theme={ theme } />
      <Body theme={ theme } />
    </>
  );
};

export default App;
