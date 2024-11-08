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
        setTimeout(handleWinning, 1000);

    }
    function subtract() {
        setNumber(props.userObj.number -= 1)
        realTimeNumber -= 1;
        countSteps();
        setTimeout(handleWinning, 1000);

    }
    function multiply() {
        setNumber(props.userObj.number * 2)
        realTimeNumber = realTimeNumber * 2;
        countSteps();
        setTimeout(handleWinning, 1000);
    }
    function divide() {
        setNumber(Math.floor(props.userObj.number / 2))
        realTimeNumber = Math.floor(realTimeNumber / 2)
        countSteps();
        setTimeout(handleWinning, 1000);
    }
    function handleWinning() {
        if (realTimeNumber === 100) {
        props.setUsersArr((prev)=>{
            prev[props.index].isPlaying = false;
            prev[props.index].score=`${counter+1}`;
            prev[props.index].score=`${counter+1}`;
            localStorage.setItem("usersArr",JSON.stringify([...prev]))
            console.log([...prev]);
            return [...prev];


        })
        // setTimeout(()=>alert(`you won! your score is ${counter+1}`), 2000);
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