import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product"
import BusinessVertical from "./pages/BusinessVertical";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Product/>} />
          <Route path='/verticals' element={<Navigate to ="/verticals/breeders" replace/> }
           />
          <Route path='/verticals/:category' element={<BusinessVertical/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
