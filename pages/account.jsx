import SavedCoin from "@/components/SavedCoin";
import React, { useEffect } from "react";
import useAuth from "hooks/useAuth";
import { Router, useRouter } from "next/router";

const Account = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      console.log("signed in!");
    } else if (!user) {
      router.push("/signin");
    }
  }, [user]);

  if (!user) {
    // user is signed out or still being checked.
    // don't render anything
    return null;
  }

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
    )
};

export default Account;
