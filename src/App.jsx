import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Product/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
