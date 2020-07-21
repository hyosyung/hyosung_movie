# 리액트로 만들어본 영화 앱

#메인 화면

![main](https://user-images.githubusercontent.com/66842710/88022091-96c94980-cb69-11ea-8cf8-24a154398164.JPG)

### API를 가져온 사이트(yts)

![yts](https://user-images.githubusercontent.com/66842710/88022292-fd4e6780-cb69-11ea-8445-cdbca4420e0a.JPG)


##### 영화의 정보는 async 와 await를 이용한 비동기 함수로 불러옵니다. (fetch가 아닌 axios.get을 사용)
##### 클래스형 컴포넌트의 componentDidMount()안에 비동기 함수를 넣고, 함수가 끝나면 loading이 끝나도록 만들었습니다.
##### 즉 데이터를 받아오기 전까지는 'loading...' 이 출력됩니다.

### API에서 장르와 년도, 제목, 요약등을 불러와서 출력
![1](https://user-images.githubusercontent.com/66842710/88022391-22db7100-cb6a-11ea-833a-d643fda2b524.JPG)

##### 클릭하면 detail을 설명하는 창으로 이동됩니다. 만약 detail이 undefine일 경우 다시 main페이지로 리다이렉트 됩니다.

### CSS를 이용하여 기본적인 디자인
```
.movies .movie {
    background-color: white;
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    /* 박스에 그림자 효과를 추가함! */
}

.movies .movie a {
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    grid-gap: 20px;
    text-decoration: none;
    color: inherit;
}

.movie img {
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}
```
##### 하얀색 직사각형에 그림자가 있는 모양을 만들었습니다.

### 네비게이션
![네비](https://user-images.githubusercontent.com/66842710/88022847-f6742480-cb6a-11ea-849a-c1accafd391c.JPG)

##### main페이지를 담은 컴포넌트의 exact prop을 true로 설정하여, 페이지를 이동할 때, 전체가 새로고침 되지 않도록 하였습니다.
##### a태그를 이용하면 리액트의 장점을 살릴 수 없으므로 {Link}를 react-router-dom에서 추가하여 Link를 사용!
