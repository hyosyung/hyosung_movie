import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//ReactDOM.render 함수의 동작 원리 -> App.js의 컴포넌트를 아이디가 root인 엘리먼트에 그린다.
ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);