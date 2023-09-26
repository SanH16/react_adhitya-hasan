import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import CreateProduct from "./pages/create-product";
import ProductDetail from "./components/create-product/product-detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/create-product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    // <div>
    //   <LandingPage />
    // </div>
  );
}

export default App;
