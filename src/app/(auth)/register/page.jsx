"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AiFillEyeInvisible } from "react-icons/ai";
const handleRegisterFunc = async (data) => {
  // e.preventDefault()
  // const email = e.target.email.value
  // const password = e.target.password.value
  const {name,email,password,Photo_URL} = data

  const { data: res , error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: Photo_URL,
    callbackURL: "/",
});

    if(res) toast.success("SignUp Successful")
    if(error) toast.error(error.message)
};

const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-30 rounded-xl bg-white">
        <h2 className="font-bold text-center text-3xl">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset rounded-box w-xs ">
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              className="input"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <label className="label">Photo URL</label>
            <input
              type="text"
              {...register("Photo_URL", {
                required: "Photo URL field is required",
              })}
              className="input"
              placeholder="Photo URL"
            />
            {errors.Photo_URL && (
              <p className="text-red-500">{errors.Photo_URL.message}</p>
            )}

            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              className="input"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="label">Password</label>
            <div className="relative w-full max-w-xs">
              <input
                type={isVisible ? "text" : "password"}
                {...register("password", {
                  required: "Password field is required",
                })}
                className="input input-bordered w-full pr-10" // pr-10 makes room for the icon so text doesn't overlap
                placeholder="Password"
              />

              <button
                type="button" // Important: prevents form submission when clicking the eye
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="mt-4">
          Already Have an account?{" "}
          <Link className="text-blue-700" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
