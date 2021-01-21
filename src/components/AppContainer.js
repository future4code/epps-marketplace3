import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home"
import { LayoutHeader } from "../components/Header/LayoutHeader";
import ProductPage from "./ProductPage/ProductPage";


export class AppContainer extends Component {
  render() {
    return (
      <div>
        <LayoutHeader />
        {/* <Home /> */}
        <ProductPage/>
        <Footer />
      </div>
    );
  }
}
