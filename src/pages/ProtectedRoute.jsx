import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <h1>Cargando</h1>
    );
  } else if (!user) {
    return (
      <Navigate to="/login" />
    );
  }

  return (
    <>
      {children}
    </>
  );
}

export default ProtectedRoute;