import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Main from "./components/main";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
