import React, { useState, useEffect } from 'react';
import Field from './Field'
import Timer, { timeOut } from './Timer'

export default function GameStageResult(props) {

    return(
        <div><h1>Your result: {props.score}</h1></div>
    );


}