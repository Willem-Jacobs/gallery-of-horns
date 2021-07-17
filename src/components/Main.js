import { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import HornedBeast from "./HornedBeast";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <main>
        <Container fluid="sm" className="pb-5">
          <Row className="g-4">
            {this.props.dataBeasts.map((beast, index) => (
              <HornedBeast
                key={index}
                title={beast.title}
                description={beast.description}
                imageUrl={beast.image_url}
                showModal={() => this.props.showModal(beast)}
              />
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
