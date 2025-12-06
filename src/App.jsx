import React,{ useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/CommonComponents/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/CommonComponents/Footer'
import StoreLocator from './pages/StoreLocator'
import Blog from './pages/Blog'
 
import BlogDetails from './pages/BlogDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <BrowserRouter>
       
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/locations' element={<StoreLocator/>} />
    <Route path='/resources/blog' element = {<Blog/>}/>
    <Route path='/blog/:id' element={<BlogDetails/>} />
    </Routes>
    </BrowserRouter>
       <Footer/>
    </>
  )
}

export default App
