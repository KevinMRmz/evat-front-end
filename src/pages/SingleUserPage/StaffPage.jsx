import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Components from "../../components";
import useFetchEmployeeData from "../../hooks/useFetchEmployeeData";

const StaffPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { staff } = useFetchEmployeeData(id);

  return (
    <div className="w-100 vh-90">
      <span className="background-img-user" />
      <div className="w-100 flex-center mt-5">
        <div className="w-70 m-5 title-container-patients flex justify-between align-items-center">
          <div>
            <h2 className="p-5">Employee Information</h2>
          </div>
          <Components.StaffHeader staff={staff} />
        </div>
      </div>
      <div className="w-100 flex-center h-70">
        <Components.StaffInfo staff={staff} />
      </div>
      <div
        className="redirect-home flex-center pointer"
        onClick={() => navigate("/admin/staff-search")}
      >
        <ion-icon name="home"></ion-icon>
      </div>
    </div>
  );
};

export default StaffPage;
