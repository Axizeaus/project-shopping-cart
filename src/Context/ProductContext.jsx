import { createContext } from "react";

const productContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default productContext;
