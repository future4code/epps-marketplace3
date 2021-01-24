import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";

const ProductContainer = styled.div``;

export default class Product extends React.Component {
  render() {
    return (
      <ProductContainer>
        <ProductCard
          products={this.props.products}
          onClickAddToCart={this.props.onClickAddToCart}
          valueOrder={this.props.valueOrder}
        />
      </ProductContainer>
    );
  }
}
