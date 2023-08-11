import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>This is Header</div>
      <Link to="/home">home</Link>
      <Link to="/products">products</Link>
      <Link to="/cart">cart</Link>
      <Outlet />
    </>
  );
};

export default Header;
