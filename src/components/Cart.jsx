import { useContext } from "react";
import productContext from "../Context/ProductContext";

const Cart = () => {
  const { cartItems } = useContext(productContext);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <strong>Product ID:</strong> {item.id},<hr />
            <strong>Title:</strong> {item.title},<hr />
            <strong>Count:</strong> {item.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
