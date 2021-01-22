import React from "react";
import styled from "styled-components";

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

    if(this.props.valueFilter === 'Crescente'){
      this.props.produtos.sort(function (a, b){
        return a.price - b.price
      })
    } else if(this.props.valueFilter === 'Decrescente'){
      this.props.produtos.sort(function (a, b){
        return b.price - a.price
      })
    } else if(this.props.valueFilter === 'nomeAZ'){
       this.props.produtos.sort(function(a, b){
        if(a.name < b.name){
          return 1;
        } else if(a.name > b.name){
          return -1
        } else {
          return 0
        }
       })
    } else if(this.props.valueFilter === 'nomeZA'){
      this.props.produtos.sort(function(a, b){
        if(a.name > b.name){
          return 1;
        } else if(a.name < b.name){
          return -1
        } else {
          return 0
        }
       })
    }
    
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
