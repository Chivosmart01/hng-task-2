import React from "react";
import About from "./about";
import BrowseMore from "./browseMore";
import Feature from "./feature";
import Products from "./products";
import BillBoard from "./billBoard";

const Main = () => {
  return (
    <main>
      <About />
      <BrowseMore />
        <Products />
        <BillBoard />
      <Feature />
    </main>
  );
};
export default Main;
