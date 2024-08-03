import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here, you can also handle the form submission, like sending data to an API
    document.getElementById("my_modal_3").close(); // Close the modal on successful submit
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            X
          </button>
          <h3 className="font-bold text-lg text-center">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className={`w-full p-3 outline-none rounded-md shadow-xl dark:bg-slate-900 dark:text-white ${errors.password ? 'border-red-500' : ''}`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            </div>
            <div className="flex justify-around items-center mt-4">
              <button
                type="submit"
                className="bg-purple-700 text-white px-3 py-2 rounded-lg hover:bg-purple-800"
              >
                Login
              </button>
              <div>
                Not Registered?
                <Link to="/signup" className="underline text-blue-700">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
