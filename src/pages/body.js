import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Repos from "./repos";
import Gists from "./gists";

const Body = () => {
  return (
    <>
      <Switch>
        <Route path="personal-page/home" exact={true} component={Home} />
        <Route path="personal-page/repositories" exact={true} component={Repos} />
        <Route path="personal-page/gists" exact={true} component={Gists} />
      </Switch>
    </>
  );
};

export default Body;
