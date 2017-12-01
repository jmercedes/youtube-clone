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
      <div className="search-bar" >
        <input type="text"
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})}
        />
      </div>
    )
  }
}

export default SearchBar;