import { UserContext } from "../../contexts/userContext";
import useRoleNavigate from "../../hooks/useRoleNavigate";
import { NotificationManager } from "react-notifications";
import { useContext } from "react";
import useFetch from "./../useFetch";
import useAlert from "./../useAlert";

const useAuthActions = () => {
  const { setUserInfo } = useContext(UserContext);
  const { loginRequest } = useFetch();
  const { waitingResponseMessage } = useAlert();
  const navigateByRole = useRoleNavigate();

  const login = waitingResponseMessage(async (data) => {
    const user = await loginRequest(data);
    setUserInfo({ ...user, auth: true });
    NotificationManager.success("Log in successfully", "Completed");
    navigateByRole(user.role);
  });

  return { login };
};

export default useAuthActions;
