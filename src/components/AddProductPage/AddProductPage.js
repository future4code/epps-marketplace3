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

const DivFormSell = styled.div`
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

const ContainerProducts = styled.div`
  border: 1px dotted #f2a649;
  min-width: 300px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

class AddProductPage extends Component {
  state = {
    inputName: "",
    inputDescription: "",
    inputPrice: 0,
    paymentMethod: "",
    selectCategory: "",
    inputImage: [],
    selectinstallments: 1,
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

  postProduct = () => {
    const body = {
      name: this.state.inputName,
      description: this.state.inputDescription,
      price: this.state.inputPrice,
      paymentMethod: this.state.paymentMethod,
      category: this.state.selectCategory,
      photos: [this.state.inputImage],
      installments: this.state.selectinstallments,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products",
        body
      )
      .then((response) => {
        alert("Produto cadastrado!");
        this.setState({
          inputName: "",
          inputDescription: "",
          inputPrice: 0,
          paymentMethod: "",
          selectCategory: "",
          inputImage: [],
          selectinstallments: 1,
        });
      })
      .catch((error) => {
        alert("Erro ao cadastrar produto,tente novamente.");
      });
  };

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputDescription = (event) => {
    this.setState({ inputDescription: event.target.value });
  };

  onChangeInputPrice = (event) => {
    this.setState({ inputPrice: event.target.value });
  };

  onChangePaymentMethod = (event) => {
    this.setState({ paymentMethod: event.target.value });
  };

  onChangeSelectCategory = (event) => {
    this.setState({ selectCategory: event.target.value });
  };

  onChangeInputImage = (event) => {
    this.setState({ inputImage: event.target.value });
  };

  onChangeSelectinstallments = (event) => {
    this.setState({ selectinstallments: event.target.value });
  };

  deleteProduct = (id) => {
    if (window.confirm("Quer mesmo deletar o anúncio do produto?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products/${id}`
        )
        .then((response) => {
          alert("Anúncio do produto retirado.");
          this.getProducts();
        })
        .catch((error) => {
          alert("Produto não foi retirado, tente novamente.");
        });
    }
  };

  render() {
    return (
      <DivFormSell>
        <h1>Área do Vendedor:</h1>
        <InputDiv tamanho="80%">
          <Input
            tamanho="100%"
            label="Nome do Produto"
            variant="filled"
            value={this.state.InputName}
            onChange={this.onChangeInputName}
          />
        </InputDiv>

        <InputDiv tamanho="80%">
          <Input
            tamanho="100%"
            label="URL da Imagem"
            variant="filled"
            placeholder="Coloque apenas uma foto do produto."
            value={this.state.InputImage}
            onChange={this.onChangeInputImage}
          />
        </InputDiv>

        <InputDiv tamanho="80%">
          <Input
            tamanho="100%"
            label="Descriçao"
            variant="filled"
            value={this.state.InputDescription}
            onChange={this.onChangeInputDescription}
          />
        </InputDiv>
        <InputDiv tamanho="80%">
          <InputDiv tamanho="25%">
            <Input
              type="number"
              tamanho="100%"
              label="Preço"
              variant="filled"
              value={this.state.InputPrice}
              onChange={this.onChangeInputPrice}
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
              value={this.state.SelectCategory}
              onChange={this.onChangeSelectCategory}
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
              value={this.state.paymentMethod}
              onChange={this.onChangePaymentMethod}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={"boleto"}>Boleto</MenuItem>
              <MenuItem value={"cartãocredito"}>Cartão de Crédito</MenuItem>
              <MenuItem value={"cartãodedito"}>Cartão de Débito</MenuItem>
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
              value={this.state.Selectinstallments}
              onChange={this.onChangeSelectinstallments}
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
            onClick={this.postProduct}
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

        <h1>Gerenciar produtos cadastrados:</h1>
        <hr></hr>
        {this.state.productList.map((product) => {
          return (
            <ContainerProducts>
              <p>
                <strong>Nome do produto:</strong> {product.name}
              </p>
              <p>
                <strong>Descrição:</strong>
                {product.description}
              </p>
              <p>
                <strong>Preço: </strong>R$
                {product.price},00
              </p>
              <p>
                <strong>Categoria:</strong>
                {product.category}
              </p>
              <Button
                onClick={() => {
                  this.deleteProduct(product.id);
                }}
                style={{
                  borderRadius: 20,
                  backgroundColor: "#f2a649",
                  color: "white",
                  border: "none",
                  outline: "none",
                  marginBottom: "10px",
                }}
                variant="contained"
              >
                Deletar Produto
              </Button>
            </ContainerProducts>
          );
        })}
      </DivFormSell>
    );
  }
}

export default AddProductPage;
