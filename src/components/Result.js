import React from 'react';

const Result = (props) => {
    return (
        <div className="result-wrapper">
            <p>タイトル: {props.title}</p>
            <p>概要: {props.description}</p>
            <p>ドメイン: {props.domain}</p>
        </div>
    );
};

export default Result;