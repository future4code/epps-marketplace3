import React from "react";
import styled from "styled-components";
import { AccessAlarm, InsertChartOutlinedTwoTone, ThreeDRotation } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Icon } from "@material-ui/core";



const DivFooter = styled.div`
    height:100vh;
    width:100vw;
    background-color:white;
`


const BoxFooter = styled.div`
    background-color:#5B5B58;
    width:100vw;
    height:6vh;
    position: absolute;
    display:flex;
    flex-direction:block;
    justify-items:center;
    justify-content:center;
    align-items:center;
    
`

const Paragrafo = styled.p`
    display:flex;
    flex-direction:block;
    align-items:center;
    margin-right:10px;

`

const LinksMidia = styled.a`
    text-decoration:none;
    color:inherit;
    display:flex;
    flex-direction:block;

`



class Footer extends React.Component {
  render() {
    return (
      <DivFooter>
        <BoxFooter>
          
            <LinksMidia href='www.instagram.com'><FacebookIcon/> </LinksMidia>
            <LinksMidia href='facebook.com'><InstagramIcon/></LinksMidia>
            <LinksMidia href='twitter.com'><TwitterIcon/></LinksMidia>
            
            
            <Paragrafo>E-mail: contato@elo4.com.br</Paragrafo>
            <Paragrafo>Telefone: +55 (011) 3366-3366</Paragrafo>
          
          
        </BoxFooter>

    </DivFooter>
    );
  }
}

export default Footer;
