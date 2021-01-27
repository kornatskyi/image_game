import React, { useState, useEffect } from 'react'
import imgArray from './components/Images'
import { unknown } from './components/Images'
import Field from './components/Field'
import Timer, { timeOut } from './components/Timer'



function App() {

  const gameStages = ['preGame', 'remembering', 'guessing', 'result']

  const [result, setResult] = useState(true);

  const [starter, setStarter] = useState(false);

  const [rndImg, setRndImg] = useState(unknown);

  const[score, setScore] = useState(0);

  const [pointerEvents, setPointerEvents] = useState('none');

  const [shuffledArraiOfImg, setShuffledArraiOfImg] = useState(imgArray)

  const [roundCounter, setRoundCounter] = useState(0);

  const [timerText, setTimerTex] = useState("Timer:");

  const flipedImgs = [unknown,unknown,unknown,unknown,unknown,unknown /*,unknown,unknown,unknown,unknown,unknown,unknown,unknown,unknown,unknown,unknown*/]

  const [gameStage, setGameStage] = useState(gameStages[0]);

  const [resetTimer, setResetTimer] = useState(false);

  const [time, setTime] = useState(0);

  const [timeOutCust, setTimeOutCust] = useState(timeOut.a)





    timeOut.registerListener(function (val) {
    // return val;
      // setTimeOutCust(val);
      

    setGameStage(gameStages[val])
    setTime(15);
    
    setRndImg(imgArray[randomNumber(0, imgArray.length)]);

    setPointerEvents('auto');

    setShuffledArraiOfImg(shuffledArraiOfImg.map(img => ({ key: img.key, value: unknown.value})));

    console.log("TimeOut: " + val);
});



  function chooseAnswer(e) {

    console.log(e.target.id);
    
    if(e.target.id === rndImg.key) {
      console.log("correct");
      setTime(5);
      setScore((s) => s + 1)
      setResetTimer(true);
      setGameStage(gameStages[1]);
      setRndImg(imgArray[randomNumber(0, imgArray.length)]);
      setShuffledArraiOfImg(shuffle(imgArray));
    } else {
      console.log('incorrect');
      setResult(false);
      setGameStage(3);
    }

  }

  function startGame() {
    
    setShuffledArraiOfImg(shuffle(imgArray));

    setTime(5);

    setStarter(true);

    setRoundCounter((s) => s + 1)

    setGameStage(() => gameStages[1]);

 


  }


  const guesImmage = () => {
    
    setTime(15);
    
    setRndImg(imgArray[randomNumber(0, imgArray.length)]);

    setPointerEvents('auto');

    setShuffledArraiOfImg(shuffledArraiOfImg.map(img => ({ key: img.key, value: unknown.value})));




    setGameStage(() => gameStages[2]);
  }


  if(gameStage === gameStages[0]) {
    return  (
      <div className="container">
        <div>Game description.</div>
        <div className="find-this">
          <img src={unknown.value}  alt="" />
        </div>
        <div>Your score: {score} </div>
        <div><Timer gameStage={gameStage} time={time}  timerText={timerText} starter={starter}/> </div>
        <Field pointerEvents={pointerEvents} imgArrayProp={imgArray.map(img => ({ key: img.key, value: unknown.value}))} /*func={chooseAnswer}*/ />
        <a id="start-btn" href="/#" onClick={() => { 
          startGame();
          
          }}>Start</a>
      </div>
    );
  } else if (gameStage === gameStages[1]) {
    return  (
      <div className="container">
        <div className="find-this">
          <img src={unknown.value}  alt="" />
        </div>
        <div>Your score: {score} </div>
        <div><Timer gameStage={gameStage} time={time} timerText={timerText} starter={starter}/> </div>
        <Field pointerEvents={pointerEvents} imgArrayProp={shuffledArraiOfImg} /*func={chooseAnswer}*/ />
          <a id="next-btn" href="/#" onClick={() => { 
          guesImmage();
          }}>Show img</a>
      </div>
    );
  } else if (gameStage === gameStages[2]) {

    return  (
      <div className="container">
        {result?"": <h1>You loose</h1> }
        <div className="find-this">
          <p>Find this fruit.</p>
          <img src={rndImg.value}  alt="" />
        </div>
        <div>Your score: {score} </div>
        <div><Timer gameStage={gameStage} time={time} timerText={timerText} starter={starter}/> </div>
        <Field pointerEvents={pointerEvents} imgArrayProp={shuffledArraiOfImg} func={chooseAnswer} />
        <a>Pause</a>
        </div>
    );
    
  } else {
      return <div><h1>Your result: {score}</h1></div>;
  }

    


  
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomNumber(min, max) {  
  return Math.floor(Math.random() * (max - min) + min); 
}  








export default App;


/** 
    return  (
      <div className="container">
        {result?"": <h1>You loose</h1> }
        <div className="find-this">
          <p>Find this fruit.</p>
          <img src={rndImg.value}  alt="" />
        </div>
        <div>Your score: {score} </div>
        <div><Timer timerText={timerText} starter={starter}/> </div>
        <Field pointerEvents={pointerEvents} imgArrayProp={shuffledArraiOfImg} func={chooseAnswer} />
        <a id="start-btn" href="/#" onClick={() => { 
          startGame();
          
          }}>Start</a>
          <a id="next-btn" href="/#" onClick={() => { 
          guesImmage();
          
          }}>Show img</a>
      </div>
    );*/