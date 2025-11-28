import React,{ useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/CommonComponets/Navbar'
import HomeHero from './components/HomeComponents/HomeHero'
import HomePage from './pages/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <BrowserRouter>
       
    <Routes>
    <Route path='/' element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
