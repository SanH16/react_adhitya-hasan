import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function UnauthorizedPages() {
  return (
    <div>
      <Result
        status="403"
        title="401"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary">
            <Link to="/login">Please login first</Link>
          </Button>
        }
      />
    </div>
  );
}
