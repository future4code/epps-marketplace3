import React from "react";
import styled from "styled-components";
import LogoImg from "../../imgs/elo4-logo-cortada.png";

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  width: 100vw;
  background-color: #f2970b;
`;
const Hiperlinks = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
const ImgLogoHeader = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;
const UlistasBtnHeader = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;
const ListaBtnHeader = styled.li`
  margin: 0vh 10vh;
  font-size: 3.2vh;
`;
const BotaoHeader = styled.button`
  padding: 1vh;
  height: 6vh;
  width: 25vh;
  border-radius: 20vh;
  border-width: 0.2vh;
  background: #f2f2f2;
  cursor: pointer;
  font-size: 2.5vh;
`;

export class LayoutHeader extends React.Component {

  render() {
    return (
      <BoxHeader>
        <NavBar>
          <div>
            <Hiperlinks>
              <ImgLogoHeader
                src={LogoImg}
                onClick={this.props.irParaHome}
                alt="logo elo4"
              />
            </Hiperlinks>
          </div>
          <UlistasBtnHeader>
            <ListaBtnHeader>
              <Hiperlinks onClick={this}>Quem somos?</Hiperlinks>
            </ListaBtnHeader>
            <ListaBtnHeader>
              <BotaoHeader onClick={this.props.irParaProdutos}>
                Produtos
              </BotaoHeader>
            </ListaBtnHeader>
            <ListaBtnHeader>
              <BotaoHeader onClick={this.props.irParaFormulario}>
                Anunciar Produtos
              </BotaoHeader>
            </ListaBtnHeader>
          </UlistasBtnHeader>
        </NavBar>
      </BoxHeader>
    );
  }
}
