import { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import HornedBeast from "./HornedBeast";
import HornsFilter from "./HornsFilter";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { filterHorns: "all" };
  }

  hornSelectHandler = (event) => {
    this.setState({ filterHorns: event.target.value });
  };

  render() {
    let beastItem;
    if (this.state.filterHorns !== "all") {
      beastItem = this.props.dataBeasts
        .filter((beast) => beast.horns === +this.state.filterHorns)
        .map((beast, index) => (
          <HornedBeast
            key={index}
            title={beast.title}
            description={beast.description}
            imageUrl={beast.image_url}
            horns={beast.horns}
            showModal={() => this.props.showModal(beast)}
          />
        ));
    } else {
      beastItem = this.props.dataBeasts.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          description={beast.description}
          imageUrl={beast.image_url}
          horns={beast.horns}
          showModal={() => this.props.showModal(beast)}
        />
      ));
    }

    return (
      <main>
        <Container>
          <HornsFilter hornSelectHandler={this.hornSelectHandler} />
          <Row xs={1} sm={1} md={2} className="pt-3 pb-3">
            {beastItem}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
