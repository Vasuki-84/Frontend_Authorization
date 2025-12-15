import React from "react";
import { Link } from 'react-router-dom'
import {baseUrl} from "../api"
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Login() {
  return (
     <div className='p-6 max-w-sm mx-auto'>
        <h2 className='text-xl font-bold mb-4'>Login Page</h2>

        <form  className='space-y-4'>
            <input name='email' className='border p-2 w-full' type="email" />
            <input name='password'  className='border p-2 w-full' type="password" />
            <button type='submit' className='bg-blue-500 text-white p-2 w-full'>Login</button>
        </form>
        <p className='mt-4 text-gray-600 font-semibold'>Don't have an account? <span><Link className='text-blue-500 font-exrabold' to="/register">Register</Link></span></p>
    </div>
  );
}

export default Login;
