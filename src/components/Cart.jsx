import React, { useContext } from "react";
import { Link } from "react-router-dom";
import productContext from "../Context/ProductContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(productContext);
  console.log(cartItems);

  const handleDelete = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.id}>
            <strong>Product ID:</strong> {item.product.id} <br />
            <strong>Title:</strong> {item.product.title} <br />
            <strong>Count:</strong> {item.quantity} <br />
            <button onClick={() => handleDelete(item.product.id)}>
              Delete
            </button>
            <Link to={`/products/${item.product.id}`}>Update</Link>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
