import React from 'react'
import styled from 'styled-components'

const ProductCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const ProductCardBox = styled.div`
    margin: 15px;

    &:hover{
        box-shadow: 0px 0px 10px 10px #f1f1f1;
    }
`

const PriceP = styled.p`
    margin: 0;
`

export default class ProductCard extends React.Component{

    state = {
        name: '',
        img: '',
        price: '',
    }


    render(){
        return(
            <ProductCardContainer>
                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=1' alt='imagem produto'/>
                    <PriceP>Produto 1</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>

                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=2' alt='imagem produto'/>
                    <PriceP>Produto 2</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>  

                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=3' alt='imagem produto'/>
                    <PriceP>Produto 3</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox> 

                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=4' alt='imagem produto'/>
                    <PriceP>Produto 4</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox> 

                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=5' alt='imagem produto'/>
                    <PriceP>Produto 5</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>

                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=6' alt='imagem produto'/>
                    <PriceP>Produto 6</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>

                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=7' alt='imagem produto'/>
                    <PriceP>Produto 7</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>

                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=8' alt='imagem produto'/>
                    <PriceP>Produto 8</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>
                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=9' alt='imagem produto'/>
                    <PriceP>Produto 9</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>
                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=10' alt='imagem produto'/>
                    <PriceP>Produto 10</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>
                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=11' alt='imagem produto'/>
                    <PriceP>Produto 11</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>
                <ProductCardBox>
                    <img src='https://picsum.photos/200/300?random=12' alt='imagem produto'/>
                    <PriceP>Produto 12</PriceP>
                    <PriceP>R$ 00,00</PriceP>
                </ProductCardBox>
            </ProductCardContainer>
        )
    }
}