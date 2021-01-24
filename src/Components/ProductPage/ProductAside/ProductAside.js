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

const InputFilter = styled.input`
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const SelectFilter = styled.select`
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
            <InputFilter onChange={this.props.onChangeValueMax} type="number" />
          </AsideBoxItem>

          <AsideBoxItem>
            <label>Valor Mínimo:</label>
            <InputFilter onChange={this.props.onChangeValueMin} type="number" />
          </AsideBoxItem>

          <AsideBoxItem>
            <label>Nome do Produto</label>
            <InputFilter onChange={this.props.onChangeInputSearch} />
          </AsideBoxItem>

          <AsideBoxItem>
            <SelectFilter onChange={this.props.onChangeCategorySelect}>
              <option selected disabled value=''>
                {" "}
                Categoria
              </option>
              <option value={"acessorios"}>Acessórios</option>
              <option value={"festa"}>Aniversário e festas</option>
              <option value={"bijuterias"}>Bijuterias</option>
              <option value={"jogos"}>Jogos e Brinquedos</option>
              <option value={"roupas"}>Roupas</option>
            </SelectFilter>
          </AsideBoxItem>
        </AsideBox>
      </ProductAsideContainer>
    );
  }
}
