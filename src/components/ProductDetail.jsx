import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productContext from "../Context/ProductContext";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 300px;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  input {
    width: 40px;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart } = useContext(productContext);
  const [quantity, setQuantity] = useState(1);
  const history = useNavigate();

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
    addToCart(product.id, quantity);
    history("/products");
  };

  return (
    <CardContainer>
      <ImageContainer>
        <img src={product.image} alt={product.title} />
      </ImageContainer>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
      </div>
      <QuantityContainer>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button onClick={handleIncrement}>+</button>
      </QuantityContainer>
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </CardContainer>
  );
}

export default ProductDetail;
