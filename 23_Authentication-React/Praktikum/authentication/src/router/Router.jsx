import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPages from "../pages/LandingPages";
import CreateProductPages from "../pages/CreateProductPages";
import ProductDetail from "../components/create-product/ProductDetail";
import LoginPage from "../pages/LoginPages";
import ProtectedRouter from "./ProtectedRouter";
import PrivateRouter from "./PrivatedRouter";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRouter />}>
        <Route index element={<LandingPages />} />
        <Route path="/create-product" element={<CreateProductPages />} />
        <Route path="/create-product/:id" element={<ProductDetail />} />
      </Route>

      <Route path="/" element={<ProtectedRouter />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
