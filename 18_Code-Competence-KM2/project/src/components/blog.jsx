import React from "react";
import Navbar from "./navbar/navbar";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import Footer from "./footer/footer";

export default function Blog() {
  return (
    <>
      <Navbar />;
      <main id="blog" className="blog">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Link to="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      </main>
    </>
  );
}
