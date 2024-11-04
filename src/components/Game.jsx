import Gamer from "./Gamer";
function Game({usersArr, setUsersArr, isLogin, setIsLogin}) {
    return (
        <>
        {usersArr.map((userObj, index)=> userObj.isPlaying && <Gamer userObj={userObj} key={index} setUsersArr={setUsersArr} index={index}/>)}
        </>
    
    )
}

export default Game;