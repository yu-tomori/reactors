import React from 'react';

export const SearchForm = () =>{
  const SerachWordValue = "";

  // handleChange(){
  //   const handleChange = (event) => SetSearchWordText(event.target.value);
  // }

  return(
    <div className="SearchForm">
      <div className="SerachWordWapper flex">
        <input 
          type="text" 
          value={SerachWordValue} 
          // onChange={handleChange}
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
