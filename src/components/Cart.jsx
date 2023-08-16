import React, { useContext } from "react";
import { Link } from "react-router-dom";
import productContext from "../Context/ProductContext";
import styled from "styled-components";

const CartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.li`
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const ProductImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* Allow the data to take the remaining width */
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const UpdateLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Total = styled.p`
  margin-top: 20px;
  text-align: right;
  font-weight: bold;
`;

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(productContext);

  const handleDelete = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <CartContainer>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.product.id}>
            <ProductImage src={item.product.image} alt={item.product.title} />
            <ProductInfo>
              <strong>Title:</strong> {item.product.title}
              <strong>Product ID:</strong> {item.product.id}
              <strong>Count:</strong> {item.quantity}
              <ButtonContainer>
                <button onClick={() => handleDelete(item.product.id)}>
                  Delete
                </button>
                <UpdateLink to={`/products/${item.product.id}`}>
                  Update
                </UpdateLink>
              </ButtonContainer>
            </ProductInfo>
            <hr />
          </CartItem>
        ))}
      </ul>
      <Total>Total: ${calculateTotal()}</Total>
    </CartContainer>
  );
};

export default Cart;
