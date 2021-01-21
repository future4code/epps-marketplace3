import React from "react";
import styled from "styled-components";
import axios from "axios";

const ProductCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCardBox = styled.div`
  margin: 15px;

  &:hover {
    box-shadow: 0px 0px 10px 10px #f1f1f1;
  }
`;

const PriceP = styled.p`
  margin: 0;
`;

export default class ProductCard extends React.Component {
  render() {
    console.log("Produtos estado", this.props.produtos);
    const productsRender = this.props.produtos.map((product) => {
      return (
        <ProductCardBox>
          <img src={product.photos} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <PriceP>Valor: {product.price}</PriceP>
          <button onClick={() => this.props.onClickAddToCart(product)}>
            Adicionar Produtos
          </button>
        </ProductCardBox>
      );
    });
    return <ProductCardContainer>{productsRender}</ProductCardContainer>;
  }
}
