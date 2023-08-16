import { Link } from "react-router-dom";
import styled from "styled-components";

const CardLink = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const ProductTitle = styled.strong`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
`;

const Card = ({ product }) => {
  return (
    <CardLink to={`${product.id}`} className="product-card">
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductInfo>
    </CardLink>
  );
};

export default Card;
