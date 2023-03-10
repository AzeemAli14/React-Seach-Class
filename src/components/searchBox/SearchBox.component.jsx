import React, { Component } from "react";
import "./searchBox.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`component-searchBox ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onSearchHandler}
      />
    );
  }
}

export default SearchBox;
