import React from "react";
import AboutUs from "./AboutUs"
import Carrossel from "./Carrossel";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Carrossel />
        <AboutUs />
      </div>
    );
  }
}

export default Home;
