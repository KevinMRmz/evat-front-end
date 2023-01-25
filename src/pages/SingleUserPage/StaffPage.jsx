import React from "react";
import { useParams } from "react-router-dom";
import Components from "../../components";
import useFetchEmployeeData from "../../hooks/useFetchEmployeeData";

const StaffPage = () => {
  const { id } = useParams();
  const { staff } = useFetchEmployeeData(id);

  return (
    <div className="w-100 vh-80">
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
    </div>
  );
};

export default StaffPage;
