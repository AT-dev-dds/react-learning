import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../auth/authThunk.js";
import { useNavigate } from "react-router";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth,
  );

  const onSubmit = (data) => {
    
    dispatch(login(data));
  };

  useEffect(() => {
 
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{message}</p>}

        <input
          type="text"
          placeholder="Enter Username"
          {...register("username")}
        />

        <input
          type="password"
          placeholder="Enter Password"
          {...register("password")}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}
