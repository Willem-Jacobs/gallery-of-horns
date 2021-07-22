import { Component } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import dataBeasts from "./data.json";

import "./App.css";
import SelectedBeast from "./components/SelectedBeast";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      dataBeast: {},
      searchString: "",
    };
  }

  showModal = (data) => {
    this.setState({
      showModal: true,
      dataBeast: data,
    });
  };

  hideModal = () => {
    this.setState({ showModal: false, dataBeast: {} });
  };

  searchHandler = (event) => {
    this.setState({ searchString: event.target.value });
  };

  searchClearHandler = () => {
    this.setState({ searchString: "" });
  };

  render() {
    const dataSet = dataBeasts.filter((beast) =>
      beast.title.toLowerCase().includes(this.state.searchString.toLowerCase())
    );

    let dataOutput = <h3 className="text-center">No Horned Beasts Found</h3>;
    if (dataSet.length > 0) {
      dataOutput = <Main dataBeasts={dataSet} showModal={this.showModal} />;
    }

    return (
      <>
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.hideModal}
          dataBeast={this.state.dataBeast}
        />
        <Header />
        <Search
          onChange={this.searchHandler}
          clearSearch={this.searchClearHandler}
          searchString={this.state.searchString}
        />
        {dataOutput}
        <Footer />
      </>
    );
  }
}

export default App;
