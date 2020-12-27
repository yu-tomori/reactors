import React from 'react';

export class SearchForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ""}

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return(
      <div className="SearchForm">
        <div className="SerachWordWapper flex">
          <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange}
            placeholder="テキストを入力"
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

  // handleChange(){
  //   const handleChange = (event) => SetSearchWordText(event.target.value);
  // }

}
