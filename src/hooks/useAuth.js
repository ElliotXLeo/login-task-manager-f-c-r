
import { useContext } from "react";
const useAuth = () => {
  const context = useContext(contextValue)
  return (context);
}

export default useAuth;