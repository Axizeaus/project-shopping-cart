import React, { useContext } from "react";
import { StyledHeader, StyledNavLink } from "./styles/Header.styled";
import productContext from "../Context/ProductContext";

export default function Header() {
  const { cartItems } = useContext(productContext);

  // Calculate the total number of items in the cart
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <StyledHeader>
      <h1>Shopping Cart</h1>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/products">Products</StyledNavLink>
        <StyledNavLink to="/cart">Cart ({totalItemsInCart})</StyledNavLink>
      </nav>
    </StyledHeader>
  );
}
