import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} width="300px" height="300px" alt={name} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg",
      rating:5,
  },
  {
    id: 2,
    name: "Mango",
    image:
      "https://img.insight.co.kr/static/2019/06/11/700/79wnq3r0238d4ik84z62.jpg",
      rating: 4.5,
  },
  {
    id: 3,
    name: "Watermelon",
    image:
      "https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/06/24/20190624000244_0.jpg",
      rating: 4.9,
  },
  {
    id: 4,
    name: "삼겹살",
    image: "https://cdn.imweb.me/thumbnail/20200324/876cb6cbe8132.jpg",
    rating:3,
  },
  {
    id: 5,
    name: "볶음밥",
    image: "https://i.ytimg.com/vi/kgLI5FRfbb0/maxresdefault.jpg",
    rating :2,
  },
];
//props=컴포넌트로 데이터를 보낼 때 사용할 수 있는 방법

function App() {
  //App이라는 컴포넌트를 정의한다.
  // props에 있는 데이터는 문자열일 경우를 제외하면 모두 중괄호로 감싸야 함!
  return (
    <div>
      {foodLike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
