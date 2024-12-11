import React, { useState } from "react";

const Sidebar = () => {
  const [studentDropdown, setStudentDropdown] = useState(false);
  const [facultyDropdown, setFacultyDropdown] = useState(false);
  const [adminDropdown, setAdminDropdown] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [issueDropdown, setIssueDropdown] = useState(false);

  const toggleDropdown = (setDropdown) => {
    setDropdown((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex">
      <div className="w-64 bg-gray-900 shadow-lg flex flex-col justify-between">
        <div>
          <div className="p-4 text-lg font-bold text-center border-b border-gray-700">
            Admin
          </div>
          <ul className="mt-4">
            {/* Dashboard */}
            <li className="px-6 py-2 hover:bg-gray-700">
              <a href="/Admin/Admindashboard" className="block">
                Dashboard
              </a>
            </li>

            {/* Student */}
            <li>
              <button
                className="w-full text-left px-6 py-2 hover:bg-gray-700 flex justify-between"
                onClick={() => toggleDropdown(setStudentDropdown)}
              >
                Student
                
              </button>
              {studentDropdown && (
                <ul className="ml-6">
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/student/addstudent">Add Student</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/student/display">Display </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Faculty */}
            <li>
              <button
                className="w-full text-left px-6 py-2 hover:bg-gray-700 flex justify-between"
                onClick={() => toggleDropdown(setFacultyDropdown)}
              >
                Faculty
              
              </button>
              {facultyDropdown && (
                <ul className="ml-6">
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/faculty/addfaculty">Add Faculty</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/faculty/facultydisplay">Display</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/faculty/content-creator">Content Creator</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Admin */}
            <li>
              <button
                className="w-full text-left px-6 py-2 hover:bg-gray-700 flex justify-between"
                onClick={() => toggleDropdown(setAdminDropdown)}
              >
                Admin
               
              </button>
              {adminDropdown && (
                <ul className="ml-6">
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/admin/addadmin">Add Admin</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/admin/display">Display</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/role">Role</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Course */}
            <li>
              <button
                className="w-full text-left px-6 py-2 hover:bg-gray-700 flex justify-between"
                onClick={() => toggleDropdown(setCourseDropdown)}
              >
                Course
               
              </button>
              {courseDropdown && (
                <ul className="ml-6">
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/addcourse">Add Course</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/viewcourse">View </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Issues */}
            <li>
              <button
                className="w-full text-left px-6 py-2 hover:bg-gray-700 flex justify-between"
                onClick={() => toggleDropdown(setIssueDropdown)}
              >
                Issues
                
              </button>
              {issueDropdown && (
                <ul className="ml-6">
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admin/studentissue"> Student Issues</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-gray-700">
                    <a href="/admmin/facultyissue">Faculty Issues </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Settings */}
            <li className="px-6 py-2 hover:bg-gray-700">
              <a href="/admin/settings" className="block">
                Settings
              </a>
            </li>
          </ul>
        </div>

        {/* Logout */}
        <ul>
          <li className="px-6 py-2 hover:bg-red-600">
            <a href="/" className="block">
              Logout
            </a>
          </li>
        </ul>
      </div>

     
    </div>
  );
};

export default Sidebar;
