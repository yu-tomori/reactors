import React from 'react';
import SearchConsole from './SearchConsole';
import SuggestWordList from './SuggestWordList';

export default function SuggestWordWrapper() {

    const searchWord='cat';

//   onSearchYoutube = (keyword) => {
//     const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;

//     axios
//       .get(url)
//       .then(response => {
//           this.setState({
//             videos: response.data.items,
//           });
//       })
//       .catch(() => {
//           console.log('通信に失敗しました');
//       });
//   }

    return (
      <>
        <SearchConsole />
        <SuggestWordList searchWord={searchWord}/>
      </>
    )
}
