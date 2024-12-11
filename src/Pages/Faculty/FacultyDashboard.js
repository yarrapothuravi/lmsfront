import React from "react";
import { useNavigate } from "react-router-dom";
import FacultyNavbar from "../../components/facultyNavbar";

const FacultyDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <FacultyNavbar />

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">
          Faculty Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Announcements */}
          <div className="col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Announcements
            </h2>
            <ul className="space-y-2">
              <li className="p-4 bg-gray-100 rounded-lg shadow-sm">
                📢 <span className="font-medium">Staff meeting</span> scheduled
                for 2 PM tomorrow.
              </li>
              <li className="p-4 bg-gray-100 rounded-lg shadow-sm">
                🔔 Final exam schedules have been updated.
              </li>
              <li className="p-4 bg-gray-100 rounded-lg shadow-sm">
                🚀 New research guidelines have been published.
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Actions
            </h2>
            <div className="flex flex-col space-y-4">
            <button
          className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700"
          onClick={() => navigate("/faculty/uploadgrades")}
        >
          Upload Grades
        </button>
        <button
          className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700"
          onClick={() => navigate("/faculty/createquiz")}
        >Create Quizs</button>
              <button
          className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700"
          onClick={() => navigate("/faculty/cources")}
        >
          Manage Courses
        </button>
              <button
          className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700"
          onClick={() => navigate("/faculty/createcourses")}
        >
          Create Course
        </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <ul className="space-y-2">
            <li className="p-4 bg-gray-100 rounded-lg shadow-sm">
              🗓️ Faculty workshop on modern teaching techniques - March 10.
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow-sm">
              📅 Research submission deadline - April 15.
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow-sm">
              🏅 Annual awards ceremony - June 5.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
