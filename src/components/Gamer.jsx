import React from "react";
import { useState } from "react"

function Gamer(props) {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [counter, setCounter] = useState(0);
    props.userObj.number = number;
    const isMyTurn = props.isMyTurn;
    let realTimeNumber = props.userObj.number;
    function countSteps() {
        setCounter(counter + 1)
        console.log(counter)
        props.setTurn(props.turn <= props.playersArr.length ? props.turn + 1 : 0)
    }

    function addOne() {
        setNumber(props.userObj.number + 1)
        realTimeNumber += 1;
        countSteps();
        handleWinning();
    }
    function subtract() {
        setNumber(props.userObj.number -= 1)
        realTimeNumber -= 1;
        countSteps();
        handleWinning();
    }
    function multiply() {
        setNumber(props.userObj.number * 2)
        realTimeNumber = realTimeNumber * 2;
        countSteps();
        handleWinning();
    }
    function divide() {
        setNumber(props.userObj.number / 2)
        realTimeNumber = realTimeNumber / 2;
        countSteps();
        handleWinning();
    }
    function handleWinning() {
        if (realTimeNumber === 100) {
            setTimeout(() => alert("you won"), 2000);
        }
    }
    return (
        <>
            <div>{props.userObj.turn}</div>
            <div>gamer:{props.userObj.name}</div>
            <div>number:{props.userObj.number}</div>
            <div>steps:{counter}</div>
            <div>last scores:{props.userObj.score}</div>
            <button onClick={addOne} disabled={!isMyTurn}>+1</button>
            <button onClick={subtract} disabled={!isMyTurn}>-1</button>
            <button onClick={multiply} disabled={!isMyTurn}>*2</button>
            <button onClick={divide} disabled={!isMyTurn}>/2</button>
        </>
    )
}
export default Gamer