import React from "react";
import styled from "styled-components";
import Logo from "../../imgs/elo4-logo.png";

const QuemSomosContainer = styled.div`
  display: flex;
  padding: 2em;
  background-color: #f2f2f2;
  height: 25%;
  color: #311355;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

const Imagem = styled.img`
  height: 80%;
  width: auto;
`;

const H1 = styled.h1``;

const Texto = styled.p`
  font-weight: bold;
  text-align: justify;
  margin-top: 5%;
`;

const Diferenciais = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15%;
  font-weight: 700;
  font-size: 15px;
`;

class QuemSomos extends React.Component {
  render() {
    return (
      <QuemSomosContainer>
        <div>
          <Imagem src={Logo} />
        </div>
        <div>
          <H1>Quem somos?</H1>
          <Texto>
            {" "}
            A Elo4 é uma startup voltada à conexão de artesãos e artesãs para a
            venda de produtos personalizados. Na Elo4, os clientes podem
            encontrar uma variedade de produtos, como artigos para festas,
            objetos de decoração, bijuterias, produtos religiosos, enxovais e
            acessórios eco-friendly.
          </Texto>
          <Diferenciais>
            <span>Atendimento 24/7</span>
            <span>Entrega Rápida</span>
            <span>Pós-venda</span>
          </Diferenciais>
        </div>
      </QuemSomosContainer>
    );
  }
}

export default QuemSomos;
