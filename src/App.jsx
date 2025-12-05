import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product"
import BusinessVertical from "./pages/BusinessVertical";
import ContactUs from "./pages/ContactUs";
import News from "./pages/News";


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
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
