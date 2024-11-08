import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Game from "./components/Game"

function App() {
  const [usersArr, setUsersArr] = useState([]);  
  console.log('usersArr: ', usersArr);
  const [isLogin, setIsLogin] = useState(true);
  localStorage.setItem("usersArr", JSON.stringify(usersArr));
  const [playersArr, setPlayersArr] = useState(usersArr.filter(checkIfplaying));
  function checkIfplaying(user) {
    return user.isPlaying;
  }
  console.log('isLogin: ', isLogin);
  // localStorage.setItem("usersArr", JSON.stringify(usersArr));

  return (
    <>
      {isLogin ? <Login usersArr={usersArr} setUsersArr={setUsersArr} isLogin={isLogin} setIsLogin={setIsLogin} />
        : <Game usersArr={usersArr} setUsersArr={setUsersArr} isLogin={isLogin} setIsLogin={setIsLogin} playersArr={playersArr} setPlayersArr={setPlayersArr}/>}
    </>
  )
}

export default App