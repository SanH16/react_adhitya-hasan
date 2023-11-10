import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RoutesApp from "./router/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);
