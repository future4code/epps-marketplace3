import React from "react";
import styled from "styled-components";

const ProductAsideContainer = styled.div`
  background-color: #f2970b;
  width: 350px;
  display: flex;
  justify-content: center;
  margin: 20px 10px;
  border-radius: 10px;
`;

const TitleAside = styled.h1`
  margin-top: 40px;
`;

const AsideBox = styled.div`
  position: fixed;
  width: 200px;
  text-align: center;
`;

const AsideBoxItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  margin: 0px auto;
  padding: 2px 0;
  text-align: initial;
`;

const InputFiltro = styled.input`
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const SelectFiltro = styled.select`
  margin-top: 20px;
  text-align-last: center;
`;

export default class ProductAside extends React.Component {
  render() {
    return (
      <ProductAsideContainer>
        <AsideBox>
          <TitleAside>Filtro</TitleAside>
          <AsideBoxItem>
            <label>Valor Máximo:</label>
            <InputFiltro 
              onChange={this.props.onchangeValueMax}
              type='number'
            />
          </AsideBoxItem>

          <AsideBoxItem>
            <label>Valor Mínimo:</label>
            <InputFiltro 
              onChange={this.props.onchangeValueMin}
              type='number'
            />
          </AsideBoxItem>

          <AsideBoxItem>
            <label>Nome do Produto</label>
            <InputFiltro 
              onChange={this.props.onchangeInputSearch}
            />
          </AsideBoxItem>

          <AsideBoxItem>
            <SelectFiltro>
              <option disabled selected> Categoria</option>
              <option value={'acessorios'}>Acessórios</option>
              <option value={'festa'}>Aniversário e festas</option>
              <option value={'bijuterias'}>Bijuterias</option>
              <option value={'jogos'}>Jogos e Brinquedos</option>
              <option value={'roupas'}>Roupas</option>
            </SelectFiltro>
          </AsideBoxItem>
          {/* <button onClick={this.props.filterProducts}>Buscar</button> */}
        </AsideBox>
      </ProductAsideContainer>
    );
  }
}
