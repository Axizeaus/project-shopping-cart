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

  // const addToCart = (id) => {
  //   setCartItems((prevCartItems) => {
  //     const itemIndex = prevCartItems.findIndex((item) => item.id === id);

  //     if (itemIndex !== -1) {
  //       const updatedCartItems = [...prevCartItems];
  //       updatedCartItems[itemIndex].count += 1;
  //       console.log(updatedCartItems);
  //       return updatedCartItems;
  //     } else {
  //       const newItem = { id, count: 1 };
  //       console.log([...prevCartItems, newItem]);
  //       return [...prevCartItems, newItem];
  //     }
  //   });
  // };

  return (
    <>
      <productContext.Provider value={{ products, cartItems }}>
        <RootLayout />
      </productContext.Provider>
    </>
  );
};

export default App;
