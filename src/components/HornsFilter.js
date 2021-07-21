import { Component } from "react";
import Form from "react-bootstrap/Form";

class HornsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: "all",
    };
  }

  hornSelectHandler = (event) => {
    this.setState({
      filterValue: event.target.value,
    });
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="hornSelect">
          <Form.Label>Filter By Horns</Form.Label>
          <Form.Select onChange={this.hornSelectHandler}>
            <option value="all">All</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">100+ Horns</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  }
}

export default HornsFilter;
