import React from "react";
import App from "./App";

/* import ReactDOM from "react-dom";
ReactDOM.render(<App/>, document.querySelector("#root")); */

import { createRoot } from "react-dom/client";
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);