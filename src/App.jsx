import { useEffect, createContext, useState } from "react";
import RootLayout from "./layouts/RootLayout";
import productContext from "./Context/ProductContext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // get products data from fakestoreapi
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <productContext.Provider value={{ products, cartItems }}>
        <RootLayout />
      </productContext.Provider>
    </>
  );
};

export default App;
