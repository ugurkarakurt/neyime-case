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
import { GlobalStyles } from "./index.styles";
import Footer from "./components/footer/footer.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <GlobalStyles />
              <Reset />
              <App />
              <AlertMessage />
              <Footer />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
);
