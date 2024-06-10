import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from './Api';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import useGetProfile from '../hooks/useGetProfile';
import { setUser } from '../redux/userSlice';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch() ;


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${USER_API_END_POINT}/login`, { username, password });

      dispatch(setUser(response?.data?.user))
      if (response.status >= 200 && response.status < 300) {
        // If login successful, redirect to the home page
        toast.success('Login successful!');
        window.location.href = "/home"; // Redirect using Link tag
      } else {
        // Handle unsuccessful login (e.g., display error message)
        toast.error('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred while logging in.');
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className='flex items-center justify-evenly w-[80%]'>

        {/* Twitter logo */}
        <div>
          <img className='ml-3' width="300px" src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png" alt="Twitter Logo" />
        </div>

        {/* Login form */}
        <div className="text-center mr-6">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-4">Enter credentials to login</h1>
            <div className="mb-4">
              <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange} className="border border-gray-300 rounded-md px-3 py-2 w-64" />
            </div>
            <div className="mb-4">
              <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="border border-gray-300 rounded-md px-3 py-2 w-64" />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 w-64">Login</button>
          </form>
          <div className="mt-4">
            <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up here</Link></p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;