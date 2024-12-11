import React from "react";
import { useNavigate } from "react-router-dom";
import FacultyNavbar from "../../components/facultyNavbar"; // Adjust the path as necessary

// Mock Data: Courses registered by the faculty
const courses = [
  { id: 1, name: "Introduction to React", code: "CS101", faculty: "John Doe" },
  { id: 2, name: "Advanced JavaScript", code: "CS201", faculty: "John Doe" },
  { id: 3, name: "Web Development with Tailwind CSS", code: "CS301", faculty: "John Doe" },
];

const MyCourses = () => {
    const navigate = useNavigate(); // Initialize navigate

  const handleUploadClick = (courseId) => {
    navigate(`/faculty/uploadcourse/${courseId}`); // Navigate to upload page with course ID
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <FacultyNavbar />

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Faculty Registered Courses
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-2 text-sm text-gray-600">#</th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">
                  Course Name
                </th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">
                  Course Code
                </th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">
                  Faculty
                </th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">
                  Upload Content
                </th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">
                  Contact
                </th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">
                  View Mapped Students
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={course.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                  <td className="px-4 py-2 text-gray-700">{course.name}</td>
                  <td className="px-4 py-2 text-gray-700">{course.code}</td>
                  <td className="px-4 py-2 text-gray-700">{course.faculty}</td>
                  <td className="px-4 py-2 text-gray-700">
                  <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                      onClick={() => handleUploadClick(course.id)}
                    >
                      Upload
                    </button>
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                      Contact
                    </button>
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
