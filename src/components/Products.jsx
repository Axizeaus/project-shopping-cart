import { useContext } from "react";
import productContext from "../Context/ProductContext";

const Products = () => {
  const { products } = useContext(productContext);
  console.log(products);
  return <div>This is products</div>;
};

export default Products;
