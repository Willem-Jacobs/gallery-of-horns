import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./HornedBeast.css";

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteCounter: 0 };
  }

  favoriteClickHandler = () => {
    this.setState((prevState) => {
      return { favoriteCounter: prevState.favoriteCounter + 1 };
    });
  };

  render() {
    return (
      <Col>
        <Card className="" style={{ width: "25rem", height: "30rem" }}>
          <Card.Img
            variant="top"
            src={this.props.imageUrl}
            onClick={this.favoriteClickHandler}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <p className="mb-0 pb-0">{this.props.description}</p>
              <i
                className="bi-suit-heart ml-2"
                style={{ fontSize: "2rem", color: "red" }}
              >
                {this.state.favoriteCounter ? this.state.favoriteCounter : ""}
              </i>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
