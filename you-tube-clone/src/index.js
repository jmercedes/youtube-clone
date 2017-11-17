import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCUKoxjrewyY7yYgCdyYXzhxkGL1TIzAcA';

YTSearch({key: API_KEY, term: "programming music"}, (videos) => {
  console.log({ videos })
});
class App extends Component {
  render () {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
