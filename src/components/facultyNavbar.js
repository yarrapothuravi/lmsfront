import React, { useState } from "react";
import sdclogo from "../assets/images/sdclogo.png"; 
import profileImage from "../assets/images/profile.jpg";

const FacultyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <nav className="bg-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-3">
          <img src={sdclogo} alt="SDC Logo" className="w-10 h-10 rounded-full" />
       
        </div>

        {/* Center Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a href="/faculty/dashboard" className="hover:text-gray-300 transition">
            Home
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-300 focus:outline-none transition"
            >
              Courses
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-10">
                <a
                  href="/faculty/mycourses"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  My Courses
                </a>
                <a
                  href="/faculty/cources"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Courses
                </a>
                <a
                  href="/faculty/createcourses"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                 Create Courses
                </a>
              </div>
            )}
          </div>
          <a href="/faculty/contactus" className="hover:text-gray-300 transition">
            Contact
          </a>
        </div>

        {/* Right Side - Profile Photo */}
        <div className="relative hidden md:block">
          <button
            onClick={toggleProfileDropdown}
            className="focus:outline-none"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </button>
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-10">
              <a href="/faculty/profile" className="block px-4 py-2 hover:bg-gray-200">
                Profile
              </a>
              <a href="/faculty/settings" className="block px-4 py-2 hover:bg-gray-200">
                Settings
              </a>
              <a href="/" className="block px-4 py-2 hover:bg-gray-200">
                Logout
              </a>
            </div>
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-700">
          <a href="/faculty/dashboard" className="block px-4 py-2 hover:bg-purple-500">
            Home
          </a>
          <a href="/faculty/mycourses" className="block px-4 py-2 hover:bg-purple-500">
            My Courses
          </a>
          <a href="/faculty/course" className="block px-4 py-2 hover:bg-purple-500">
            Courses
          </a>
          <a href="/faculty/contactus" className="block px-4 py-2 hover:bg-purple-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default FacultyNavbar;
