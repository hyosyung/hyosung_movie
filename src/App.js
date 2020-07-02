import React from "react";

function Food({ fav }) {
  return <h1> I love {fav}</h1>;
}

//props=컴포넌트로 데이터를 보낼 때 사용할 수 있는 방법

function App() {
  //App이라는 컴포넌트를 정의한다.
  // props에 있는 데이터는 문자열일 경우를 제외하면 모두 중괄호로 감싸야 함!
  return (
    <div>
      <h1> Hello </h1>
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
