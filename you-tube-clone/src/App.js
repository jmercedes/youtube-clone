import React, { Component } from 'React';
import logo from './logo.svg';
import './App.css';
import searchBar from './components/searchBar';

class App extends Component {
  render() {
    return (
      <div>
        <searchBar />
      </div>
    );
  }
}

export default App;
