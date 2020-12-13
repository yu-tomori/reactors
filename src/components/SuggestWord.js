import React from 'react';

export default function SuggestWord(props){
    const suggestWord = props.suggestWord
    console.log(suggestWord)

    return(
        <li>{suggestWord}</li>
    )
}