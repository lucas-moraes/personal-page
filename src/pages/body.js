import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Repos from "./repos";
import Gists from "./gists";
import About from "./about";

const Body = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/repositories" exact={true} component={Repos} />
        <Route path="/gists" exact={true} component={Gists} />
        <Route path="/about" exact={true} component={About} />
      </Switch>
    </>
  );
};

export default Body;
