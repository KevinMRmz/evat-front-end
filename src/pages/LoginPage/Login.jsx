import GeneralComponents from "../../components/GeneralComponents";
import useAuthActions from "../../hooks/Actions/useAuthActions";
import { useForm } from "react-hook-form";
import React from "react";
import "./login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuthActions();

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src="./chihuahua.png"
          alt="Imagen del escudo del estado de Chihuahua"
          className="login-img mb-5"
        />

        <form className="login-form-container" onSubmit={handleSubmit(login)}>
          <input
            type="email"
            className="login-form input-login mb-5"
            placeholder="Email"
            {...register("email")}
          />
          <input
            type="password"
            className="login-form input-login mb-5"
            placeholder="Password"
            {...register("password")}
          />

          <GeneralComponents.ErrorMessage />
          <input type="submit" className="btn mt-5" />
        </form>
      </div>
    </div>
  );
};

export default Login;
