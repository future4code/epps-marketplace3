import React, { Component } from "react";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core/";
import styled from "styled-components";

const DivPrincipal = styled.div`
width:80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:0 auto;
`;

const Input = styled(TextField)`
  width: ${(props) => props.tamanho};
`;
const InputDiv = styled.div`
  width: ${(props) => props.tamanho};
  margin: 5px;
  display: flex;
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
`;

class AddProductPage extends Component {
  render() {
    return (
      <DivPrincipal>
        <h1>Área do Vendedor:</h1>
        <InputDiv tamanho="80%">
          <Input
            id="outlined-basic"
            tamanho="100%"
            label="Nome do Produto"
            variant="outlined"
          />
        </InputDiv>

        <InputDiv tamanho="80%">
          <Input
            id="outlined-basic"
            tamanho="100%"
            label="Url da Imagem"
            variant="outlined"
          />
        </InputDiv>

        <InputDiv tamanho="80%">
          <Input
            id="outlined-basic"
            tamanho="100%"
            label="Descriçao"
            variant="outlined"
          />
        </InputDiv>

        <InputDiv tamanho="80%">
          <InputDiv tamanho="25%">
            <Input
              id="outlined-basic"
              tamanho="100%"
              type="number"
              label="Parcelas"
              variant="outlined"
            />
          </InputDiv>
          <InputDiv tamanho="25%">
            <Input
              id="outlined-basic"
              type="number"
              tamanho="100%"
              label="Preço"
              variant="outlined"
            />
          </InputDiv>
          <FormControl
            style={{
              margin: 5,
              minWidth: 200,
            }}
            variant="outlined"
          >
            <InputLabel>Categoria</InputLabel>
            <Select label="Categoria">
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={1}>Praia</MenuItem>
              <MenuItem value={2}>Piscina</MenuItem>
              <MenuItem value={3}>Casa</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{
              margin: 5,
              minWidth: 200,
            }}
            variant="outlined"
          >
            <InputLabel>Forma de Pag.</InputLabel>
            <Select label="Forma de Pag.">
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={1}>Boleto</MenuItem>
              <MenuItem value={2}>Pix</MenuItem>
              <MenuItem value={3}>Cartão</MenuItem>
            </Select>
          </FormControl>
        </InputDiv>

        <ButtonDiv>
          <Button
            style={{
              borderRadius: 20,
              backgroundColor: "#f2a649",
              color: "white",
            }}
            variant="contained"
          >
            Anunciar Produto
          </Button>
        </ButtonDiv>
      </DivPrincipal>
    );
  }
}

export default AddProductPage;
