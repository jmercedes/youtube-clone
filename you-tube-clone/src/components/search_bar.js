import React, { Component } from 'react';

class SearchBar extends Component {
  constructor () {
    super();

    this.state = { term: ''};
  }
  
  render () {
    return (
      <div>
        <h1>Youtube Clone</h1>
        <input
          value={this.state.value} 
          onChange={(e) => this.setState({term: e.target.value})} />
        <p>Input: {this.state.term}</p>
      </div>
    )
  }
}

export default SearchBar;
