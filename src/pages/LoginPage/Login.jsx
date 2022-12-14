import React from "react";
import { useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import "./login.css";
import Loader from "./../../components/LoadingComponent/Loading";
import Swal from "sweetalert2";
import useMessage from "../../hooks/useMessage";
import { useState } from "react";

const Login = () => {
  const { cleanMsg, setMsg, errorMsg, Message } = useMessage();
  const { display, setDisplay } = useState(false);

  const { register, handleSubmit } = useForm();

  const { loginRequest } = useFetch();

  const onSubmit = async (data) => {
    cleanMsg();
    try {
      setDisplay(true);
      await loginRequest(data);
      Swal.fire("Good job!", "You have log in!", "success");
    } catch (err) {
      setMsg(err.message);
    }
    setDisplay(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Coat_of_arms_of_Chihuahua.svg/1200px-Coat_of_arms_of_Chihuahua.svg.png"
          alt="Imagen del escudo del estado de Chihuahua"
          className="login-img mb-5"
        />
        <form
          className="login-form-container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            className="form input-login mb-5"
            placeholder="Email"
            {...register("email")}
          />
          <input
            type="password"
            className="form input-login mb-5"
            placeholder="Password"
            {...register("password")}
          />
          <Message>{errorMsg}</Message>
          <Loader show={display} />
          <input type="submit" className="btn mt-5" />
        </form>
      </div>
    </div>
  );
};

export default Login;
