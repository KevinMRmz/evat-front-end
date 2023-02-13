import { AuthService } from "./auth-service";
import useMessageErrorWrapper from "../../hooks/Alerts/messageErrorWrapper";
import useRoleNavigate from "../../hooks/useRoleNavigate";
import { NotificationManager } from "react-notifications";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const authService = new AuthService();

const useAuthActions = () => {
  const { setUserInfo } = useContext(UserContext);
  const messageErrorWrapper = useMessageErrorWrapper();
  const navigateByRole = useRoleNavigate();
  const navigate = useNavigate();

  const logIn = messageErrorWrapper(async (data) => {
    // creates the request
    const result = await authService.logIn(data);
    const { user, token } = result;

    // Set the user info inside the context
    setUserInfo({ ...user, auth: true });

    // login successfull alert
    NotificationManager.success("Log in successfully", "Completed");

    // store the token in the session storage
    window.sessionStorage.setItem("jwt", token);

    // The user will be sent to one page depending of the role
    navigateByRole(user.role);
  });

  const logOut = async () => {
    await authService.logOut();

    // Removes the current user from the context
    setUserInfo({});

    // Redirect to the login page
    navigate("/");
  };

  return { logIn, logOut };
};

export default useAuthActions;
