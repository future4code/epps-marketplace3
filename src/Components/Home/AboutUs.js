import React from "react";
import styled from "styled-components";
import Logo from "../../imgs/elo4-logo.png";

const AboutUsContainer = styled.div`
  display: flex;
  padding: 2em;
  background-color: #f2f2f2;
  height: 25%;
  color: #311355;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 80%;
  width: auto;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 80%;
  }
`;

const TextAboutUs = styled.p`
  font-weight: bold;
  text-align: justify;
  margin-top: 5%;
`;

const Differentials = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15%;
  font-weight: 700;
  font-size: 15px;
`;

class QuemSomos extends React.Component {
  render() {
    return (
      <AboutUsContainer>
        <div>
          <Image src={Logo} />
        </div>
        <div>
          <h1>Quem somos?</h1>
          <TextAboutUs>
            {" "}
            A Elo4 é uma startup voltada à conexão de artesãos e artesãs para a
            venda de produtos personalizados. Na Elo4, os clientes podem
            encontrar uma variedade de produtos, como artigos para festas,
            objetos de decoração, bijuterias, produtos religiosos, enxovais e
            acessórios eco-friendly.
          </TextAboutUs>
          <Differentials>
            <span>Atendimento 24/7</span>
            <span>Entrega Rápida</span>
            <span>Pós-venda</span>
          </Differentials>
        </div>
      </AboutUsContainer>
    );
  }
}

export default QuemSomos;
