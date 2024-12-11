import React, { useState, useEffect } from "react";
import StudentNavbar from "../../components/navbar";

function StudentMyCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses from localStorage
    const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedCourses);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <StudentNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Courses</h1>
        {enrolledCourses.length > 0 ? (
          <ul className="list-disc pl-6">
            {enrolledCourses.map((courseId, index) => (
              <li key={index} className="text-gray-700">
                Course ID: {courseId}
              </li>
            ))}
          </ul> 
        ) : (
          <p className="text-gray-600">No courses enrolled yet.</p>
        )}
      </div>
    </div>
  );
}

export default StudentMyCourses;
