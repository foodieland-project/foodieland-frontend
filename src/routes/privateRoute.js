import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, isLogged }) {
  console.log(isLogged);
  if (isLogged) {
    return children;
  }
  return <Navigate to="/panel/login" />;
}

export default PrivateRoute;
