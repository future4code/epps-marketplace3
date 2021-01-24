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
`

export default class ProductCard extends React.Component {
  render() {

    const novoArray = [...this.props.produtos]

    if(this.props.valueOrder === 'Crescente'){
      novoArray.sort(function (a, b){
        return a.price - b.price
      })
    } else if(this.props.valueOrder === 'Decrescente'){
      novoArray.sort(function (a, b){
        return b.price - a.price
      })
    } else if(this.props.valueOrder === 'nomeAZ'){
      novoArray.sort(function(a, b){
        if(a.name < b.name){
          return 1;
        } else if(a.name > b.name){
          return -1
        } else {
          return 0
        }
       })
    } else if(this.props.valueOrder === 'nomeZA'){
      novoArray.sort(function(a, b){
        if(a.name > b.name){
          return 1;
        } else if(a.name < b.name){
          return -1
        } else {
          return 0
        }
       })
    } 

    const productsRender = novoArray.map((product) => {
      return (
        <ProductCardBox>
          <img src={product.photos} alt='imagem do produto'/>
          <h4>{product.name}</h4>
          <TagP>{product.description}</TagP>
          <TagP>Valor: R$ {Number(product.price).toFixed(2).replace('.', ',')}</TagP>
          <BtnAddCart onClick={() => this.props.onClickAddToCart(product)}>
            Adicionar Produtos
          </BtnAddCart>
        </ProductCardBox>
      );
    });
    return <ProductCardContainer>{productsRender}</ProductCardContainer>;
  }
}
