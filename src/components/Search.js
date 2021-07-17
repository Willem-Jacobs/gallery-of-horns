import { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Search extends Component {
  render() {
    const searchClear = () => {};

    return (
      <InputGroup
        className="pt-3 pb-3 m-auto"
        style={{
          width: "20rem",
        }}
      >
        <InputGroup.Text>
          <i className="bi-search" />
        </InputGroup.Text>
        <FormControl
          value={this.props.searchString}
          placeholder="Search"
          onChange={(event) => this.props.onChange(event)}
        ></FormControl>
        <InputGroup.Text>
          <i className="bi-x-circle" onClick={this.props.clearSearch} />
        </InputGroup.Text>
      </InputGroup>
    );
  }
}

export default Search;
