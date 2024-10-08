import { render } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app.jsx";
import "./index.css";

// render(<App />, document.getElementById("app"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
