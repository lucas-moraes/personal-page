import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Repos from "./repos";
import Gists from "./gists";
import About from "./about";

const Body = props => {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={() => <Home {...props} />} />
        <Route
          path="/repositories"
          exact={true}
          component={() => <Repos {...props} />}
        />
        <Route
          path="/gists"
          exact={true}
          component={() => <Gists {...props} />}
        />
        <Route
          path="/about"
          exact={true}
          component={() => <About {...props} />}
        />
      </Switch>
    </>
  );
};

export default Body;
