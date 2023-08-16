import { useEffect, createContext, useState } from "react";
import RootLayout from "./layouts/RootLayout";
import productContext from "./Context/ProductContext";
import Container from "./components/styles/RootLayout.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#2c3e50", // Dark Blue
    secondary: "#e74c3c", // Red
    accent: "#f39c12", // Orange
    background: "#ecf0f1", // Light Gray
    text: "#34495e", // Dark Gray
  },
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // get products data from fakestoreapi
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToCart = (productId, quantity) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (item) => item.product.id === productId
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += quantity;
        return updatedCartItems;
      } else {
        const productToAdd = products.find(
          (product) => product.id === productId
        );
        if (productToAdd) {
          const newItem = { product: productToAdd, quantity };
          return [...prevCartItems, newItem];
        }
        return prevCartItems;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.product.id !== productId)
    );
  };

  return (
    <>
      <productContext.Provider
        value={{ products, cartItems, addToCart, removeFromCart }}
      >
        <ThemeProvider theme={theme}>
          <Container>
            <RootLayout />
          </Container>
        </ThemeProvider>
      </productContext.Provider>
    </>
  );
};

export default App;
