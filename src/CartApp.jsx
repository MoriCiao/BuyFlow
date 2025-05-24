import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./cart.css";
import CartBody from "./CartBodyArea.jsx";

createRoot(document.getElementById("cartRoot")).render(
  <BrowserRouter>
    <CartBody />
  </BrowserRouter>
);
