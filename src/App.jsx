import React from 'react';
import './index.css';
// components
import {SearchForm} from './compornents/SearchForm';
import {ResultList} from './compornents/ResultList';


export const App = () => {

  return(
    <div className="app">
      <SearchForm />
      <ResultList />
    </div>
  );
};
// 次回コンポーネントの読み込みからスタート
