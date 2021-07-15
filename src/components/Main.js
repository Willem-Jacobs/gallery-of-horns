import { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import HornedBeast from "./HornedBeast";
import "./Main.css";
import dataBeasts from "../data.json";

class Main extends Component {
  render() {
    return (
      <main>
        <Container fluid="sm" className="pb-5">
          <Row className="g-4">
            {dataBeasts.map((beast, index) => (
              <HornedBeast
                key={index}
                title={beast.title}
                description={beast.description}
                imageUrl={beast.image_url}
              />
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
