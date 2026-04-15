import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import loginUser from "../services/authServices.js";
import {useNavigate} from 'react-router'



export default function Login() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const Navigate=useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await loginUser(formData);
      

      localStorage.setItem("token", result.accessToken);
      
      Navigate("/dashboard");
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }

    reset({
      username: "",
      password: "",
    });
  };

  {
    error && <p style={{ color: "red" }}>{error.message}</p>;
  }
  {
    isLoading && <p style={{ color: "darkpink" }}>loading....</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <Input
            label="username"
            type="username"
            name="username"
            {...register("username", { required: true })}
          />
        </div>

        {errors.username && (
          <p style={{ color: "red" }}>username is required!</p>
        )}

        <div className="mb-3">
          <Input
            label="password"
            type="password"
            name="password"
            {...register("password", {
              required: true,
              validate: {
                minLength: (value) => value.length >= 6,
                maxLength: (value) => value.length <= 12,
              },
            })}
          />

          {errors.password && (
            <p style={{ color: "red" }}>password is required!</p>
          )}

          {errors.password?.type === "minLength" && (
            <h1 style={{ color: "red" }}>
              Password should be atleast 6 character
            </h1>
          )}
          {errors.password?.type === "maxLength" && (
            <h1 style={{ color: "darkblue" }}>
              Password should be at most 12 character{" "}
            </h1>
          )}
        </div>

        <Button type="submit" className="btn btn-info rounded mt-2 ">
          Submit
        </Button>
      </form>
    </>
  );
}
