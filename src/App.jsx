import React from 'react';
import axios from 'axios';
// components
import SearchForm from './components/SearchForm';
// import ResultList from './components/ResultList';
import Youtube from './components/Youtube';

import './index.css';


const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class App extends React.Component {
  state = {
    videos: [],
  }

  onSerchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;

    axios
      .get(url)
      .then(response => {
          this.setState({
            videos: response.data.items,
          });
      })
      .catch(() => {
          console.log('通信に失敗しました');
      });
  }

  render() {
    return (
      <>
        <SearchForm onSerchYoutube={this.onSerchYoutube} />
        
        <Youtube videos={this.state.videos}/>
      </>
    )
  }
}
