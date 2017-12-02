import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  onSearchIputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar" >
        <input type="text"
        value={this.state.term}
        onChange={event => this.onSearchIputChange(event.target.value)}
        placeholder={"Serach"}
        />
      </div>
    )
  }
}

export default SearchBar;