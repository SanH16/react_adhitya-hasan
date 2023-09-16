import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";
import bootstrapLogo from "./assets/images/bootstrap-logo.svg";
import "./assets/css/styles.css";

const CreateProduct = () => {
  return (
    <>
      <Header />
      <section className="text-center">
        <img
          className="d-block img-fluid mx-auto icon-bootstrap"
          style={{ display: "inline-block" }}
          src={bootstrapLogo}
          alt="Bootstrap Icon"
        />
        <h1 className="mt-4">Create Product</h1>
        <p>
          Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a <br />
          validation state that can be triggered by attempting to submit the form without completing it.
        </p>
      </section>
      <Form />
      <Table />
    </>
  );
};

export default CreateProduct;
