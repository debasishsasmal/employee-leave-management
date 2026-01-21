import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Asli app mein yahan hum data clear karte hain
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left Side: Logo/Title */}
      <div className="text-xl font-bold">
        🌿 Leave Management System
        <span className="ml-2 text-sm bg-gray-600 px-2 py-1 rounded-full">
          {role === 'admin' ? 'Admin Panel' : 'Employee Panel'}
        </span>
      </div>

      {/* Right Side: Logout Button */}
      <button 
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm font-semibold transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;