import React from 'react'
import styled from 'styled-components'
import HeaderContentProducts from './HeadeContectProdutcts/HeaderContentProducts'
import Product from './ProductCard/Product'

const ProductContentProduct = styled.div`
    
`


export default class Cart extends React.Component{
    render(){
        return(
            <ProductContentProduct>
                <HeaderContentProducts />
                <Product />
            </ProductContentProduct>
        )
    }
}