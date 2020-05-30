import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);