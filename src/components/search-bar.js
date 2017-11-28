import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      term: ""
    }
  }

  render() {
    return (
      <div>
        <input type="text"
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})}
        />
        <h2>{this.state.term}</h2>
      </div>
    )
  }
}

export default SearchBar;