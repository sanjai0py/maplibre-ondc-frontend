import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { scrollSpy, scroller } from "react-scroll";

// Initialize scrollSpy to listen for scroll events
scrollSpy.update();

// Handle hash changes to scroll to the correct section
window.addEventListener("hashchange", () => {
  const { hash } = window.location;
  if (hash) {
    scroller.scrollTo(hash.slice(1), {
      smooth: true,
      duration: 500,
    });
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
