import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Page refresh roko

    // Simple Hardcoded Logic for Demo
    if (email === 'admin@xyz.com' && password === '1234') {
      alert("Welcome Admin! 👑");
      navigate('/admin-dashboard');
    } 
    else if (email === 'emp@xyz.com' && password === '1234') {
      alert("Welcome Employee! 👨‍💼");
      navigate('/employee-dashboard');
    } 
    else {
      alert("❌ Invalid Credentials! \nTry: admin@xyz.com / 1234");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Login Panel</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="admin@xyz.com" 
              className="w-full border p-2 rounded focus:outline-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="1234" 
              className="w-full border p-2 rounded focus:outline-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          (Demo: admin@xyz.com / 1234)
        </p>
      </div>
    </div>
  );
};

export default Login;