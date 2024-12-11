import React, { useState } from "react";
import Sidebar from "../../../components/admin/sidebar";

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    password: "",
    email: "",
    phonenumber: "",
    gender: "Male", // Default gender
    address: "",
    role: "Admin", // Default role

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2004/api/admin/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Admin added successfully!");
        setFormData({
          username: "",
          fullname: "",
          password: "",
          email: "",
          phonenumber: "",
          address:"",
          role:"",
          gender: "",
     
        });
      } else {
        alert("Failed to add admin. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-16 p-8">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">
            Add New Admin
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter username"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300"
                required
              />
            </div>

            {/* Full Name Field */}
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Enter full name"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300"
                required
              />
            </div>

            {/* Gender Field */}
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Address Field */}
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter address"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300"
                required
              />
            </div>

            {/* Role Field */}
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300"
              >
                <option value="Admin">Admin</option>
                <option value="Super Admin">Super Admin</option>
              </select>
            </div>

           

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Add Admin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
