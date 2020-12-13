import React from 'react';
import Result from './Result';

export default class SearchForm extends React.Component {
  render() {
    return (
      <>
        <Result title="記事タイトル1" description="概要サンプル1" domain="sample.com" />
        <Result title="記事タイトル2" description="概要サンプル2" domain="sample1.com" />
        <Result title="記事タイトル3" description="概要サンプル3" domain="sample2.com" />
      </>
    )
  }
}
