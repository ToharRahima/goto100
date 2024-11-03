// import { useState } from "react";

// const[gamer,setGamer]=useState;


function Player ({userObj}) {
    let number =Math.floor(1 + (Math.random() * (100-1)));
    
    return (
        <>
            <div>gamer: {userObj.name}</div>
            <div>number: {number}</div>
            <div>steps: </div>
            <div>score: {userObj.score}</div>
        </>
    )
}

export default Player;

