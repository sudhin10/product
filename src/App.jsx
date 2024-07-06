import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './component/View'
import Navbar from './component/Nav'
import Add from './component/Add'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    <Routes>
      <Route path="/"element={<View/>}></Route>
      <Route path="/add"element={<Add/>}></Route>
      
    </Routes>

    </>
  )
}

export default App
