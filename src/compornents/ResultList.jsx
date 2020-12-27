import React from 'react';

export default class ResultList extends React.Component {
    state = {
      videos: [],
      keyword: 'Create-React-APP'
    }
  
    componentDidMount() {
      const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${this.state.keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;
  
      axios
        .get(url)
        .then(response => {
            this.setState({
              videos: response.data.items,
            });
        })
        .catch(() => {
            console.log('通信に失敗しました');
        });
    }
  
    render() {
      console.log(this.state.videos)
      return (
        <>
         <h1>テキストが入ります</h1>
        </>
      )
    }
  }

// export const ResultList = () => {
//     return(
//         <div className="ResultList">
//             <div className="Result">
//                 <div class="Dummyimg"></div>
//                 <p>内容が入ります内容が入ります内容が入ります内容が入ります</p>
//             </div>
//             <div className="Result">
//                 <div class="Dummyimg"></div>
//                 <p>内容が入ります内容が入ります内容が入ります内容が入ります</p>
//             </div>
//             <div className="Result">
//                 <div class="Dummyimg"></div>
//                 <p>内容が入ります内容が入ります内容が入ります内容が入ります</p>
//             </div>
//     </div>        
//     );
// }