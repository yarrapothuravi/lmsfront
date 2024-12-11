import React, { useEffect, useState } from "react";
import FacultyNavbar from "../../components/facultyNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageCourses= () => {
  const [courses, setCourse] = useState([]);
  const navigate = useNavigate();

  // Fetch admins from backend
  useEffect(() => {
    axios
      .get("http://localhost:2004/api/course/all") // Replace with your API endpoint
      .then((response) => setCourse(response.data))
      .catch((error) => console.error("Error fetching course:", error));
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <FacultyNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-purple-600 mb-2">
                {course.courseId}: {course.title}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                onClick={() => alert(`Viewing details for ${course.title}`)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageCourses;
