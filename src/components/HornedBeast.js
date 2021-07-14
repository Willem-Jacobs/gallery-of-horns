import { Component } from "react";
import Badge from "react-bootstrap/Badge";

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
      <section>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
          onClick={this.favoriteClickHandler}
        />
        <p className="mb-0 pb-0">{this.props.description}</p>
        <i
          className="bi-suit-heart ml-2"
          style={{ fontSize: "2rem", color: "red" }}
        ></i>
        <h3 className="mt-0 pt-0 d-inline-block">
          <Badge pill bg="primary">
            {this.state.favoriteCounter}
          </Badge>
        </h3>
      </section>
    );
  }
}

export default HornedBeast;
