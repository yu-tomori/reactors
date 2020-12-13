import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SuggestWord from './SuggestWord';

export default function SuggestWordWrapper(props) {

    const WIKIPEDIA_API_URL = process.env.REACT_APP_WIKIPEDIA_API_URL;

    const [suggestWordList, setSuggestWordList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const suggestUrl = WIKIPEDIA_API_URL + '&search=' + props.searchWord;
          console.log(suggestUrl);
          axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
          
          const result = await axios.get(suggestUrl, {
            headers: {
              'Access-Control-Allow-Origin': '*',
            }
          })
          .then((results) => {
              const suggestWords = results.data[1];
              setSuggestWordList(suggestWords);
          },
          )
          .catch((e) => {
              console.log(e)
              console.log('通信に失敗しました。setSuggestWordList');
          });
        }
        
        fetchData();
    }, []);

    return (
      <>
        <ul>
          {suggestWordList.map( (suggestWord, index) => (
            <SuggestWord key={index} suggestWord={suggestWord}/>
          ))}
        </ul>
      </>
    )
}
