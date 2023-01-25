import { useNavigate } from "react-router-dom";
import Roles from "../constants/roles";

const useRoleNavigate = () => {
  const navigate = useNavigate();

  const navigateByRole = (role) => {
    switch (role) {
      case Roles.ADMIN:
        navigate("/admin/");
        break;
      case Roles.NURSE:
        navigate("/nurse/");
        break;
      case Roles.DOCTOR:
      case Roles.RESIDENT:
        navigate("/doctor/");
        break;
      default:
        throw new Error("Not role specified");
    }
  };

  return navigateByRole;
};

export default useRoleNavigate;
