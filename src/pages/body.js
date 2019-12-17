import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Repos from "./repos";
import Gists from "./gists";

const Body = () => {
  return (
    <>
      <Switch>
        <Route path="/home" exact={true} component={Home} />
        <Route path="/repositories" exact={true} component={Repos} />
        <Route path="/gists" exact={true} component={Gists} />
      </Switch>
    </>
  );
};

export default Body;
