import React, { useState } from 'react';

const StudentNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="text-white text-xl font-bold">
        <a href="/">Logo</a>
      </div>

      {/* Center - Menu Items */}
      <div className="flex space-x-6">
        <a href="/student/dashboard" className="text-white hover:text-blue-500">
          Home
        </a>
        <a href="/student/enrollcourse" className="text-white hover:text-blue-500">
          Dashboard
        </a>
        <a href="/student/studentmycourses" className="text-white hover:text-blue-500">
          My Courses
        </a>
      </div>

      {/* Right - Profile Image with Dropdown */}
      <div className="relative">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png" // Replace with actual profile image URL
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <a
              href="/student/profile"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="/student/connectus"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Contact Us
            </a>
            <a
              href="/student/settings"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
            Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default StudentNavbar;
