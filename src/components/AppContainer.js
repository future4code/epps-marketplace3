import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import { LayoutHeader } from "../components/Header/LayoutHeader";
import AddProductPage from "./AddProductPage/AddProductPage";
import ProductPage from "./ProductPage/ProductPage";

export class AppContainer extends Component {
  state = {
    currentPage: "home",
  };

  goToHome = () => {
    this.setState({ currentPage: "home" });
  };

  goToForm = () => {
    this.setState({ currentPage: "form" });
  };

  goToProducts = () => {
    this.setState({ currentPage: "products" });
  };

  render() {
    let renderPage = "";
    switch (this.state.currentPage) {
      case "home":
        renderPage = <Home />;
        break;
      case "products":
        renderPage = <ProductPage />;
        break;

      case "form":
        renderPage = <AddProductPage />;
        break;

      default:
        renderPage = <Home />;
    }

    return (
      <div>
        <LayoutHeader
          currentPage={this.state.currentPage}
          goToHome={this.goToHome}
          goToForm={this.goToForm}
          goToProducts={this.goToProducts}
        />
        {renderPage}
        <Footer />
      </div>
    );
  }
}
