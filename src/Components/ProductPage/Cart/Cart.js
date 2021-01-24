import React from "react";
import styled from "styled-components";
import ImgDelete from "../../../imgs/imgCart/delete.png";

const ProductCartContainer = styled.div`
  background-color: #f2970b;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 20px 10px;
  border-radius: 10px;
`;
const BoxCart = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const BoxItemCart = styled.div`
  margin-bottom: 20px;
`;

const BoxProductNameAndDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;
`;

const TagPnameProduct = styled.p`
  margin: 0;
  font-weight: 600;
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
  background-color: white;

  &:hover {
    background-color: #f1f1f1;
  }
`;

class Cart extends React.Component {
  valueUpdate = (totalList) => {
    let value = 0;
    for (let i = 0; i < totalList.length; i++) {
      value += totalList[i].price * totalList[i].quantidade;
    }
    return value;
  };

  checkout = () => {
    alert("Compra concluída com sucesso! Volte sempre!!!");
  };

  render() {
    const productsCart = this.props.listCart;
    const totalValue = this.valueUpdate(this.props.listCart);
    const infosProductsCart = productsCart.map((product) => {
      return (
        <BoxItemCart>
          <BoxProductNameAndDelete>
            <TagPnameProduct>{product.name.toUpperCase()}</TagPnameProduct>
            <BtnDelete onClick={() => this.props.deleteProductCart(product.id)}>
              <ImgBtnDelete src={ImgDelete} alt="botão para deletar produto" />
            </BtnDelete>
          </BoxProductNameAndDelete>
          <TagP>Quantidade: {product.quantidade}</TagP>
          <TagP>
            Valor do produto: R$
            {Number(product.price * product.quantidade)
              .toFixed(2)
              .replace(".", ",")}
          </TagP>
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
              <p>
                Total: R$ {Number(totalValue).toFixed(2).replace(".", ",")}{" "}
              </p>
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
            <BtnCheckout onClick={this.checkout}>Finalizar Compra</BtnCheckout>
          </BoxBtnCheckout>
        </BoxCart>
      </ProductCartContainer>
    );
  }
}

export default Cart;
