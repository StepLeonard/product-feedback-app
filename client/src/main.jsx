// we import React
import React from "react";

// we import ReactDOM so the app can show on the screen
import ReactDOM from "react-dom/client";

// we import BrowserRouter so our app can have pages
import { BrowserRouter } from "react-router-dom";

// we import App
import App from "./App.jsx";

// we import css
import "./App.css";

// this shows our app inside the root div
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);