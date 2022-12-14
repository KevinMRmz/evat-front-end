import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./add-staff.css";
import useFetch from "../../../hooks/useFetch";
import useMessage from "../../../hooks/useMessage";
import Loader from "../../../components/LoadingComponent/Loading";
import Select from "react-select";
import Swal from "sweetalert2";

const AddStaff = () => {
  const { register, handleSubmit } = useForm();
  const { AddStaff } = useFetch();
  const { cleanMsg, errorMsg, setMsg, Message } = useMessage();
  const { display, setDisplay } = useState(false);

  const [role, setRole] = useState("nurse");

  const onSubmit = async (data) => {
    cleanMsg();
    try {
      setDisplay(true);
      await AddStaff({ ...data }, role);
      Swal.fire("Good job!", "The register has been completed!", "success");
    } catch (error) {
      setMsg(error.message);
    }
    setDisplay(false);
  };

  const options = [
    { value: "nurse", label: "Nurse" },
    { value: "doctor", label: "Doctor" },
    { value: "resident", label: "Resident" },
    { value: "admin", label: "Admin" },
  ];

  return (
    <div className="main-patient-container flex">
      <div className="form-patient-container mt-5 flex">
        <form onSubmit={handleSubmit(onSubmit)} className="flex">
          <div className="staff-menu">
            <Select
              defaultValue={role}
              onChange={(option) => setRole(option.value)}
              options={options}
            />
          </div>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="form m-5"
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="form m-5"
          />
          <input
            type="tel"
            placeholder="Phone"
            {...register("phone")}
            className="form m-5"
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="form m-5"
          />
          {role === "nurse" ? (
            <></>
          ) : role === "doctor" ? (
            <>
              <input
                type="specialty"
                placeholder="Specialty"
                {...register("specialty")}
                className="form"
              />
            </>
          ) : role === "resident" ? (
            <></>
          ) : role === "admin" ? (
            <></>
          ) : (
            <></>
          )}

          <Loader show={display}></Loader>
          <Message>{errorMsg}</Message>
          <input type="submit" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
