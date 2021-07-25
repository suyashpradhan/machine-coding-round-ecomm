import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/base.css";
import { StateContextProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
