import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #5b5b58;
`;

const BoxFooter = styled.div`
  width: 70vw;
  height: 5vh;
  margin: 0 auto;
  display: flex;
  flex-direction: block;
  justify-items: center;
  justify-content: space-around;
  align-items: center;
`;

const Paragrafo = styled.p`
  display: flex;
  flex-direction: block;
  align-items: center;
  margin:0 20px 0 0;
`;

const LinksMidia = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: block;
`;
const DivIcons = styled.div`
  display: flex;
`;

const DivParagrafos = styled.div`
  display: flex;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <BoxFooter>
          <DivIcons>
            <LinksMidia href="www.instagram.com">
              <FacebookIcon />{" "}
            </LinksMidia>
            <LinksMidia href="facebook.com">
              <InstagramIcon />
            </LinksMidia>
            <LinksMidia href="twitter.com">
              <TwitterIcon />
            </LinksMidia>
          </DivIcons>
          <Paragrafo>|</Paragrafo>
          <DivParagrafos>
            <Paragrafo>E-mail: contato@elo4.com.br</Paragrafo>
            <Paragrafo>Telefone: +55 (011) 3366-3366</Paragrafo>
          </DivParagrafos>
        </BoxFooter>
      </FooterContainer>
    );
  }
}

export default Footer;
