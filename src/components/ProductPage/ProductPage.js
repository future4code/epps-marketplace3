import React from "react";
import styled from "styled-components";
import ProductAside from "./ProductAside/ProductAside";
import ContentProduct from "./ContentProduct/ContentProduct";
import Cart from "./Cart/Cart";
import ShoppingCart from "../../imgs/imgCart/shopping-cart.png";
import axios from "axios";

const ProductPageContainer = styled.div`
  display: flex;
  min-height: 80vh;
`;

const BtnCartContainer = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
`;

const ImgCart = styled.img`
  height: 40px;
  cursor: pointer;
`;

export default class ProductPage extends React.Component {
  state = {
    showCart: false,
    products: [],
    listCart: [],
  };

  changeCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    const request = axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products"
      )
      .then((response) => {
        console.log("Get produtos", response.data.products);
        this.setState({ products: response.data.products });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addCart = (addProduct) => {
    let newListCart = [...this.state.listCart];
    let productShow = this.state.listCart.findIndex(
      (product) => product.id === addProduct.id
    );
    if (productShow > -1) {
      newListCart[productShow].quantidade++;
    } else {
      addProduct.quantidade = 1;
      newListCart.push(addProduct);
    }
    this.setState({ listCart: newListCart });
  };

  render() {
    return (
      <ProductPageContainer>
        <ProductAside />
        <ContentProduct
          produtos={this.state.products}
          onClickAddToCart={this.addCart}
          listCart={this.state.listCart}
        />
        {this.state.showCart && <Cart listCart={this.state.listCart} />}
        <BtnCartContainer>
          <ImgCart
            src={ShoppingCart}
            alt="botão do carrinho"
            onClick={this.changeCart}
          />
        </BtnCartContainer>
      </ProductPageContainer>
    );
  }
}
