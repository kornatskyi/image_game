import React, { useState, useEffect } from 'react';
import Field from './Field'
import Timer, { timeOut } from './Timer'

export default function GameStageAnswering(props) {
  let imgClassName = "flip-box-front";
  let unknownClassName = "flip-box-back";

  

  return (
    <div className="container">
      <div className="find-this">
        <p>Where is this fruit.</p>
        <div className="flip-box-inner">
          <div className={imgClassName + ""}>
            <img id="shown-img" src={props.rndImgValue} alt="" />
          </div>
          <div className={unknownClassName + ""} >
            <img className="images" src={props.unknown} />
          </div>
        </div>
      </div>
      <div>Your score: {props.score} </div>
      <div><Timer gameStage={props.gameStage} time={props.time} timerText={props.timerText} starter={props.starter} /> </div>
      <Field isFliped={props.isFliped} unknown={props.unknownValue} pointerEvents={props.pointerEvents} imgArrayProp={props.shuffledArraiOfImg} func={props.chooseAnswer} />
    </div>
  );


}