import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Shoping Cart</h1>
          <NavLink to="/">home</NavLink>
          {/* <NavLink to="about">about</NavLink> */}
          <NavLink to="products">products</NavLink>
          <NavLink to="cart">cart</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </header>
    </div>
  );
}
