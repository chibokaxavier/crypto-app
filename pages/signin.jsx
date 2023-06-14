import Link from "next/link";
import React from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";

const signin = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[400px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form>
          <div className="my-4">
            <label htmlFor="">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-3 border-none outline-none rounded-2xl bg-transparent "
                type="email"
                placeholder="Please enter your Email"
              />
              <AiOutlineMail className="absolute right-2 top-4 text-gray-400" />
            </div>
          </div>
          <div>
            <label htmlFor="">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl bg-transparent">
              <input
                className="w-full p-3 border-none outline-none rounded-2xl "
                type="password"
                placeholder="Please enter your password"
              />
              <AiFillLock className="absolute right-2 top-4 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-blue-400 text-white rounded-2xl shadow-xl">
            Sign in
          </button>
        </form>
        <p className="my-4">
          Dont't have an account ? <Link href="/signup" className="text-blue-600">Sign Up </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default signin;
