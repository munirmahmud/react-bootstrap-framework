import React from "react";
import ReactDOM from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./bootstrap/global.styles.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
