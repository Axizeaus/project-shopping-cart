import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: <Shop />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "cart",
          element: <Cart />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
