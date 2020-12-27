import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SuggestWord from './SuggestWord';

export default function SuggestWordWrapper(props) {

    const WIKIPEDIA_API_URL = process.env.REACT_APP_WIKIPEDIA_API_URL;
    console.log('searchWord is ' + props.searchWord);

    const [suggestWordList, setSuggestWordList] = useState([]);

    useEffect(() => {
      console.log('useEffect, ' + props.searchWord);
      let suggestUrl = WIKIPEDIA_API_URL + '&search=' + props.searchWord;
      console.log('suggestUrl: ' + suggestUrl);
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
      axios.get(suggestUrl, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then((results) => {
          let suggestWords = results.data[1];
          setSuggestWordList(suggestWords);
      },
      )
      .catch((e) => {
          console.log(e)
          console.log('通信に失敗しました。setSuggestWordList');
      });
    }, [props.searchWord]);

    return (
      <>
        <ul>
          {suggestWordList.map( (suggestWord, index) => (
            <SuggestWord key={index} suggestWord={suggestWord} />
          ))}
        </ul>
      </>
    )
}
