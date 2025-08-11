import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  useSubmit,
  useActionData,
  useNavigation,
  useNavigate,
  useRouteError,
} from "react-router";
import { registerUser } from "../../../api/api";

function Register() {
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
    console.log(data);
    const { confirmPassword, ...userData } = data;
    console.log(userData);
    submitForm(userData, { method: "post" });
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
        navigate("/login");
      }, 2000);
    }
  }, [isSuccessOperation]);

  const routeError = useRouteError();

  return (
    <div className="min-h-screen bg-linear-to-r from-[#a8ff78] to-[#78ffd6] py-6 flex flex-col justify-center items-center relative overflow-hidden sm:py-12">
      <div className=" relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* USERNAME INPUT */}

          <label className="block">Username</label>
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
            <p className="text-sm text-red-600 mt-1">{errors.username?.message}</p>
          )}
          {errors.username &&
            (errors.username.type === "minLength" ||
              errors.username.type === "maxLength") && (
              <p className=" text-sm text-red-600 mt-1">
                Username must be between 2 and 12 characters.
              </p>
            )}

          {/* PASSWORD INPUT */}

          <label className="block">Password</label>

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
            <p className="text-sm text-red-600 mt-1">{errors.password?.message}</p>
          )}
          {errors.password &&
            (errors.password.type === "minLength" ||
              errors.password.type === "maxLength") && (
              <p className=" text-sm text-red-600 mt-1">
                Password must be between 8 and 16 characters.
              </p>
            )}

          {/* CONFIRM PASSWORD INPUT */}

          <label className="block">Confirm Password</label>

          <input
            {...register("confirmPassword", {
              required: "Confirm password required",
              validate: (value) => {
                if (watch("password") !== value) {
                  return "عدم تطابق با رمز وارد شده";
                }
              },
            })}
            type="password"
            className={`${
              errors.confirmPassword
                ? "border bg-red-50  border-red-500 text-red-900 placeholder-red-700  focus:border-red-500 focus:ring-red-500"
                : "border border-gray-300 focus:border-blue-500 focus:ring-blue-500 mb-5"
            } w-full h-10 px-3  rounded-md outline-none`}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <p className="text-sm text-red-600 mb-2 mt-1">
                {errors.confirmPassword?.message}
              </p>
            )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <p className="text-sm text-red-600 mb-2 mt-1">
                {errors.confirmPassword?.message}
              </p>
            )}

          <div className="flex gap-2 items-center justify-center">
            <button
              disabled={isSubmitting}
              className=" bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-5 py-3 rounded cursor-pointer"
            >
              {isSubmitting ? "Submitting" : "Sign Up"}
            </button>
            <Link to="/login">
              <button
                disabled={isSubmitting}
                className=" bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded cursor-pointer"
              >
                Registered Before?
              </button>
            </Link>
          </div>
        </form>
      </div>
      {/* succussful Registration alert */}
      {isSuccessOperation && (
        <div className="text-xl mt-10 bg-green-300 p-4 rounded-2xl text-white">
          Registration successful
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

export default Register;

export async function RegisterAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // Posting User Data To Server
  const response = await registerUser(data);
  return response.status === 201;
}
