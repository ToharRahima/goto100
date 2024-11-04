import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Game from "./components/Game"


function App() {
  const [usersArr, setUsersArr] = useState([{ name: "dave", isPlaying: true, score: [6, 9] }]);
  const [isLogin, setIsLogin] = useState(true);
  localStorage.setItem("usersArr", JSON.stringify(usersArr));

  return (
    <>
      {isLogin ? <Login usersArr={usersArr} setUsersArr={setUsersArr} isLogin={isLogin} setIsLogin={setIsLogin}/>
      : <Game usersArr={usersArr} setUsersArr={setUsersArr} isLogin={isLogin} setIsLogin={setIsLogin}/>}
    </>
  )
}




export default App
