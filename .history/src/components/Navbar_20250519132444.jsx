import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for menu toggle
import { searchUser } from "../app/slices/userDetailsSlice";

function Navbar() {
  const dispatch = useDispatch()
  const countUsers = useSelector((state) => state.app.users);
  const [menuOpen, setMenuOpen] = useState(false);
const [searchData,setSearchData] = useState("")

// console.log(searchData)

useEffect(()=>{
  dispatch(searchUser(searchData));
},[searchData])



  return (
    <nav className="bg-gray-800 text-white py-4 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex  px-4 lg:px-6">
        
        {/* Left: Logo */}
        <Link to="/" className="text-sm md:text-2xl font-bold flex items-center gap-2">
          <span className="text-yellow-400 text-3xl">⚡</span> {/* Icon */}
          <span>MyApp</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
        aria-label="Menu Open"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl focus:outline-none z-10"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:gap-6 text-lg absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent px-4 lg:px-0 py-4 lg:py-0 transition-all duration-300 ease-in-out z-40 ${
            menuOpen ? "block" : "hidden"
          }`}
        >

          {/* Search */}
          <li className="w-full lg:w-auto">
            <input
            value={searchData}
            onChange={(e)=>setSearchData(e.target.value)}
              className="bg-white p-2 w-full rounded text-gray-700 outline-none"
              placeholder="Search users..."
            />
          </li>
          <li className="mt-3 lg:mt-0">
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300 block lg:inline-block"
            >
              Home <span className="text-red-500 font-bold">{countUsers.length}</span>
            </Link>
          </li>
          <li className="mt-3 lg:mt-0">
            <Link
              to="/form"
              className="block lg:inline-block bg-yellow-500 text-sm text-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition duration-300"
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

