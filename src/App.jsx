import { useEffect, createContext, useState } from "react";
import RootLayout from "./layouts/RootLayout";

// const ShopContext = createContext({
//   products: [],
//   cartItems: [],
// });

const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  // const [products, setProducts] = useState([]);

  // get products data from fakestoreapi
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProducts(json));
  // }, []);

  // console.log(products);

  return (
    <>
      {/* <ShopContext.Provider value={{ products, cartItems }}> */}
      <RootLayout />
      {/* </ShopContext.Provider> */}
    </>
  );
};

export default App;
