import { createContext } from "react";

const productContext = createContext({
  products: [],
  cartItems: [],
});

export default productContext;
