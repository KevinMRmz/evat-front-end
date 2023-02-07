import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Components from "../../components";
import useFetchEmployeeData from "../../hooks/useFetchEmployeeData";
import { UserContext } from "../../contexts/userContext";
import Roles from "../../constants/roles";

const StaffPage = () => {
  const { id } = useParams();
  const { staff } = useFetchEmployeeData(id);
  const { user } = useContext(UserContext);

  return (
    <div className="w-100 vh-80">
      <div className="w-100 flex-center mt-5">
        <div className="w-70 m-5 title-container-border flex justify-between align-items-center">
          <h2 className="uppercase letter-spacing-5 opacity-9">
            Employee Info
          </h2>
          {user.role === Roles.ADMIN ? (
            <Components.StaffHeader staff={staff} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-100 flex-center h-80">
        <Components.StaffInfo staff={staff} />
      </div>
    </div>
  );
};

export default StaffPage;
