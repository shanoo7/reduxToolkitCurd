import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const countUsers =  useSelector((state)=>state.app.users)
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-yellow-400 text-3xl">⚡</span> {/* Icon */}
          <span>MyApp</span>
        </Link>

        {/* Right: Navigation Links */}
        <ul className="flex gap-6 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home <span className="text-red-500 font-bold">{countUsers.length}</span>
            </Link>
          </li>
          <li>
        
          </li>
          <li>
            <Link
              to="/form"
              className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              + Add User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
