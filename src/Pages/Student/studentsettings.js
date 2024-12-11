import React, { useState } from "react";
import StudentNavbar from "../../components/navbar";
const StudentSettings = () => {
  const [formData, setFormData] = useState({
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    currentPassword: "",
    newPassword: "",
    notificationPreference: "Email",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings Updated:", formData);
    alert("Settings Updated Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Navbar */}
    <StudentNavbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Student Settings
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Section */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="currentPassword">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your current password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter a new password"
            />
          </div>

          {/* Notification Preference */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">
              Notification Preference
            </label>
            <select
              name="notificationPreference"
              value={formData.notificationPreference}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Email">Email</option>
              <option value="SMS">SMS</option>
              <option value="Push Notifications">Push Notifications</option>
            </select>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default StudentSettings;
