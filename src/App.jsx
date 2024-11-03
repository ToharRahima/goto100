import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Player from "./components/Player";


function App() {
  const [usersArr, setUsersArr] = useState([{name: "dave",isPlaying: true, score: [6,9]}]);
  
  localStorage.setItem("usersArr", JSON.stringify(usersArr));
  console.log('usersArr: ', usersArr);

  return(
    <>
    <Login usersArr={usersArr} setUsersArr={setUsersArr}/>
    {/* {usersArr.map((userObj, index)=>{
      userObj.key=index;
      return userObj.isPlaying && <Player userObj={userObj}/>
    }
    )} */}
    
    </>
  )
  
}

export default App
