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
        <HeaderContentProducts 
            filtroProducts={this.props.filtroProducts}
        />
        <Product
          produtos={this.props.produtos}
          onClickAddToCart={this.props.onClickAddToCart}
          /* filterProducts={this.props.filterProducts} */
          valueOrder={this.props.valueOrder}
        />
      </ProductContentProduct>
    );
  }
}
