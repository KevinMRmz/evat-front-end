import React from "react";
import { useForm } from "react-hook-form";
import useStaffActions from "../../hooks/Actions/useStaffActions";

const ChangePassword = ({ id }) => {
  const { handleSubmit, register } = useForm();
  const { newPassword } = useStaffActions();

  return (
    <>
      <div className="title-container-border">
        <h2>Change Password</h2>
      </div>
      <div className="vw-50 vh-50 flex-center">
        <form
          className="flex flex-column justify-evenly w-90 h-80 align-items-center"
          onSubmit={handleSubmit((data) => newPassword(data, id))}
        >
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="form w-80"
          />
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="form w-80"
          />
          <input type="submit" className="btn w-40" />
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
