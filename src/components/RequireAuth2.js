import { Navigate } from "react-router-dom";

const RequireAuth2 = ({ children, user }) => {
  return user.email ? <Navigate to='/' /> : children;
};

export default RequireAuth2;
