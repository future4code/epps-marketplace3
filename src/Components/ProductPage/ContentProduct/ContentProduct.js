import React from "react";
import styled from "styled-components";
import HeaderContentProducts from "./HeadeContectProdutcts/HeaderContentProducts";
import Product from "./ProductCard/Product";

const ProductContentProduct = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export default class ContentProduct extends React.Component {
  render() {
    return (
      <ProductContentProduct>
        <HeaderContentProducts filterProducts={this.props.filterProducts} />
        <Product
          products={this.props.products}
          onClickAddToCart={this.props.onClickAddToCart}
          valueOrder={this.props.valueOrder}
        />
      </ProductContentProduct>
    );
  }
}
