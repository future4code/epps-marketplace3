import React from "react";
import styled from "styled-components";
import ProductAside from "./ProductAside/ProductAside";
import ContentProduct from "./ContentProduct/ContentProduct";
import Cart from "./Cart/Cart";
import ShoppingCart from "../../imgs/imgCart/shopping-cart.png";
import axios from "axios";

const ProductPageContainer = styled.div`
  display: flex;
  min-height: 80vh;
`;

const BtnCartContainer = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
`;

const ImgCart = styled.img`
  height: 40px;
  cursor: pointer;
`;

export default class ProductPage extends React.Component {
  state = {
    showCart: false,
    products: [],
    listCart: [],
    order: '',
    valueMin: 0,
    valueMax: Infinity,
    inputSearch: '',
  };

  changeCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    const request = axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products"
      )
      .then((response) => {
        console.log("Get produtos", response.data.products);
        this.setState({ products: response.data.products });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addCart = (addProduct) => {
    let newListCart = [...this.state.listCart];
    let productShow = this.state.listCart.findIndex(
      (product) => product.id === addProduct.id
    );
    if (productShow > -1) {
      newListCart[productShow].quantidade++;
    } else {
      addProduct.quantidade = 1;
      newListCart.push(addProduct);
    }
    this.setState({ listCart: newListCart });
  };

  deleteProductCart = (id) =>{
   let productDelete = [...this.state.listCart]
   let productCart = this.state.listCart.findIndex((product) => product.id === id)

   productDelete.splice(productCart, 1)
   this.setState({listCart: productDelete})
  }

  onchangeProducts = (e) =>{
    if(e.target.value === 'Crescente'){
      this.setState({order: e.target.value})
    } else if(e.target.value === 'Decrescente'){
      this.setState({order: e.target.value})
    } else if(e.target.value === 'nomeAZ'){
      this.setState({order: e.target.value})
    } else if(e.target.value === 'nomeZA'){
      this.setState({order: e.target.value})
    } else if(e.target.value === 'Sem ordem'){
      this.setState({order: e.target.value})
    } 
  } 

  onchangeValueMin = (e) =>{
    this.setState({valueMin: e.target.value})
    this.filterProducts(e.target.value, this.state.valueMax, this.state.inputSearch)
  }

  onchangeValueMax = (e) =>{
    this.setState({valueMax: e.target.value})
    this.filterProducts(this.state.valueMin, e.target.value, this.state.inputSearch)
    
  }

  onchangeInputSearch = (e) =>{
    this.setState({inputSearch: e.target.value})
    this.filterProducts(this.state.valueMin, this.state.valueMax, e.target.value)
  }

  filterProducts = (valueMin = this.state.valueMin, valueMax = this.state.valueMax, inputSearch = this.state.inputSearch) =>{
    const productsListFiltered = this.state.products.filter((product) =>{
      return product.price > valueMin
    }).filter((product) =>{
      return product.price < valueMax
    }).filter((product) =>{
      const nomeProduto = product.name.toLowerCase()
      return nomeProduto.includes(inputSearch.toLocaleLowerCase())
    })

    this.setState({products: productsListFiltered})
    return productsListFiltered
  }

  render() {
    console.log(this.state.products)
    console.log('valor inputs filter:', this.state.inputSearch)
    return (
      <ProductPageContainer>
        <ProductAside 
          onchangeInputSearch={this.onchangeInputSearch}
          onchangeValueMax={this.onchangeValueMax}
          onchangeValueMin={this.onchangeValueMin}
          filterProducts={this.filterProducts}
          productList={this.state.products}
        />
        <ContentProduct
          produtos={this.state.products}
          onClickAddToCart={this.addCart}
          listCart={this.state.listCart}
          filtroProducts={this.onchangeProducts}
          valueOrder={this.state.order}
        />
        {this.state.showCart && <Cart 
                                  listCart={this.state.listCart} 
                                  deleteProductCart={this.deleteProductCart}
                                />}
        <BtnCartContainer>
          <ImgCart
            src={ShoppingCart}
            alt="botão do carrinho"
            onClick={this.changeCart}
          />
        </BtnCartContainer>
      </ProductPageContainer>
    );
  }
}
