import { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Bulletin from "./routes/bulletin/bulletin.component";
import Checkout from "./routes/checkout/checkout.component";
import { CartContext } from "./contexts/cart.context";

const App = () => {
  const location = useLocation();
  const { setIsCartOpen } = useContext(CartContext);

  useEffect(() => {
    setIsCartOpen(false);
  }, [location.pathname, setIsCartOpen]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="bulletin/*" element={<Bulletin />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
