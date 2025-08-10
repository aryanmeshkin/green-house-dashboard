import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-[#a8ff78] to-[#78ffd6] py-6 flex flex-col justify-center relative overflow-hidden sm:py-12 ">
      <div className="relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* USERNAME INPUT */}

          <label className="block">
            Username
          </label>
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
                : "border border-gray-300 focus:border-blue-500 focus:ring-blue-500 mb-5"
            } w-full h-10 px-3 rounded-md outline-none`}
            placeholder="Username"
          />
          {errors.username && errors.username.type === "required" && (
            <p className="text-sm text-red-600">{errors.username?.message}</p>
          )}
          {errors.username &&
            (errors.username.type === "minLength" ||
              errors.username.type === "maxLength") && (
              <p className=" text-sm text-red-600">
                Username must be between 2 and 12 characters.
              </p>
            )}

          {/* PASSWORD INPUT */}

          <label className="block">
            Password
          </label>

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
                : "border border-gray-300 focus:border-blue-500 focus:ring-blue-500 mb-5"
            } w-full h-10 px-3  rounded-md outline-none`}
            placeholder="Password"
          />
          {errors.password && errors.password.type === "required" && (
            <p className="text-sm text-red-600">{errors.password?.message}</p>
          )}
          {errors.password &&
            (errors.password.type === "minLength" ||
              errors.password.type === "maxLength") && (
              <p className=" text-sm text-red-600">
                Password must be between 8 and 16 characters.
              </p>
            )}

          {/* REMEMBER ME  */}

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="text-sm ml-3">
                <label className="font-medium text-gray-900">
                  Remember me
                </label>
              </div>
            </div>
            <Link
              to="/register"
              className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
            >
              Registering
            </Link>
          </div>
          <button className="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
