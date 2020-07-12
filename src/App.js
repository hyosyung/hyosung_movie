import React from "react";
import axios from 'axios';

const List_movies=`https://yts-proxy.now.sh/list_movies.json`;

class App extends React.Component {
  state = {
    isLoading: true,
    movies:[],
  };

  getMovies=async()=>{
    const {
      data:{
        data:{movies},
      },//받아온 객체 안에 접근하여 가져오기!! movies라는 이름을 그대로 쓸 수 있다
    }=await axios.get(List_movies);
    console.log(movies);
  }

  componentDidMount(){
    this.getMovies();
    //개발자 도구 -> network탭 -> name의 json 확인!
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;//중괄호 안에 삼항 연산자
  }
}
export default App;
