import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      {" "}
      <div className="p-6 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Register Page</h2>

        <form className="space-y-4 ">
          <input type="name" className="border p-2 w-full" />
          <input type="email" className="border p-2 w-full" />
          <input type="password" className="border p-2 w-full" />
          <input type="text" className="border p-2 w-full" />

          <button className="bg-blue-500 text-white w-full p-2">
            Register
          </button>
        </form>
        <p className="text-gray-600 mt-4  font-semi-bold">
          Already have an account?{" "}
          <span className="font-bold text-blue-600 ">
            <Link to="/">login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
