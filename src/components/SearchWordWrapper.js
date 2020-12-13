import React from 'react';
import SearchWord from './SearchWord';
import SuggestWordList from './SuggestWordList';
import SuggestWord from './SuggestWord';

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
        <SearchWord />
        <SuggestWordList searchWord={searchWord}/>
      </>
    )
}
