import React, { useState } from "react";
import Sidebar from "../../components/admin/sidebar";

const AdminSettings = () => {
  const [formValues, setFormValues] = useState({
    siteName: "My Dashboard",
    themeColor: "#4f46e5", // Default Tailwind Indigo
    notificationsEnabled: true,
    email: "admin@example.com",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings Saved!");
    console.log("Saved Settings:", formValues);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 p-6 flex-grow">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Admin Settings
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Site Name */}
            <div className="mb-4">
              <label
                htmlFor="siteName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Site Name
              </label>
              <input
                type="text"
                id="siteName"
                name="siteName"
                value={formValues.siteName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>

            {/* Theme Color */}
            <div className="mb-4">
              <label
                htmlFor="themeColor"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Theme Color
              </label>
              <input
                type="color"
                id="themeColor"
                name="themeColor"
                value={formValues.themeColor}
                onChange={handleInputChange}
                className="w-16 h-10 border rounded-lg focus:outline-none"
              />
            </div>

            {/* Notifications */}
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="notificationsEnabled"
                  checked={formValues.notificationsEnabled}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Enable Notifications</span>
              </label>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Admin Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Admin Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
              />
            </div>

            {/* Save Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
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

export default AdminSettings;
