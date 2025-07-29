import React, { useState } from 'react';
import { baknedUrl } from '../App';
import axios from "axios"
import { toast } from 'react-toastify';
const Login = ({settoken}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const onSubmit=async (e) => {
   try {
     e.preventDefault()
      const response=await axios.post("http://localhost:3000/api/admin/login",formData)
      if (response.data.success) {
       settoken(response.data.token)
       console.log(response.data.token);
       
       
      
     
   }
   else{
    toast.error(response.data.error)
   }
   } catch (error) {
    console.log(error);
    
   }}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form  onSubmit={onSubmit}className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Admin Login</h2>

        <div>
          <label className="block text-gray-600 mb-1">Write your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='write your name'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Write your email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='write your email'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Write your password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Pssword'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

