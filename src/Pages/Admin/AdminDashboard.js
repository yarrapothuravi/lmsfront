import React from "react";
import Sidebar from "../../components/admin/sidebar"; // Adjust the path to your Sidebar component

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
   
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Admin Dashboard
        </h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Students */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Students
            </h2>
            <p className="text-3xl font-bold text-purple-600 mt-2">350</p>
            <p className="text-gray-500 mt-1">Active Enrollments</p>
          </div>

          {/* Total Faculty */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Faculty
            </h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">45</p>
            <p className="text-gray-500 mt-1">Teaching Staff</p>
          </div>

          {/* Total Courses */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Courses
            </h2>
            <p className="text-3xl font-bold text-green-600 mt-2">20</p>
            <p className="text-gray-500 mt-1">Available Courses</p>
          </div>

          {/* Issues */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Issues</h2>
            <p className="text-3xl font-bold text-red-600 mt-2">5</p>
            <p className="text-gray-500 mt-1">Pending Issues</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ul className="divide-y divide-gray-200">
              <li className="py-3 flex justify-between">
                <span className="text-gray-600">
                  New student registered: <strong>Jane Doe</strong>
                </span>
                <span className="text-gray-500">2 hours ago</span>
              </li>
              <li className="py-3 flex justify-between">
                <span className="text-gray-600">
                  Faculty added: <strong>Dr. Smith</strong>
                </span>
                <span className="text-gray-500">5 hours ago</span>
              </li>
              <li className="py-3 flex justify-between">
                <span className="text-gray-600">
                  New course created: <strong>React Basics</strong>
                </span>
                <span className="text-gray-500">1 day ago</span>
              </li>
              <li className="py-3 flex justify-between">
                <span className="text-gray-600">
                  Issue reported: <strong>Login Bug</strong>
                </span>
                <span className="text-gray-500">3 days ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
