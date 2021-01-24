import React from "react";
import styled from "styled-components";

const ProductCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCardBox = styled.div`
  margin: 15px;
  text-align: center;
  padding: 10px;

  &:hover {
    box-shadow: 0px 0px 10px 10px #f1f1f1;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 300px;
`;

const TagP = styled.p`
  margin: 0;
`;

const BtnAddCart = styled.button`
  border: none;
  background-color: #f2970b;
  border-radius: 5px;
  transition: 0.5s;
  margin-top: 5px;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export default class ProductCard extends React.Component {
  render() {
    const newArray = [...this.props.products];

    if (this.props.valueOrder === "Crescente") {
      newArray.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (this.props.valueOrder === "Decrescente") {
      newArray.sort(function (a, b) {
        return b.price - a.price;
      });
    } else if (this.props.valueOrder === "nomeAZ") {
      newArray.sort(function (a, b) {
        if (a.name < b.name) {
          return 1;
        } else if (a.name > b.name) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (this.props.valueOrder === "nomeZA") {
      newArray.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    const productsRender = newArray.map((product) => {
      return (
        <ProductCardBox>
          <Img src={product.photos} alt="imagem do produto" />
          <h4>{product.name}</h4>
          <TagP>{product.description}</TagP>
          <TagP>
            Valor: R$ {Number(product.price).toFixed(2).replace(".", ",")}
          </TagP>
          <BtnAddCart onClick={() => this.props.onClickAddToCart(product)}>
            Adicionar ao Carrinho
          </BtnAddCart>
        </ProductCardBox>
      );
    });
    return <ProductCardContainer>{productsRender}</ProductCardContainer>;
  }
}
