import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (!user.email) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
