import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./router/index.jsx";
import { AppProviderContext } from "./context/appContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviderContext>
        <RouterApp />
      </AppProviderContext>
    </BrowserRouter>
  </React.StrictMode>
);
