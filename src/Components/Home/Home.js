import React from "react";
import QuemSomos from "./QuemSomos";
import Carrossel from "./Carrossel"

class Home extends React.Component {
  render() {
    return (
      <div>
        <Carrossel />
        <QuemSomos />
      </div>
    );
  }
}

export default Home;
