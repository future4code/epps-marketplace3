import React from 'react'
import styled from 'styled-components'
import ImgDelete from '../../../imgs/imgCart/delete.png'

const ProductCartContainer = styled.div`
    background-color: #F2970B;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;

`
const BoxCar = styled.div`
    position: fixed;
    margin-top: 40px;
`

const BoxProductNameAndDelete = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TagP = styled.p`
    margin: 0;
`

const BtnDelete = styled.button`
    border: none;
    background-color: #F2970B;
    opacity: 0.6;

    &:focus{
        outline: none;
    }

    &:hover{
        opacity: 1;
    }
`

const ImgBtnDelete = styled.img`
    height: 20px;
`

const BoxDetailsCart = styled.div`
    margin: 20px 0;
`

const BoxSelectCart = styled.div`
    margin: 15px 0;
    display: flex;
    justify-content: center;
`

const BoxBtnCheckout = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const BtnCheckout = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #f1f1f1;
`

export default class Cart extends React.Component {
    render() {
        return (
            <ProductCartContainer>
                <BoxCar>
                    <h1>Carrinho</h1>
                    <BoxDetailsCart>
                        <BoxProductNameAndDelete>
                            <TagP>Nome do Produto</TagP>
                            <BtnDelete>
                                <ImgBtnDelete src={ImgDelete} alt='botão para deletar produto' />
                            </BtnDelete>
                        </BoxProductNameAndDelete>
                        <TagP>Quantidade:</TagP>
                        <TagP>Total: R$ 00,00</TagP>
                    </BoxDetailsCart>

                    <BoxSelectCart>
                        <select>
                            <option disabled selected>Tipo de Pagamento</option>
                            <option>Boleto</option>
                            <option>Cartão de Crédito</option>
                            <option>Cartão de Débito</option>
                            <option>Pix</option>
                            <option>Bitcoin</option>
                        </select>
                    </BoxSelectCart>

                    <BoxSelectCart>
                        <select>
                            <option disabled selected>Parcelas</option>
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
                </BoxCar>
            </ProductCartContainer>
        )
    }
}