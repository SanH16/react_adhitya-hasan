import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import auth from "../utils/auth";

export default function ProtectedRouter() {
  if (auth.isAuthorized()) {
    return <Navigate to={"/"} />; // jika sudah login, hanya navigate home tidak bisa ke page Login lagi
  }
  return <Outlet />; // jika belum, navigate ke page login
}
