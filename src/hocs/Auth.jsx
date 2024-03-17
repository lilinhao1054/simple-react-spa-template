import { getToken } from "@/utils/auth";
import { Navigate } from "react-router-dom/dist";

const Auth = ({ children }) => {
  if (getToken()) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Auth;
