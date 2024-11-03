import { useState } from "react";
import Player from "./Player";
function Login(usersArr,setUsersArr){
    const [userName, setUserName]= useState();
    let userObj;
    
    function handleSubmit(event){
        event.preventDefault();
        let myUsersArr = JSON.parse(localStorage.getItem('usersArr'));
        let isKnownUser=false;
        console.log(myUsersArr.length);
        
        for (let i=0; i<myUsersArr.length; i++){
            if (myUsersArr[i].name=== userName){
                myUsersArr[i].isPlaying = true;
                isKnownUser=true;
                userObj=myUsersArr[i];
            } 
        }
        if (!isKnownUser){
            let newUser = {
                name: userName,
                isPlaying: true,
                score: 0
            }
            userObj=newUser;
            myUsersArr.push(newUser);
        }
        JSON.stringify(myUsersArr);
        localStorage.setItem("usersArr", JSON.stringify(myUsersArr));
        return <Player userObj={userObj}/>
        console.log('userObj: ', userObj);
    }

    
    return(
        <>
        <h1>log in</h1>
        <form>
            <label htmlFor="userName">user name
            <input id="userName" type="text" name="userName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </label>
            <button onClick={handleSubmit}>submit</button>
        </form>
        
        </>
    )
}
export default Login