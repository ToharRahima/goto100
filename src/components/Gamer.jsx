import React from "react";
import { useState } from "react" 

function Gamer(props){

    const[number,setNumber]=useState(Math.floor(Math.random() * 100) + 1);
    const[counter,setCounter]=useState(0);
    props.userObj.number=number
    
    function countSteps(){
        setCounter(counter+1)
        console.log(counter)    
    }

    function addOne(){
        setNumber(props.userObj.number+1)
        props.userObj.number = props.userObj.number + 1
        countSteps();
    }
    function subtract(){
        setNumber(props.userObj.number-=1)
        countSteps();
    }
    function multiply(){
        setNumber(props.userObj.number*2)
        countSteps();
    }
    function divide(){
        setNumber(props.userObj.number/2)
        countSteps();
    }
    function handleWinning(){
        if (props.userObj.number===100){
            console.log("you won")
        }
    }
return(
    <>
    <div>{props.userObj.turn}</div>
    <div>gamer:{props.userObj.name}</div>
    <div>number:{props.userObj.number}</div>
    <div>steps:{counter}</div>
    <div>last scores:{props.userObj.score}</div>
    <button onClick={addOne}>+1</button>
    <button onClick={subtract}>-1</button>
    <button onClick={multiply}>*2</button>
    <button onClick={divide}>/2</button>
    </>
)
}
export default Gamer

