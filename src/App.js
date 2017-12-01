import React, { Component } from 'react';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCUKoxjrewyY7yYgCdyYXzhxkGL1TIzAcA';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null,
    }
    this.videoSearch('programming');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos,
        selectedVideo: videos[0],
       });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onSelectedVideo={(selectedVideo) => this.setState({selectedVideo})} 
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

export default App;
