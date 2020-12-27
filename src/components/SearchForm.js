import React from 'react';
import axios from 'axios';
import SearchWordWrapper from './SearchWordWrapper';
// import SearchServiceList from './SearchServiceList';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class SearchForm extends React.Component {
  render() {
    return (
      <>
        <SearchWordWrapper onSearchYoutube={this.onSearchYoutube} />
        {/* <SearchServiceList /> */}
      </>
    )
  }
}
