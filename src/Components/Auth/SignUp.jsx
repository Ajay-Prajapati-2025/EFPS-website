import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="max-w-2xl mx-auto border-2 my-16 bg-gray-100 rounded-lg p-3">
      <h1 className="text-3xl font-semibold flex items-center justify-center p-2 my-5">
        Sign Up
      </h1>
      <form className="flex flex-col gap-6 mx-3 mt-4">
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
        <input
          type="password"
          placeholder="*******"
          className="w-full bg-white p-3 mt-1 rounded-lg mb-3 font-semibold tracking-wide"
          required
        />
        <button className="w-full bg-red-500 py-2 mt-1 rounded-full font-semibold tracking-wide">
          Reset
        </button>
        
        <button className="w-full bg-green-700 py-2 mt-1 rounded-full font-semibold tracking-wide">
        <Link to='/sign-up'>Sign Up</Link>
        </button>
        <p className="font-semibold">
          You have already an Account?
          <span className='text-blue-800'>
          <a href="/login"> Sign-In</a>
          </span>
        </p>
      </form>
    </div>
  )
}
