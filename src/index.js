import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Route } from "react-router-dom";

import "./scss/app.scss";



ReactDOM.render(
  <React.StrictMode>
    <Route>
      <Provider store={store}>
        <App />
      </Provider>
    </Route>
  </React.StrictMode>,
  document.getElementById("root")
);
