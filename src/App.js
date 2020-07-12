import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false});
    },6000);//setState함수 사용법 (첫번째 인자에 함수, 두번째 인자에 시간) = 시간이 지나면 함수 실행
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
export default App;
