import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="max-w-2xl mx-auto border-2 my-16 bg-gray-100 rounded-lg p-3">
      <h1 className="text-3xl font-semibold flex items-center justify-center p-2 my-5">
        Sign In
      </h1>
      <form className="flex flex-col gap-7 mx-3 mt-10">
        <input
          type="text"
          placeholder="username"
          className="w-full bg-white p-2 mt-1 rounded-lg font-semibold tracking-wide"
          required
        />
        <input
          type="email"
          placeholder="user123@gmail.com"
          className="w-full bg-white p-2 mt-1 rounded-lg font-semibold tracking-wide"
          required
        />
        <button className="w-full text-lg bg-red-500 py-2 mt-1 rounded-full font-semibold tracking-wide">
          Reset
        </button>
        <button className="w-full text-lg bg-green-700 py-2 mt-1 rounded-full font-semibold tracking-wide">
        <Link to='/'>Sign In</Link>
        </button>
        <p className="font-semibold">
          You have`t any Account?
          <span className="text-blue-800">
          <a href="/sign-up"> Sign-Up</a>
          </span>
          
        </p>
      </form>
    </div>
  );
}
