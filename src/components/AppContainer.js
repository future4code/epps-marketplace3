import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import { LayoutHeader } from "../components/Header/LayoutHeader";
import AddProductPage from "./AddProductPage/AddProductPage";
import ProductPage from "./ProductPage/ProductPage"

export class AppContainer extends Component {
  state = {
    paginaAtual: "home",
  };

  irParaHome = () => {
    this.setState({ paginaAtual: "home" });
  };

  irParaFormulario = () => {
    this.setState({ paginaAtual: "formulario" });
  };

  irParaProdutos = () => {
    this.setState({ paginaAtual: "produtos" });
  };

  render() {
    let renderizarPagina = "";
    switch (this.state.paginaAtual) {
      case "home":
        renderizarPagina = <Home />;
        break;
      case "produtos":
        renderizarPagina = <ProductPage />;
        break;

      case "formulario":
        renderizarPagina = <AddProductPage />;
        break;

      default:
        renderizarPagina = <Home />;
    }

    return (
      <div>
        <LayoutHeader
          paginaAtual={this.state.paginaAtual}
          irParaHome={this.irParaHome}
          irParaFormulario={this.irParaFormulario}
          irParaProdutos={this.irParaProdutos}
        />
        {renderizarPagina}
        <Footer />
      </div>
    );
  }
}
