import { Component } from "react";

import "./HornedBeast.css";

class HornedBeast extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p>{`Number of horns: ${this.props.horns}`}</p>
        <img
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
        />
        <p>{this.props.description}</p>
      </section>
    );
  }
}

export default HornedBeast;
