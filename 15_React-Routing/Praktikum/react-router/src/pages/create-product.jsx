import React, { useEffect } from "react";
import Header from "../components/create-product/header-product";
import FormProduct from "../components/create-product/form-product";
import Article from "../components/create-product/article";
import GenerateNumber from "../components/create-product/generate-number";
import "../assets/css/create-product.css";
import logo from "../assets/image/bootstrap-logo.svg";

export default function CreateProduct() {
  useEffect(() => {
    alert("Welcome to the Create Account page 🤖");
  }, []);
  return (
    <>
      <Header />
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
