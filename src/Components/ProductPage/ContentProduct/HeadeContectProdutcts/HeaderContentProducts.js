import React from 'react'
import styled from 'styled-components'

const HeaderProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 40px 0 20px 0;
`

const TitleProductsContainer = styled.div`
    
`


export default class HeaderContentProducts extends React.Component {
    render() {
        return (
            <HeaderProductContainer>
                <TitleProductsContainer>
                    <h1>Produtos</h1>
                </TitleProductsContainer>

                <div>
                    <select>
                        <option>Filtrar</option>
                        <option>Nome</option>
                        <option>Valor</option>
                        <option>Categoria</option>
                    </select>
                </div>
            </HeaderProductContainer>
        )
    }
}