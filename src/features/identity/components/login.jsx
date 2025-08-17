import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  useActionData,
  useNavigate,
  useNavigation,
  useRouteError,
  useSubmit,
} from "react-router";
import { loginUser } from "../../../api/api";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Hook for submitting in react-router-dom
  const submitForm = useSubmit();

  // function to handle the data of the form and excute the action in react-router-dom
  const onSubmit = async (data) => {
    submitForm(data, { method: "post" });
  };
  // Hook for managing navigation state
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  // Getting the return of RegisterAction
  const isSuccessOperation = useActionData();

  // Redirecting after successful operation in 2 seconds
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccessOperation) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [isSuccessOperation]);

  const routeError = useRouteError();

  return (
    <div className="min-h-screen bg-gradient-to-l from-teal-100 to-teal-500 dark:from-slate-600 dark:to-slate-800 py-6 flex flex-col justify-center items-center  relative overflow-hidden sm:py-12">
      <div className="relative px-4 pt-7 pb-8 bg-white dark:bg-gray-700 shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-2xl flex flex-col items-center gap-8">
      <div className="text-5xl text-gray-700 dark:text-white">LOGIN</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* USERNAME INPUT */}

          <label className="block dark:text-gray-200">Username</label>
          <input
            {...register("username", {
              required: "Username Required",
              minLength: 2,
              maxLength: 12,
            })}
            type="text"
            className={`${
              errors.username
                ? "border bg-red-50  border-red-500 text-red-900 placeholder-red-700  focus:border-red-500 focus:ring-red-500"
                : "border border-gray-300 focus:border-blue-500 focus:ring-blue-500 mb-5 dark:placeholder-gray-400"
            } w-full h-10 px-3 rounded-md outline-none`}
            placeholder="Username"
          />
          {errors.username && errors.username.type === "required" && (
            <p className="text-sm text-red-600 mt-1">
              {errors.username?.message}
            </p>
          )}
          {errors.username &&
            (errors.username.type === "minLength" ||
              errors.username.type === "maxLength") && (
              <p className=" text-sm text-red-600 mt-1">
                Username must be between 2 and 12 characters.
              </p>
            )}

          {/* PASSWORD INPUT */}

          <label className="block dark:text-gray-200">Password</label>

          <input
            {...register("password", {
              required: "Password required",
              minLength: 8,
              maxLength: 16,
            })}
            type="password"
            className={`${
              errors.password
                ? "border bg-red-50  border-red-500 text-red-900 placeholder-red-700  focus:border-red-500 focus:ring-red-500"
                : "border border-gray-300 focus:border-blue-500 focus:ring-blue-500 mb-5 dark:placeholder-gray-400"
            } w-full h-10 px-3  rounded-md outline-none`}
            placeholder="Password"
          />
          {errors.password && errors.password.type === "required" && (
            <p className="text-sm text-red-600 mt-1">
              {errors.password?.message}
            </p>
          )}
          {errors.password &&
            (errors.password.type === "minLength" ||
              errors.password.type === "maxLength") && (
              <p className=" text-sm text-red-600 mt-1">
                Password must be between 8 and 16 characters.
              </p>
            )}

          {/* REMEMBER ME  */}

          <div className="flex gap-2 items-center justify-center">
            <button
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-green-800" : "bg-green-500 hover:bg-blue-700"
              }  shadow-xl text-white uppercase text-sm font-semibold px-5 py-3 rounded cursor-pointer`}
            >
              {isSubmitting ? "Submitting" : "sign in"}
            </button>
            <Link to="/register">
              <button
                disabled={isSubmitting}
                className={`${
                  isSubmitting
                    ? "bg-green-800"
                    : "bg-green-500 hover:bg-blue-700"
                } shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded cursor-pointer`}
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
      {/* succussful Registration alert */}
      {isSuccessOperation && (
        <div className="text-xl mt-10 bg-green-300 p-4 rounded-2xl text-white">
          Welcome
        </div>
      )}
      {/* Errors alerts */}
      {routeError && (
        <div className="text-xl mt-10 bg-red-500 p-4 rounded-2xl text-white">
          {routeError.response?.data.message}
        </div>
      )}
    </div>
  );
}

export default Login;

export async function loginAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  // Posting User Data To Server
  const response = await loginUser(data);
  console.log(response);
  if (response.status === 200) {
    localStorage.setItem("token", response?.data.token);
    // localStorage.setItem("refreshToken" , response?.data.token)
  }
  return response.status === 200;
}
