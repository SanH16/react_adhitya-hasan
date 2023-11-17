import { Route, Routes } from "react-router-dom";
import LandingPages from "../pages/LandingPages";
import CreateProductPages from "../pages/CreateProductPages";
import ProductDetail from "../components/create-product/ProductDetail";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
      <Route path="/create-product" element={<CreateProductPages />} />
      <Route path="/create-product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default Router;
