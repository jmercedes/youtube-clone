import React, { Component } from 'react';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCUKoxjrewyY7yYgCdyYXzhxkGL1TIzAcA';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'football'}, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
