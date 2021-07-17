import { Component } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import dataBeasts from "./data.json";

import "./App.css";
import SelectedBeast from "./components/SelectedBeast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, dataBeast: {} };
  }

  showModal = (data) => {
    this.setState({ showModal: true, dataBeast: data });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.hideModal}
          dataBeast={this.state.dataBeast}
        />
        <Header />
        <Main dataBeasts={dataBeasts} showModal={this.showModal} />
        <Footer />
      </>
    );
  }
}

export default App;
