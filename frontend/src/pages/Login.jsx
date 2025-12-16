import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reload when we submit form
    try {
      const response = await axios.post("http://localhost:8081/auth/login");
      console.log(response);
      localStorage.setItem("token", response.data.token); // stores jwt token in localstorage
      navigate("/dashboard");
    } catch (err) {
      alert("Login error");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Login Page</h2>

      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="email"
          onChange={handleChange}
          name="email"
          className="border p-2 w-full"
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          className="border p-2 w-full"
        />
        <button className="bg-blue-500 text-white w-full p-2">Login</button>
      </form>
      <p className="text-gray-600 mt-4  font-semi-bold">
        Don't have an account?
        <span className="font-bold text-blue-600 ">
          <Link to="/register">Register</Link>
        </span>
      </p>
    </div>
  );
}

export default Login;
