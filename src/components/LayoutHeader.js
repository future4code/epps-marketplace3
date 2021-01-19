import React from 'react';
import styled from "styled-components"
import LogoImg from "../imgs/elo4-logo-cortada.png"


const BoxHeader = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  
    nav {
        width: 100%;
        background-color: #F2970B;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 15px;
        align-items: center;
        z-index: 1;
        /* position: fixed; */
        box-shadow: 0px 5px 10px -3px;
    }
    a {
      display: flex;
      justify-content: center;
      width: 150px;
      cursor: pointer;
    }
    .logo-box {
      display: flex;
      justify-content: center;
      width: 150px;
      }
    img {
        display: flex;
        justify-content: center;
        align-items: center;   
    }

  
    ul {
      list-style: none;
      display: flex;
      font-family: "Roboto", sans-serif;
    }
    li {
      margin: 5px 50px;
      
    }
    button {
      padding: 5px;
      height: 40px;
      width: 150px;
      background: #F2F2F2;
      border-radius: 20px;
      border-width: 2px;
    
      cursor: pointer;
    }
    /* .quemSomos-link {
      display: flex;
      justify-content: center;
      padding: 5px;
      height: 40px;
      width: 150px;
      text-decoration: 1px solid;
      } */
    `


export class LayoutHeader extends React.Component {
    render() {
        return (
            <div>
                <BoxHeader>
                    <nav>
                        <div className="logo-box">
                            <a onClick={this.irParaHome}>
                                <img src={LogoImg} alt="logo elo4" />
                            </a>
                        </div>
                        <ul>
                            <li>
                                <a className="quemSomos-link" onClick={this}>
                                    Quem somos?
                                </a>
                            </li>
                            <li>
                                <button onClick={this}>
                                    Produtos
                                </button>
                            </li>
                            <li>
                                <button onClick={this}>
                                    Anunciar Produtos
                                </button>
                            </li>
                            <li>
                                <button onClick={this}>
                                    Carrinho
                                </button>
                            </li>
                        </ul>
                    </nav>
                </BoxHeader>
            </div>
        )
    }
}