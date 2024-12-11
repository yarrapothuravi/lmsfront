import React from "react";
import Sidebar from "../../components/admin/sidebar"; // Adjust the path as necessary

// Sample courses data (can be replaced with API data)
const sampleCourses = [
  {
    id: 1,
    courseName: "Introduction to React",
    courseId: "CS101",
    courseContent:
      "This course covers the basics of React, including JSX, components, and state management.",
  },
  {
    id: 2,
    courseName: "Advanced JavaScript",
    courseId: "CS201",
    courseContent:
      "Deep dive into JavaScript concepts like closures, prototypes, and asynchronous programming.",
  },
  {
    id: 3,
    courseName: "Web Development with Tailwind CSS",
    courseId: "CS301",
    courseContent: "Learn how to build responsive web pages using Tailwind CSS.",
  },
];

const ViewCourses = () => {
  // Edit course handler (for demonstration)
  const handleEdit = (course) => {
    alert(`Editing course: ${course.courseName}`);
  };

  // Delete course handler (for demonstration)
  const handleDelete = (courseId) => {
    alert(`Deleting course with ID: ${courseId}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">View Courses</h1>

        {/* Courses Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-2 text-sm text-gray-600">
                  Course Name
                </th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">
                  Course ID
                </th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">
                  Course Content
                </th>
                <th className="text-center px-4 py-2 text-sm text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sampleCourses.map((course) => (
                <tr
                  key={course.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2 text-gray-700">
                    {course.courseName}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{course.courseId}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {course.courseContent}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(course)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:ring focus:ring-blue-300 mr-4" // Added `mr-4` for spacing
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(course.courseId)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:ring focus:ring-red-300"
                    >
                      Delete
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

export default ViewCourses;
