import React, {useState } from 'react';
// import SearchConsole from './SearchConsole';
import SuggestWordList from './SuggestWordList';

export default function SuggestWordWrapper() {
  const [word, setWord] = useState("cat");

  return (
    <>
      <p>Word is {word}</p>
      <input type="text" onInput={(e) => setWord(e.target.value)} />
      <SuggestWordList searchWord={word} />
    </>
  )
}
