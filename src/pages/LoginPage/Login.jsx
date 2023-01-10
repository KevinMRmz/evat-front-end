import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessageContext } from "../../contexts/errorMessageContext";
import useAuthActions from "../../hooks/Actions/useAuthActions";
import Components from "../../components";
import "./login.css";

const Login = () => {
  const { errorMessage } = useContext(ErrorMessageContext);
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
          <Components.Message message={errorMessage} />
          <input type="submit" className="btn mt-5" />
        </form>
      </div>
    </div>
  );
};

export default Login;
