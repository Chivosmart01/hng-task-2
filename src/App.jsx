import "./App.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Cart from "./pages/cart";
// import Main from "./pages/main";
import Main from "./pages/main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPovider from "./store/CartPovider";

function App() {
  return (
    <CartPovider>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </CartPovider>
  );
}

export default App;
