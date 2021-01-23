import React, { Component } from "react";
import axios from "axios";
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
  state = {
    inputNome: "",
    inputDescricao: "",
    inputPreco: 0,
    formaDePagamento: "",
    selectCategoria: "",
    inputImagem: [],
    selectParcelas: 1,
    productList: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products"
      )
      .then((response) => {
        this.setState({ productList: response.data.products });
      })
      .catch((error) => {
        alert("Não funcionou.");
      });
  };

  enviarProduto = () => {
    const body = {
      name: this.state.inputNome,
      description: this.state.inputDescricao,
      price: this.state.inputPreco,
      paymentMethod: this.state.formaDePagamento,
      category: this.state.selectCategoria,
      photos: [this.state.inputImagem],
      installments: this.state.selectParcelas,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products",
        body
      )
      .then((response) => {
        alert("Produto cadastrado!");
      })
      .catch((error) => {
        alert("Erro ao cadastrar produto,tente novamente.");
      });
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };

  onChangeInputPreco = (event) => {
    this.setState({ inputPreco: event.target.value });
  };

  onChangeFormaDePagamento = (event) => {
    this.setState({ formaDePagamento: event.target.value });
  };

  onChangeSelectCategoria = (event) => {
    this.setState({ selectCategoria: event.target.value });
    console.log("Categoria:", event.target.value);
  };

  onChangeInputImagem = (event) => {
    this.setState({ inputImagem: event.target.value });
  };

  onChangeSelectParcelas = (event) => {
    this.setState({ selectParcelas: event.target.value });
  };

  deleteProduct = (id) => {
    if (window.confirm("Quer mesmo deletar o anúncio do produto?")){
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products/${id}`
      )
      .then((response) => {
        alert("Anúncio do produto retirado.")
        this.getProducts();
      })
      .catch((error) => {
        alert("Produto não foi retirado, tente novamente.");
      });
    }
  };

  render() {
    return (
      <DivPrincipal>
        <h1>Área do Vendedor:</h1>
        <InputDiv tamanho="80%">
          <Input
            tamanho="100%"
            label="Nome do Produto"
            variant="filled"
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
          />
        </InputDiv>

        <InputDiv tamanho="80%">
          <Input
            tamanho="100%"
            label="URL da Imagem"
            variant="filled"
            placeholder="Coloque apenas uma foto do produto."
            value={this.state.inputImagem}
            onChange={this.onChangeInputImagem}
          />
        </InputDiv>

        <InputDiv tamanho="80%">
          <Input
            tamanho="100%"
            label="Descriçao"
            variant="filled"
            value={this.state.inputDescricao}
            onChange={this.onChangeInputDescricao}
          />
        </InputDiv>
        <InputDiv tamanho="80%">
          <InputDiv tamanho="25%">
            <Input
              type="number"
              tamanho="100%"
              label="Preço"
              variant="filled"
              value={this.state.inputPreco}
              onChange={this.onChangeInputPreco}
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
            <Select
              label="Categoria"
              value={this.state.selectCategoria}
              onChange={this.onChangeSelectCategoria}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={"acessorios"}>Acessórios</MenuItem>
              <MenuItem value={"festa"}>Aniversário e festas</MenuItem>
              <MenuItem value={"bijuterias"}>Bijuterias</MenuItem>
              <MenuItem value={"jogos"}>Jogos e Brinquedos</MenuItem>
              <MenuItem value={"roupas"}>Roupas</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{
              margin: 5,
              minWidth: 200,
            }}
            variant="filled"
          >
            <InputLabel>Forma de Pagamento</InputLabel>
            <Select
              label="Forma de Pagamento"
              value={this.state.formaDePagamento}
              onChange={this.onChangeFormaDePagamento}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={"boleto"}>Boleto</MenuItem>
              <MenuItem value={"cartãocredito"}>Cartão de Crédito</MenuItem>
              <MenuItem value={"cartãodedito"}>Cartão de Dédito</MenuItem>
              <MenuItem value={"bitcoin"}>Bitcoin</MenuItem>
              <MenuItem value={"pix"}>Pix</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            style={{
              margin: 5,
              minWidth: 200,
            }}
            variant="filled"
          >
            <InputLabel>Parcelas</InputLabel>
            <Select
              label="Parcelas"
              value={this.state.selectParcelas}
              onChange={this.onChangeSelectParcelas}
            >
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
            onClick={this.enviarProduto}
            style={{
              borderRadius: 20,
              backgroundColor: "#f2a649",
              color: "white",
              border: "none",
              outline: "none",
            }}
            variant="contained"
          >
            Anunciar Produto
          </Button>
        </ButtonDiv>

        <h1>Gerenciamento de produtos</h1>
        <hr></hr>
        {this.state.productList.map((product) => {
          return (
            <div>
              <p>Nome do produto: {product.name}</p>
              <p>Descrição: {product.description}</p>
              <p>Preço: R${product.price},00</p>
              <p>Categoria: {product.category}</p>
              <button onClick={()=> {this.deleteProduct(product.id)}}>Deletar anuncio do produto.</button>
            </div>
          );
        })}
      </DivPrincipal>
    );
  }
}

export default AddProductPage;
