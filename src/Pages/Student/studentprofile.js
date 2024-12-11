import React, { useState } from "react";

import StudentNavbar from "../../components/navbar";
const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
    console.log("Updated Profile Data:", profileData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Navbar */}
  <StudentNavbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Student Profile
        </h2>
        <form>
          {/* Full Name */}
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
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                isEditing
                  ? "border-blue-400 focus:ring-blue-400"
                  : "bg-gray-100 cursor-not-allowed"
              }`}
              disabled={!isEditing}
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
              value={profileData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                isEditing
                  ? "border-blue-400 focus:ring-blue-400"
                  : "bg-gray-100 cursor-not-allowed"
              }`}
              disabled={!isEditing}
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                isEditing
                  ? "border-blue-400 focus:ring-blue-400"
                  : "bg-gray-100 cursor-not-allowed"
              }`}
              disabled={!isEditing}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            {isEditing ? (
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
              >
                Save
              </button>
            ) : null}
            <button
              type="button"
              onClick={toggleEdit}
              className={`px-4 py-2 text-white rounded-md focus:outline-none ${
                isEditing ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default StudentProfile;
