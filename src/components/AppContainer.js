import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home"
import { LayoutHeader } from "../components/Header/LayoutHeader";


export class AppContainer extends Component {
  render() {
    return (
      <div>
        <LayoutHeader />
        <Home />
        <Footer />
      </div>
    );
  }
}
