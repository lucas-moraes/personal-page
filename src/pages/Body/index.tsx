import React, {FunctionComponent} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Repos from "../Repos";

const Body: FunctionComponent<{theme: boolean}> = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home {...props} />} />
      <Route path="/repositories" element={<Repos {...props} />} />
      <Route path="/about" element={<About {...props} />} />
    </Routes>
  );
};

export default Body;
