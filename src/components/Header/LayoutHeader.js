import React from "react";
import styled from "styled-components";
import LogoImg from "../../imgs/elo4-logo-cortada.png";

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: #f2970b;
`;
const HiperlinkHome = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;
const ImgLogoHeader = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
const UlistsBtnHeader = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-family: "Roboto", sans-serif;
  margin: 0vh 10vh;
`;
const ListBtnHeader = styled.li`
  margin: 0vh 10vh;
  font-size: 3.2vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonHeader = styled.button`
  padding: 1vh;
  height: 6vh;
  width: 25vh;
  border-radius: 10px;
  border-width: 0.2vh;
  background: #f2f2f2;
  cursor: pointer;
  font-size: 2.5vh;

  &:focus {
    outline: none;
  }
`;

export class LayoutHeader extends React.Component {
  render() {
    return (
      <BoxHeader>
        <NavBar>
          <div>
            <HiperlinkHome>
              <ImgLogoHeader
                src={LogoImg}
                onClick={this.props.goToHome}
                alt="logo elo4"
              />
            </HiperlinkHome>
          </div>
          <UlistsBtnHeader>
            <ListBtnHeader>
              <ButtonHeader onClick={this.props.goToProducts}>
                Produtos
              </ButtonHeader>
            </ListBtnHeader>
            <ListBtnHeader>
              <ButtonHeader onClick={this.props.goToForm}>
                Anunciar Produtos
              </ButtonHeader>
            </ListBtnHeader>
          </UlistsBtnHeader>
        </NavBar>
      </BoxHeader>
    );
  }
}
