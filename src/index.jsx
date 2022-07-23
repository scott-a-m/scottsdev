import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SiteProvider } from "./site_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SiteProvider>
      <App />
    </SiteProvider>
  </React.StrictMode>
);
