import { useState } from "react";
import Game from "./Game";
function Login({ usersArr, setUsersArr, isLogin, setIsLogin}) {
    const [userName, setUserName] = useState("");
    const [userObj, setUserObj] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        let myUsersArr = JSON.parse(localStorage.getItem('usersArr'));
        let isKnownUser = false;
        console.log(myUsersArr.length);

        for (let i = 0; i < myUsersArr.length; i++) {
            if (myUsersArr[i].name === userName) {
                myUsersArr[i].isPlaying = true;
                isKnownUser = true;
                setUserObj(myUsersArr[i]);
            }
        }
        if (!isKnownUser) {
            let newUser = {
                name: userName,
                isPlaying: true,
                score: 0
            }
            setUserObj(newUser);

            myUsersArr.push(newUser);
        }
        setUsersArr(myUsersArr);
        localStorage.setItem("usersArr", JSON.stringify(myUsersArr));
    }

    return (
        <>
            <h1>log in</h1>
            <form>
                <label htmlFor="userName">user name
                    <input id="userName" type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <button onClick={handleSubmit}>submit</button>
            </form>
            {usersArr.map((userObj, index) => {
            return userObj.isPlaying && <p key={index}>gamer {index + 1}: {userObj.name}</p>}
            )}
            <button onClick={()=>{setIsLogin(false)}}>start game</button>
        </>
    )
}
export default Login