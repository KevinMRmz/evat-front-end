import { UserContext } from "../../contexts/userContext";
import useRoleNavigate from "../../hooks/useRoleNavigate";
import { NotificationManager } from "react-notifications";
import { useContext } from "react";
import useFetch from "./../useFetch";
import useAlert from "./../useAlert";

const useAuthActions = () => {
  const { setUser } = useContext(UserContext);
  const { loginRequest } = useFetch();
  const { waitingResponseMessage } = useAlert();
  const navigateByRole = useRoleNavigate();

  const login = waitingResponseMessage(async (data) => {
    const user = await loginRequest(data);
    setUser({ ...user, auth: true });
    NotificationManager.success("Log in successfully", "Completed");
    navigateByRole(user.role);
  });

  return { login };
};

export default useAuthActions;
