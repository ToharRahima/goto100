import Gamer from "./Gamer";
function Game({usersArr, setUsersArr, isLogin, setIsLogin}) {
    return (
        <>
        {usersArr.map((user, index)=> user.isPlaying && <Gamer userObj={user} key={index}/>)}
        </>
    
    )
}

export default Game;