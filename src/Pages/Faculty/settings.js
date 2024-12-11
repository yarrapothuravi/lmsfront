import React, { useState } from "react";
import FacultyNavbar from "../../components/facultyNavbar";
const FacultySettings = () => {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    notificationPreference: "Email",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Navbar */}
    <FacultyNavbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Faculty Settings
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={profileData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">
              Notification Preference
            </label>
            <select
              name="notificationPreference"
              value={profileData.notificationPreference}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Email">Email</option>
              <option value="SMS">SMS</option>
              <option value="Push Notifications">Push Notifications</option>
            </select>
          </div>
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

export default FacultySettings;
