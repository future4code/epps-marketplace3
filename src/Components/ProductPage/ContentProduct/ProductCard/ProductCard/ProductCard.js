import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

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

export default class ProductCard extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        this.getAllProducts()
    }

    getAllProducts = () => {
        const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products')
            .then((response) => {
                console.log('Get produtos', response.data.products)
                this.setState({ products: response.data.products })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        console.log('Produtos estado', this.state.products)
        const productsRender = this.state.products.map((product) => {
            return (
                <ProductCardBox>
                    <img src={product.photos}/>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <PriceP>Valor: {product.price}</PriceP>
                </ProductCardBox>
            )
        })
        return (
            <ProductCardContainer>
                
                {productsRender}
                
            </ProductCardContainer>
        )
    }
}