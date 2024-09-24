// * index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/Router";

/**
 * Composant Router
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// * index.jsx
//   - import App from './App';
//   - ReactDOM.render(<App />, document.getElementById('root'));
