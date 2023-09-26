import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { AlertProvider } from "./contexts/alert.context";
import AlertMessage from "./components/alert/alert-message.component";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AlertProvider>
          <CategoriesProvider>
            <CartProvider>
              <Reset />
              <App />
              <AlertMessage />
            </CartProvider>
          </CategoriesProvider>
        </AlertProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
