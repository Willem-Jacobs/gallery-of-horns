import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./SelectedBeast.css";

class SelectedBeast extends Component {
  render() {
    return (
      <Modal {...this.props} centered onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>{this.props.dataBeast.title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.dataBeast.image_url}
            alt={this.props.dataBeast.title}
          />
          <h3>{this.props.dataBeast.description}.</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
