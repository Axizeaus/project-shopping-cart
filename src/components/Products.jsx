import { useContext } from "react";
import productContext from "../Context/ProductContext";
import Card from "./Card";
import styled from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Products = () => {
  const { products } = useContext(productContext);
  return (
    <ProductsContainer>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
