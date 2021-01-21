import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard/ProductCard'

const ProductContainer = styled.div`

`


export default class Product extends React.Component{
    render(){
        return(
            <ProductContainer>
                <ProductCard 
                    produtos={this.props.produtos}
                    onClickAddToCart={this.props.onClickAddToCart}
                />
            </ProductContainer>
        )
    }
}