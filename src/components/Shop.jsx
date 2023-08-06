import { Link, Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <h1>This is Shop.</h1>
      <Link to="/">main</Link>
      <hr />
      <Link to="cart">cart</Link>
      <Outlet />
    </>
  );
};

export default Shop;
