import StaffInfo from "../../components/SinglePageComponents/StaffInfo";
import Title from "../../components/GeneralComponents/Title/Title";
import { UserContext } from "../../contexts/userContext";
import React, { useContext } from "react";
import img from "./config-img.png";

const UserPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-100">
      <div className="w-100 flex-center">
        <div className="text-center mt-5 w-80">
          <Title title={"Welcome " + user.name + "!"}></Title>
        </div>
      </div>
      <div className="w-100 flex flex-column align-items-center justify-evenly">
        <img src={img} alt="" className="w-150px h-150px border-radius-50" />
        <StaffInfo staff={user} />
      </div>
    </div>
  );
};

export default UserPage;
