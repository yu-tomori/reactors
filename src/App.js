import React from 'react';
import axios from 'axios';
// import Header from './components/Header';
// import Youtube from './components/Youtube';
import MainVisual from './components/MainVisual'
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class App extends React.Component {
  state = {
    videos: [
      new Map([
        ['title', 'サンプルタイトル'],
        ['description', 'サンプル説明'],
        ['url', 'https://youtube.com']
      ]),
      new Map([
        ['title', 'サンプルタイトル2'],
        ['description', 'サンプル説明2'],
        ['url', 'https://youtube.com?v=2']
      ])
    ],
  }

  setVideos = (newVideos) => {
    this.setState({
      videos: newVideos,
    });
  }

  onSearchYoutube = (keyword) => {

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
    console.log(YOUTUBE_API_KEY)
    return (
      <>
        <MainVisual />
        {/* <Header onSearchYoutube={this.onSearchYoutube} /> */}
        <SearchForm onSearchYoutube={this.onSearchYoutube} setVideos={this.setVideos} />
        {/* 追加 */}
        {/* <Youtube videos={this.state.videos} /> */}
        <ResultList videos={this.state.videos} />
      </>
    )
  }
}
