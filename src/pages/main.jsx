import React from "react";
import About from "../components/about";
import BrowseMore from "../components/browseMore";
import Feature from "../components/feature";
import Products from "../components/products";
import BillBoard from "../components/billBoard";
import Footer from "../layout/footer";
import Header from "../layout/header";

const Main = () => {
  return (
    <main>
      <Header />
      <About />
      <BrowseMore />
      <Products />
      <BillBoard />
      <Feature />
      <Footer />
    </main>
  );
};
export default Main;
