import { useContext } from "react";
import productContext from "../Context/ProductContext";
import Card from "./Card";

const Products = () => {
  const { products } = useContext(productContext);
  return (
    <div>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
