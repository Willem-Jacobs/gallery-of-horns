import { Component } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import "./HornsFilter.css";

class HornsFilter extends Component {
  render() {
    return (
      <Form className="pt-4">
        <FloatingLabel controlId="hornFilter" label="Filter By Horns">
          <Form.Select onChange={this.props.hornSelectHandler}>
            <option value="all">All</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">100+ Horns</option>
          </Form.Select>
        </FloatingLabel>
      </Form>
    );
  }
}

export default HornsFilter;
