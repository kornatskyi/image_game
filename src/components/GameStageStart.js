import React, { useState, useEffect } from 'react';


export default function GameStageStart(props) {


    return (

        <div className="container">
        <img id="game-rules" src={props.gameRulesImg}/>
        <a id="start-btn" href="###" onClick={() => {
          props.startGame();

        }}>Start</a>
      </div>
    );

}