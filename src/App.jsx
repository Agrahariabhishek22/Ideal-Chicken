import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/CommonComponents/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/CommonComponents/Footer";
import StoreLocator from "./pages/StoreLocator";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Product from "./pages/Product";
import BusinessVertical from "./pages/BusinessVertical";
import ContactUs from "./pages/ContactUs";
import News from "./pages/News";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route
            path="/verticals"
            element={<Navigate to="/verticals/breeders" replace />}
          />
          <Route path="/verticals/:category" element={<BusinessVertical />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/resources/news" element={<News />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/locations" element={<StoreLocator />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
