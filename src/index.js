import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Route } from "react-router-dom";

import "./scss/app.scss";

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <App />
    </Route>
  </React.StrictMode>,
  document.getElementById("root")
);
