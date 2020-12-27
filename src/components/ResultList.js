import React from 'react';
import Result from './Result';

export default class ResultList extends React.Component {

  render() {
    console.log(this.props.videos[0].get('title'));
    const results = this.props.videos.map((vprops, i) => {
      return (
        <Result title={vprops.get('title')} description={vprops.get('description')} url={vprops.get('url')} />
      )
    })

    return (
      <div className="resut-list">
        {results}
      </div>
    )
  }
}
