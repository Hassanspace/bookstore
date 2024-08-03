import React from "react";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here (e.g., send data to API)
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="modal-box dark:bg-slate-900 dark:text-white md:w-[600px] w-[400px] border md:ml-0">
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg text-center">Sign up</h3>
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex flex-col">
                <label htmlFor="signup-name" className="text-sm">Name</label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="Enter your Name"
                  className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.name ? 'border-red-500' : ''}`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="signup-email" className="text-sm">Email</label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your Email"
                  className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="signup-password" className="text-sm">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="Password"
                  className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.password ? 'border-red-500' : ''}`}
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
              </div>
              <div className="flex justify-between items-center mt-6">
                <button
                  type="submit"
                  className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
                >
                  Sign Up
                </button>
                <div>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-700"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Login />
    </>
  );
};

export default Signup;
