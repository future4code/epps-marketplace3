import React from "react";
import styled from "styled-components";
import HeaderContentProducts from "./HeadeContectProdutcts/HeaderContentProducts";
import Product from "./ProductCard/Product";
import axios from "axios";

const ProductContentProduct = styled.div`
  width: 100%;
`;

export default class ContentProduct extends React.Component {
  render() {
    return (
      <ProductContentProduct>
        <HeaderContentProducts 
            filtroProducts={this.props.filtroProducts}
        />
        <Product
          produtos={this.props.produtos}
          onClickAddToCart={this.props.onClickAddToCart}
          filterProducts={this.props.filterProducts}
          valueFilter={this.props.valueFilter}
        />
      </ProductContentProduct>
    );
  }
}
