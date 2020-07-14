import React from "react";
import axios from "axios";

const List_movies = `https://yts-proxy.now.sh/list_movies.json?sort_by=rating`;


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      }, //받아온 객체 안에 접근하여 가져오기!! movies라는 이름을 그대로 쓸 수 있다
    } = await axios.get(List_movies);
    this.setState({ movies, isLoading: false }); //movies:movies를 movies로 축약할 수 있다!
  };

  componentDidMount() {
    this.getMovies();
    //개발자 도구 -> network탭 -> name의 json 확인!
  }

  render() {
    const { isLoading } = this.state; //구조분해 할당 문법!
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>; //중괄호 안에 삼항 연산자
  }
}
export default App;
