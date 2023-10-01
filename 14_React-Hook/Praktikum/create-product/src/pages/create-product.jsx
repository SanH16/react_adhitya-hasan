import React, { useEffect } from "react";
import Header from "./components/header";
import FormProduct from "./components/form-product";
import GenerateNumber from "./components/generate-number";
import Article from "./components/article";
import logo from "../assets/images/bootstrap-logo.svg";
import "../assets/css/styles.css";

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
