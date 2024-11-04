import Gamer from "./Gamer";
function Game({usersArr, setUsersArr, isLogin, setIsLogin}) {
    return (
        <>
        {usersArr.map((user, index)=> user.isPlaying && <Gamer user={user} key={index}/>)}
        </>
    
    )
}

export default Game;