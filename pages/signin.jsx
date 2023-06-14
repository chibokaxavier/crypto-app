import Link from "next/link";
import React from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";

const signin = () => {
  return (
    <div>
      <div>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <div>
              <input type="email" />
              <AiOutlineMail/>
            </div>
          </div>
          <div>
            <label htmlFor="">Password</label>
            <div>
              <input type="password"/>
              <AiFillLock/>
            </div>
          </div>
          <button>Sign in</button>
        </form>
        <p>Dont't have an account ? <Link href='/signup'>Sign Up </Link> </p>
      </div>
    </div>
  );
};

export default signin;
