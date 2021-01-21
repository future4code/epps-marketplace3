import React from 'react'
import styled from 'styled-components'
import ProductAside from './ProductAside/ProductAside'
import ContentProduct from './ContentProduct/ContentProduct'
import Cart from './Cart/Cart'
import ShoppingCart from '../../imgs/imgCart/shopping-cart.png'

const ProductPageContainer = styled.div`
    display: flex;
`

const BtnCartContainer = styled.div`
    position: fixed;
    right: 40px;
    bottom: 40px;
`


const ImgCart = styled.img`
    height: 40px;
    cursor: pointer;    
`

export default class ProductPage extends React.Component{

    state = {
        showCart: false,
    }

    changeCart = () =>{
        this.setState({showCart: !this.state.showCart})
    }


    render(){
        return(
            <ProductPageContainer>
                <ProductAside />
                <ContentProduct />
                {this.state.showCart && <Cart />}
                <BtnCartContainer>
                    <ImgCart src={ShoppingCart} alt='botão do carrinho' onClick={this.changeCart}/>
                </BtnCartContainer>
            </ProductPageContainer>
        )
    }
}
