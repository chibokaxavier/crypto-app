import SavedCoin from "@/components/SavedCoin";
import React from "react";
import useAuth from "hooks/useAuth";
import { Router, useRouter } from "next/router";

const Account = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto ">
        <div className="flex justify-between items-center my-12 py-8  shadow-2xl rounded-lg px-4">
          <div>
            <h1 className="font-bold text-2xl">Account</h1>
            <div>
              <p>Welcome, {user ? user.email : "User"}</p>
            </div>
          </div>
          <div>
            <button
              className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl "
              onClick={logout}
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-12 py-8 rounded-lg shadow-2xl px-4">
          <div className="w-full min-h-[300px]">
            <h1 className="text-2xl font-bold py-4">Watch List</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" my-24 flex flex-col items-center justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2016/04/24/22/30/monitor-1350918_640.png"
          alt=""
          className="w-[300px]"
        />
        <p className="text-7xl">
          {" "}
          <span className="text-sm">Please Sign In</span>
        </p>
      </div>
    );
  }
};

export default Account;
