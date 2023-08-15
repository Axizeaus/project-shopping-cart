//  Object { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, … }
// ​​
// category: "men's clothing"
// ​​
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// ​​
// id: 1
// ​​
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// ​​
// price: 109.95
// ​​
// rating: Object { rate: 3.9, count: 120 }
// ​​​
// count: 120
// ​​​
// rate: 3.9
// ​​​
// <prototype>: Object { … }
// ​​
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ product, handleClick }) {
  return (
    <Link to={`${product.id}`} className="product-card">
      <strong>{product.title}</strong>
      <p>${product.price}</p>
      <hr />
    </Link>
  );
}
