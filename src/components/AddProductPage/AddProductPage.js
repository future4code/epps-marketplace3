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
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height:80vh;
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
            id="filled-basic"
            tamanho="100%"
            label="Nome do Produto"
            variant="filled"
          />
        </InputDiv>

        <InputDiv tamanho="80%">
          <Input
            id="filled-basic"
            tamanho="100%"
            label="Url da Imagem"
            variant="filled"
          />
        </InputDiv>

        <InputDiv tamanho="80%">
          <Input
            id="filled-basic"
            tamanho="100%"
            label="Descriçao"
            variant="filled"
          />
        </InputDiv>
        <InputDiv tamanho="80%">
          <InputDiv tamanho="25%">
            <Input
              id="filled-basic"
              type="number"
              tamanho="100%"
              label="Preço"
              variant="filled"
            />
          </InputDiv>
          <FormControl
            style={{
              margin: 5,
              minWidth: 200,
            }}
            variant="filled"
          >
            <InputLabel>Categoria</InputLabel>
            <Select label="Categoria">
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={1}>Mascara</MenuItem>
              <MenuItem value={2}>Cozinha</MenuItem>
              <MenuItem value={3}>Bijuterias</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{
              margin: 5,
              minWidth: 200,
            }}
            variant="filled"
          >
            <InputLabel>Forma de Pag.</InputLabel>
            <Select label="Forma de Pag.">
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={1}>Boleto</MenuItem>
              <MenuItem value={2}>Cartão de crédito</MenuItem>
              <MenuItem value={3}>Cartão de débito</MenuItem>
              <MenuItem value={4}>Pix</MenuItem>
              <MenuItem value={5}>Bitcoin</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{
              margin: 5,
              minWidth: 200,
            }}
            variant="filled"
          >
            <InputLabel>parcelas</InputLabel>
            <Select label="Categoria">
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>
        </InputDiv>

        <ButtonDiv>
          <Button
            style={{
              borderRadius: 20,
              backgroundColor: "#f2a649",
              color: "white",
              border:'none',
              outline:'none',
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
