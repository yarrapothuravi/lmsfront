import React, { useState } from "react";
import FacultyNavbar from "../../components/facultyNavbar";
const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Ravi",
    id: "4654",
    department: "Computer Science Engineering",
    email: "ravi@gmail.com",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [formValues, setFormValues] = useState({ ...profile });
  const [emailOrUsername, setEmailOrUsername] = useState("");

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setFormValues({ ...profile });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSave = () => {
    setProfile({ ...formValues });
    setIsEditing(false);
  };

  const handlePasswordUpdateToggle = () => {
    setIsUpdatingPassword(!isUpdatingPassword);
    setEmailOrUsername("");
  };

  const handleSendOTP = () => {
    if (!emailOrUsername) {
      alert("Please enter your email or username.");
      return;
    }
    alert(`OTP has been sent to ${emailOrUsername}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Navbar */}
    <FacultyNavbar />
    <div className="ml-64 p-8">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>

      {/* Profile Details */}
      {!isEditing && !isUpdatingPassword && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-1/2">
          <h2 className="text-xl font-semibold mb-2">Profile Details</h2>
          <p>
            <strong>Name:</strong> {profile.name}
          </p>
          <p>
            <strong>ID:</strong> {profile.id}
          </p>
          <p>
            <strong>Department:</strong> {profile.department}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <div className="flex space-x-4 mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleEditToggle}
            >
              Edit Profile
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded"
              onClick={handlePasswordUpdateToggle}
            >
              Update Password
            </button>
          </div>
        </div>
      )}

      {/* Edit Profile */}
      {isEditing && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-1/2">
          <h2 className="text-xl font-semibold mb-2">Edit Profile</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">ID:</label>
              <input
                type="text"
                name="id"
                value={formValues.id}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Department:</label>
              <input
                type="text"
                name="department"
                value={formValues.department}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email:</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleEditToggle}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Update Password */}
      {isUpdatingPassword && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-1/2">
          <h2 className="text-xl font-semibold mb-2">Update Password</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Email or Username:
              </label>
              <input
                type="text"
                name="emailOrUsername"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handlePasswordUpdateToggle}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProfilePage;
