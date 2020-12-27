import React from 'react';
import axios from 'axios';
import './index.css';
// components
import {SearchForm} from './compornents/SearchForm';
import ResultList from './compornents/ResultList';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;




export const App = () => {

  return(
    <div className="app">
      <SearchForm />
      <ResultList />
    </div>
  );
};

