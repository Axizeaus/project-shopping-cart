import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import ProductLayout from "./layouts/ProductLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductLayout />,
        children: [
          { path: "", element: <Products /> },
          { path: ":id", element: <ProductDetail /> },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
