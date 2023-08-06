import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>There is an error</h1>
      <Link to="/">main</Link>
    </>
  );
};

export default ErrorPage;
