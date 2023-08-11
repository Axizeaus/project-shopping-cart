import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
