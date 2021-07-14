import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Route } from "react-router-dom";
import App from "./pages/app";

ReactDOM.render(
  <Route>
    <App />
  </Route>,

  document.getElementById( "root" )
);
