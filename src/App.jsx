import React,{ useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/CommonComponets/Navbar'
import HomeHero from './components/HomeComponents/HomeHero'
import HomePage from './pages/HomePage'
import Footer from './components/CommonComponets/Footer'
import StoreLocator from './pages/StoreLocator'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <BrowserRouter>
       
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/locations' element={<StoreLocator/>} />
    </Routes>
    </BrowserRouter>
       <Footer/>
    </>
  )
}

export default App
