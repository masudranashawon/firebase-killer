import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, user }) => {
  return !user.email ? <Navigate to='/login' /> : children;
};

export default RequireAuth;
