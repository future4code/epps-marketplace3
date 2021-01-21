import React from 'react'
import styled from 'styled-components'

const ProductAsideContainer = styled.div`
    background-color: #f2970B;
    width: 400px;
    display: flex;
    justify-content: center;
`

const TitleAside = styled.h1`
    margin-top: 40px;
`

const AsideBox = styled.div`
    position: fixed;
    width: 200px;
    text-align: center;
`

const AsideBoxItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 170px;
    margin: 0px auto;
    padding: 2px 0;
    text-align: initial;
`

const InputFiltro = styled.input`
    border-radius: 5px;
    border: none;

    &:hover{
        background-color: #f1f1f1;
    }
`

const SelectFiltro = styled.select`
    margin-top: 20px; 
    text-align-last: center;
`

export default class ProductAside extends React.Component {
    render() {
        return (
            <ProductAsideContainer>
                
                <AsideBox>
                <TitleAside>Filtro</TitleAside>
                    <AsideBoxItem>
                        <label>Valor Máximo:</label>
                        <InputFiltro />
                    </AsideBoxItem>

                    <AsideBoxItem>
                        <label>Valor Mínimo:</label>
                        <InputFiltro />
                    </AsideBoxItem>

                    <AsideBoxItem>
                        <label>Nome do Produto</label>
                        <InputFiltro />
                    </AsideBoxItem>

                    <AsideBoxItem>
                        <SelectFiltro>
                            <option disabled selected>Categoria</option>
                            <option>Máscara</option>
                            <option>Cozinha</option>
                            <option>Bijuterias</option>
                        </SelectFiltro>
                    </AsideBoxItem>
                </AsideBox>

            </ProductAsideContainer>
        )
    }
}