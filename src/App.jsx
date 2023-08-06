import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <nav>
        <ul>
          <li>
            <Link to="shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
