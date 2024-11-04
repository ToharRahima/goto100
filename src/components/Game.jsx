import { useState } from "react";
import Gamer from "./Gamer";
function Game({ usersArr, setUsersArr, playersArr, setPlayersArr }) {
    const [turn, setTurn] = useState(0);

    return (
        <>
            {usersArr.map((user, index) => user.isPlaying &&
                <Gamer userObj={user} key={index} isMyTurn={turn === index} setTurn={setTurn} index={index} turn={turn}
                    playersArr={playersArr} setPlayersArr={setPlayersArr} />)}
        </>
    )
}

export default Game;