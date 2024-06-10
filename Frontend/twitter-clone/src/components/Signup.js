import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { USER_API_END_POINT } from './Api';

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Form validation
    if (!name || !username || !password) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Log the credentials
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    try {
      const res = await axios.post(`${USER_API_END_POINT}/signup`, { name, username, password , confirmPassword});

      if (res.status === 201) {
        setSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login"; // Redirect using Link tag
        }, 2000);
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className='flex items-center justify-evenly w-[70%]'>

         {/* Twitter logo */}
         <div>
          <img className='ml-3' width="300px" src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png" alt="Twitter Logo" />
        </div>

        {/* Signup form */}
        <div className="my-3">
          <form onSubmit={onSubmit} className="flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-4">Create an account</h1>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            {success && <div className="mb-4 text-green-500">{success}</div>}
            <div className="mb-4">
              <input type="text" name="fullname" placeholder="Full Name"  value={name} onChange={handleNameChange} className="border border-gray-300 rounded-md px-3 py-2 w-64" />
            </div>
            <div className="mb-4">
              <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange}className="border border-gray-300 rounded-md px-3 py-2 w-64" />
            </div>
            <div className="mb-4">
              <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="border border-gray-300 rounded-md px-3 py-2 w-64" />
            </div>
            <div className="mb-4">
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} className="border border-gray-300 rounded-md px-3 py-2 w-64" />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 w-64">Sign Up</button>
          </form>
        </div>

        {/* Login link */}
        <div>
          <p className="text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
        </div>

      </div>
    </div>
  );
}

export default Signup;
