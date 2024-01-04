import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [buttonStyle, setButtonStyle] = useState({});
  const mainContentsRef = useRef(null);

  //마우스 이동
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

  //버튼 누르면
  const handleButtonClick = () => {
    alert('정말 고마워!');
  };


  return (
    <div className="App">
      <h1 className='title'>할거없으면 크리스마스에 만날래?</h1>
      <div className='main-contents' ref={mainContentsRef}>
        <button className='no' onClick={handleButtonClick}>응</button>
        <button className='yes' onMouseOver={moveButton} style={buttonStyle}>아니</button>
      </div>
    </div>
  );
}

export default App;
