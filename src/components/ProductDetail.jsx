import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import productContext from "../Context/ProductContext";

function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart } = useContext(productContext);

  const [quantity, setQuantity] = useState(1); // Initial quantity

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      <div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
        {/* You can add your additional details here */}
      </div>

      <div>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button onClick={handleIncrement}>+</button>
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
