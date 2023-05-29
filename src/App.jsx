import { useState } from 'react'
import "./components/Componenets"
import Componenets from './components/Componenets'
import "./components/Login"
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Componenets/>
      <Login/>
    </>
  )
}

export default App