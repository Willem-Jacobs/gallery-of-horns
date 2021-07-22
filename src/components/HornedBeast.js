import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import Badge from "react-bootstrap/Badge";

import "./HornedBeast.css";
import Favorite from "./Favorite";

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteCounter: 0 };
  }

  favoriteUpdateHandler = () => {
    this.setState((prevState) => ({
      favoriteCounter: prevState.favoriteCounter + 1,
    }));
  };

  render() {
    return (
      <Col className="pt-3">
        <Card className="p-1" style={{ width: "33rem", height: "33rem" }}>
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
            onClick={() => this.props.showModal(this.state.favoriteCounter)}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <p className="mb-0 pb-0">{this.props.description}</p>
              <p>{`Horns: ${this.props.horns}`}</p>
              <Favorite
                onClick={this.favoriteUpdateHandler}
                favoriteCounter={this.state.favoriteCounter}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
