import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductPage/ProductCard'

const ProductContainer = styled.div`

`


export default class Product extends React.Component{
    render(){
        return(
            <ProductContainer>
                <ProductCard />
            </ProductContainer>
        )
    }
}