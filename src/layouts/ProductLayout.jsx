import React from "react";
import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div>
      <h1>Product layout</h1>
      <Outlet />
    </div>
  );
}
