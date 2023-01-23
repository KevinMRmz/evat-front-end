import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import ErrorPages from "../pages/ErrorPages";

const Auth = ({ children, authorized }) => {
  const { user } = useContext(UserContext);

  if (!user.auth) {
    return <ErrorPages.ForbiddenPage />;
  }

  if (user.role !== authorized) {
    return <ErrorPages.ForbiddenPage />;
  }

  return children;
};

export default Auth;
