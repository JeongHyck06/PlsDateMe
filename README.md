## 개발 동기

크리스마스인데 오전 6시에 일어나서 코딩애플 강좌좀 보다가 

리액트로 뭐 하나 만들어보고 싶어서 하나 만들었다

절대 크리스마스에 약속이 없어서 만들고 그런거 아니다

## 기능

![](https://velog.velcdn.com/images/jack0507/post/778ba7ba-a110-47b5-8ffb-53afb7fe18d1/image.png)

* 크리스마스에 데이트를 신청하는 웹 사이트이다

* 아니 버튼에 마우스를 올리면 버튼이 도망간다
 
 영상을 보는게 빠를것 같다
 
### 상태, 참조

```js
  const [buttonStyle, setButtonStyle] = useState({});
  const mainContentsRef = useRef(null);
```

* buttonStyle state를 만들어서 버튼의 상태를 만들었다

* mainContentsRef의 Ref를 만들어서 참조를 만들었다
 
  이 참조는 main-contents 클래스를 가진 div 요소를 가리킨다
  
### 함수

```js
  const moveButton = () => {
    const mainContents = mainContentsRef.current;
    const maxX = mainContents.clientWidth - 100;
    const maxY = mainContents.clientHeight - 50;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setButtonStyle({
      position: 'absolute',
      left: `${newX}px`,
      top: `${newY}px`
    });
  };
```
* 버튼을 움직이는 함수이다

* x와 y의 최대 값은 mainContents의 너비와 높이이며, 그 안에서 랜덤한 값의 좌표로 이동한다

```js
  const handleButtonClick = () => {
    alert('정말 고마워!')
  };
```
* 버튼을 누르면 정말 고마워 라는 알림창이 나온다

### 렌더링

```html
    <div className="App">
      <h1 className='title'>할거없으면 크리스마스에 만날래?</h1>
      <div className='main-contents' ref={mainContentsRef}>
        <button className='no' onClick={handleButtonClick}>응</button>
        <button className='yes' onMouseOver={moveButton} style={buttonStyle}>아니</button>
      </div>
    </div>
```

* 두 버튼과 제목을 렌더링한다

## 작동 영상 & 깃허브 링크

https://youtu.be/mZGMhmLhq4U?si=w6F7b5A2hYkLT-yj

https://github.com/JeongHyck06/PlsDateMe
