import React, { useEffect } from "react";
import HeaderProduct from "../components/create-product/HeaderProduct";
import Article from "../components/create-product/Article";
import FormProduct from "../components/create-product/FormProduct";
import GenerateNumber from "../components/create-product/GenerateNumber";

import "../assets/css/create-product.css";
import logo from "../assets/img/bootstrap-logo.svg";

function CreateProductPages() {
  useEffect(() => {
    alert("Welcome to the Create Account page 🤖");
  }, []);

  return (
    <>
      <HeaderProduct />
      <section className="text-center">
        <img
          className="d-block img-fluid mx-auto icon-bootstrap"
          style={{ display: "inline-block" }}
          src={logo}
          alt="Bootstrap Icon"
        />
        <div className="container mx-auto">
          <Article />
        </div>
      </section>

      <FormProduct />
      <GenerateNumber />
    </>
  );
}

export default CreateProductPages;
