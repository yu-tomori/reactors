import React from 'react';
import _ from 'lodash';


export default class SearchForm extends React.Component{

  state = {
    keyword: "",
  }
  
  handleChangeInput = (e) => {
    this.setState({keyword: e.target.value});
    this._debounce(e.target.value)
  }

  _debounce = _.debounce(value => {
    this.props.onSerchYoutube(value);
  },200);


  
  render() {
    return(
      <div className="SearchForm">
        <div className="SerachWordWapper flex">
          <input 
            onChange={this.handleChangeInput}
            value={this.state.keyword}
          />
          <p className="cancel">キャンセル</p>
        </div>
        <div className="SerchServiceList flex">
          <p className="SerchService active">All</p>
          <p className="SerchService">はてなブログ</p>
          <p className="SerchService">YOUTUBE</p>
          <p className="SerchService">Google</p>
          <p className="SerchService">Google</p>
          <p className="SerchService">Google</p>
        </div>
      </div>
    );
  }
}
