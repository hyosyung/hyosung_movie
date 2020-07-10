import React from "react";

class App extends React.Component {
  //state를 사용하기 위해서 클래스형 컴포넌트를 작성할 것임
  //React.Component 클래스로부터 상속을 받음
  constructor(props){
    super(props);
    console.log('Hello');
  }

  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log('I just updated');
  }

  componentWillUnmount(){
    console.log("Goodbye");
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  Minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>This number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.Minus}>Minus</button>
      </div>
    );
  } //JSX를 반환하기 위해서 render()함수를 사용한다.
}
export default App;
