import { BrowserRouter } from "react-router-dom";
import React from "react";
import { App } from "./App";

export function Routing() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
