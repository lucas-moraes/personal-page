import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/app";
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/">
        <App />
    </HashRouter>
  </React.StrictMode>
);
