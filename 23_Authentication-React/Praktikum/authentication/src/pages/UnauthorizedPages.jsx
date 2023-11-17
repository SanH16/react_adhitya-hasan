import React from "react";
import { Link } from "react-router-dom";

export default function UnauthorizedPages() {
  return (
    <div>
      <h2>401</h2>
      <p>Unauthorized</p>
      <Link to="/login">Please login first</Link>
    </div>
  );
}
