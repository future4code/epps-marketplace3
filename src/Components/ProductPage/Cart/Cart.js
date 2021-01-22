import React from "react";
import styled from "styled-components";
import ImgDelete from "../../../imgs/imgCart/delete.png";

const ProductCartContainer = styled.div`
  background-color: #f2970b;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;
const BoxCart = styled.div`
  margin: 40px;
`;

const BoxItemCart = styled.div`
  margin-bottom: 20px;
`;

const BoxProductNameAndDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TagP = styled.p`
  margin: 0;
`;

const BtnDelete = styled.button`
  border: none;
  background-color: #f2970b;
  opacity: 0.6;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 1;
  }
`;

const ImgBtnDelete = styled.img`
  height: 20px;
`;

const BoxDetailsCart = styled.div`
  margin: 20px 0;
  width: 250px;
`;

const BoxSelectCart = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
`;

const BoxBtnCheckout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const BtnCheckout = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
`;

class Cart extends React.Component {
  valueUpdate = (totalList) => {
    let value = 0;
    for (let i = 0; i < totalList.length; i++) {
      value += totalList[i].price * totalList[i].quantidade;
    }
    return value;
  };

  render() {
    const productsCart = this.props.listCart;
    console.log('prodtos no carrinho', productsCart)
    const totalValue = this.valueUpdate(this.props.listCart);
    const infosProductsCart = productsCart.map((product) => {
      return (
        <BoxItemCart>
          <BoxProductNameAndDelete>
            <TagP>{product.name}</TagP>
            <BtnDelete onClick={() => this.props.deleteProductCart(product.id)}>
              <ImgBtnDelete src={ImgDelete} alt="botão para deletar produto" />
            </BtnDelete>
          </BoxProductNameAndDelete>
          <TagP>Quantidade: {product.quantidade}</TagP>
          <TagP>Total do produto: R${product.price * product.quantidade}</TagP>
        </BoxItemCart>
      );
    });

    return (
      <ProductCartContainer>
        <BoxCart>
          <h1>Carrinho</h1>
          <BoxDetailsCart>
            {infosProductsCart}
            <div>
              <p>Total: R$ {totalValue} </p>
            </div>
          </BoxDetailsCart>

          <BoxSelectCart>
            <select>
              <option disabled selected>
                Tipo de Pagamento
              </option>
              <option>Boleto</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
              <option>Pix</option>
              <option>Bitcoin</option>
            </select>
          </BoxSelectCart>

          <BoxSelectCart>
            <select>
              <option disabled selected>
                Parcelas
              </option>
              <option>2x</option>
              <option>3x</option>
              <option>4x</option>
              <option>5x</option>
              <option>6x</option>
            </select>
          </BoxSelectCart>

          <BoxBtnCheckout>
            <BtnCheckout>Finalizar Compra</BtnCheckout>
          </BoxBtnCheckout>
        </BoxCart>
      </ProductCartContainer>
    );
  }
}

export default Cart;
