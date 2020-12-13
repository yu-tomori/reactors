import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosSetting from '../axiosSetting';
import SuggestWord from './SuggestWord';

export default function SuggestWordWrapper(props) {

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

    // const WIKIPEDIA_API_URL = process.env.WIKIPEDIA_API_URL;

    const WIKIPEDIA_API_URL='https://ja.wikipedia.org/w/api.php?action=opensearch&format=json';
    console.log(WIKIPEDIA_API_URL);

    // const [suggestWordList, setSuggestWordList] = useState([]);
    const [suggestWordList, setSuggestWordList] = useState();

    useEffect(()=>{
        const feachSuggestWord = async () => {

            const suggestUrl = WIKIPEDIA_API_URL + '&search=' + props.searchWord;
            console.log(suggestUrl);
            axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.get(suggestUrl, {
              headers: {
                'Access-Control-Allow-Origin': '*',
              }
            })
            .then((results) => {
                const data = results.data;
                setSuggestWordList(data)
                console.log(suggestWordList[3])
            },
            )
            .catch((e) => {
                console.log(e)
                console.log('通信に失敗しました。setSuggestWordList');
            });
        }
        feachSuggestWord();
    }, []);


    return (
      <>
        {/* <SuggestWord suggestWords={suggestWords}/> */}
        {/* <SuggestWord/> */}
      </>
    )
}
