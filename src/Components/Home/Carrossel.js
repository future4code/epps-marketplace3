import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Familia from "../Img/HappyFamily.jpg";
import JogoArtesão from "../Img/ObjetosArtesao.jpg";
import Atendimento from "../Img/Atendimento.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const CarroselDiv = styled.div`
  padding: 4em 2em;
  background-color: #f2f2f2;
`;

class Carrossel extends React.Component {
  render() {
    return (
      <CarroselDiv>
        <Container>
          <Row>
            <Col md={12}>
              <Carousel nextLabel="" prevLabel="">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Familia}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Uma empresa para toda família!</h3>
                    <p>
                      Aqui você encontra diversos produtos artesanais feito
                      pelas mãos de diversas pessoas.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={JogoArtesão}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Produtos Artesanais</h3>
                    <p>
                      Temos diversas categorias de produtos artesanais, como por
                      exemplo, jogos, bonecos, vasos, roupas e muitos outros.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Atendimento}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Atendimento.</h3>
                    <p>
                      Estamos em contato com o cliente sempre no que o mesmo
                      precisar durante todos os dias da semana
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </CarroselDiv>
    );
  }
}

export default Carrossel;
