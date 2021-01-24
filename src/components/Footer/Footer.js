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
  height: 10vh;
  margin: 0 auto;
  display: flex;
  flex-direction: block;
  justify-items: center;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 1.2em;
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: block;
  align-items: center;
  margin: 0 20px 0 0;
`;

const LinksMidia = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: block;
  padding: 5px;

  &:hover {
    color: #f2970b;
  }
`;
const DivIcons = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

const DivParagraphs = styled.div`
  display: flex;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <BoxFooter>
          <DivIcons>
            <LinksMidia href="https://facebook.com" target="_blank">
              <FacebookIcon />{" "}
            </LinksMidia>
            <LinksMidia href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </LinksMidia>
            <LinksMidia href="https://twitter.com/" target="_blank">
              <TwitterIcon />
            </LinksMidia>
          </DivIcons>
          <Paragraph>|</Paragraph>
          <DivParagraphs>
            <Paragraph>E-mail: contato@elo4.com.br</Paragraph>
            <Paragraph>Telefone: +55 (011) 3366-3366</Paragraph>
          </DivParagraphs>
        </BoxFooter>
      </FooterContainer>
    );
  }
}

export default Footer;
