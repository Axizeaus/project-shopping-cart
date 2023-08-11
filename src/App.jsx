import { useEffect, createContext, useState } from "react";
import Header from "./components/Header";

const ShopContext = createContext({
  products: [],
  cartItems: [],
});

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // get products data from fakestoreapi
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  console.log(products);

  return (
    <>
      <Header />
    </>
  );
};

export default App;
