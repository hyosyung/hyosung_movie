import React from "react";
import axios from "axios";
import Movie from "./Movie";

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
    //await가 끝난 뒤에 setstate가 실행-> isLoading이 false로 바뀜
    this.setState({ movies, isLoading: false }); //movies:movies를 movies로 축약할 수 있다!
  };

  componentDidMount() {
    this.getMovies();
    //개발자 도구 -> network탭 -> name의 json 확인!
  }

  render() {
    const { isLoading, movies } = this.state; //구조분해 할당 문법!
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader text">"Loading..."</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    ); //중괄호 안에 삼항 연산자
  }
}
export default App;
