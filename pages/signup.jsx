import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import useAuth from "hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

const SignUp = () => {
  const { signUp,user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ email, password,name }) => {
    await signUp(email, password,name);
  };
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      console.log("");
    } else if (user) {
      router.push("/");
    }
  }, [user]);

  if (user) {
    // user is signed out or still being checked.
    // don't render anything
    return null;
  }
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[400px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4">
            <label htmlFor="">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                {...register("email", { required: true })}
                className="w-full p-3 border-none outline-none rounded-2xl bg-transparent "
                type="email"
                placeholder="Please enter your Email"
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid email.
                </p>
              )}
              <AiOutlineMail className="absolute right-2 top-4 text-gray-400" />
            </div>
          </div>
          <div>
          <label htmlFor="">username</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                {...register("name", { required: true })}
                className="w-full p-3 border-none outline-none rounded-2xl bg-transparent "
                type="text"
                placeholder="Please enter your name"
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid email.
                </p>
              )}
              <AiOutlineMail className="absolute right-2 top-4 text-gray-400" />
            </div>
          </div>
          <div>
            <label htmlFor="">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl bg-transparent">
              <input
                {...register("password", { required: true })}
                className="w-full p-3 border-none outline-none rounded-2xl "
                type="password"
                placeholder="Please enter your password"
              />{" "}
              {errors.password && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
              <AiFillLock className="absolute right-2 top-4 text-gray-400" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full my-2 p-3 bg-blue-400 text-white rounded-2xl shadow-xl"
          >
            Sign Up
          </button>
        </form>
        <p className="my-4">
          Already have an account ?{" "}
          <Link href="/signin" className="text-blue-600">
            Sign in{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
