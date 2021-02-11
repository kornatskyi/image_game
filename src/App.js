import React, { useState, useEffect } from 'react'
import imgArray, { unknown, gameRulesImg } from './components/Images'
import Field from './components/Field'
import Timer, { timeOut } from './components/Timer'
import GameStageStart from './components/GameStageStart'
import GameStageRemembering from './components/GameStageRemembering'
import GameStageAnswering from './components/GameStageAnswering'
import GameStageResult from './components/GameStageResult'


function App() {
  const timeForGuessing = 60;

  const timeForRemembering = 60;

  const gameStages = ['preGame', 'remembering', 'guessing', 'result']

  const [result, setResult] = useState(true);

  const [starter, setStarter] = useState(false);

  const [rndImg, setRndImg] = useState(unknown);

  const [score, setScore] = useState(0);

  const [pointerEvents, setPointerEvents] = useState('auto');

  const [shuffledArraiOfImg, setShuffledArraiOfImg] = useState(imgArray)

  const [roundCounter, setRoundCounter] = useState(0);

  const [timerText, setTimerTex] = useState("Timer:");

  const flipedImgs = [unknown, unknown, unknown, unknown, unknown, unknown /*,unknown,unknown,unknown,unknown,unknown,unknown,unknown,unknown,unknown,unknown*/]

  const [gameStage, setGameStage] = useState(gameStages[0]);

  const [resetTimer, setResetTimer] = useState(false);

  const [time, setTime] = useState(0);

  const [timeOutCust, setTimeOutCust] = useState(timeOut.a)

  const [isFliped, setIsFliped] = useState(false);








  function chooseAnswer(e) {

    console.log(e.target.id);

    if (e.target.id === rndImg.key) {
      console.log("correct");
      setTime(timeForRemembering);
      setScore((s) => s + 1)
      setResetTimer(true);
      setGameStage(gameStages[1]);
      setIsFliped(false);
      setRndImg(imgArray[randomNumber(0, imgArray.length)]);
      setShuffledArraiOfImg(shuffle(imgArray));
    } else {
      console.log('incorrect');
      setResult(false);
      setGameStage(gameStages[3]);
    }

  }

  function startGame() {

    setShuffledArraiOfImg(shuffle(imgArray));

    setTime(timeForRemembering);

    setStarter(true);

    setRoundCounter((s) => s + 1);

    setGameStage(() => gameStages[1]);
    setIsFliped(false);
  }



  const guesImmage = () => {

    setTime(timeForGuessing);

    setRndImg(imgArray[randomNumber(0, imgArray.length)]);

    setPointerEvents('auto');

    // setShuffledArraiOfImg(shuffledArraiOfImg.map(img => ({ key: img.key, value: unknown.value })));

    setGameStage(() => gameStages[2]);
    setIsFliped(true);
  }

  //Function that executes if aInternal variable in this object (timeOut) changes. If it changes to value '2' then function sets GameStage to guessing.
  timeOut.registerListener(function (val) {

    setGameStage(gameStages[val]/*gonna be guessingStage if comes value '2'*/)
    setTime(timeForGuessing);

    setRndImg(imgArray[randomNumber(0, imgArray.length)]);

    setPointerEvents('auto');

    // setShuffledArraiOfImg(shuffledArraiOfImg.map(img => ({ key: img.key, value: unknown.value })));

    console.log("TimeOut: " + val);
  });




  if (gameStage === gameStages[0]) {
    return (
      <GameStageStart gameRulesImg={gameRulesImg} startGame={startGame} />
    );
  } else if (gameStage === gameStages[1]) {
    
    return (
    
      <GameStageRemembering isFliped={isFliped} unknownValue={unknown.value} score={score} gameStage={gameStage} time={time} timerText={timerText} starter={starter} shuffledArraiOfImg={shuffledArraiOfImg} pointerEvents={pointerEvents} guesImmage={guesImmage} />
    );

  } else if (gameStage === gameStages[2]) {
    

    return (
      <GameStageAnswering isFliped={isFliped}  rndImgValue={rndImg.value} score={score} gameStage={gameStage} time={time} timerText={timerText} starter={starter} unknownValue={unknown.value} pointerEvents={pointerEvents} shuffledArraiOfImg={shuffledArraiOfImg} chooseAnswer={chooseAnswer} />
    );

  } else {
    return (
      <GameStageResult score={score}/>
    );
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


