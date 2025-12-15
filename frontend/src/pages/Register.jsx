import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Register Page</h2>

      <form className="space-y-4">
        <input
          name="name"
          type="text"
          className="border p-2 w-full"
        />
        <input
          name="email"
          className="border p-2 w-full"
          type="email"
        />
        <input
          name="password"
        
          className="border p-2 w-full"
          type="password"
        />
        <input
          name="role"
          type="text"
          className="border p-2 w-full"
        />
        <button className="bg-blue-500 text-white p-2 w-full">Register</button>
      </form>
      <p className="mt-4 text-gray-600 font-semibold">
        Already have an account{" "}
        <span>
          <Link className="text-blue-500 font-exrabold" to="/">
            Login
          </Link>
        </span>
      </p>
    </div>
  );
}

export default Register;
