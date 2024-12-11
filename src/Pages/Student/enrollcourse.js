import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StudentNavbar from "../../components/navbar"; // Import your student navigation bar component

const EnrollCourse = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState(new Set()); // Track enrolled courses
  const navigate = useNavigate();

  // Fetch courses from backend
  useEffect(() => {
    axios
      .get("http://localhost:2004/api/course/all") // Replace with your API endpoint
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));

    // Initialize enrolledCourses from localStorage
    const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(new Set(storedCourses));
  }, []);

  // Handle enrollment
  const handleEnroll = (courseId) => {
    axios
      .post(`http://localhost:2004/api/course/enroll`, { courseId }) // Replace with your API endpoint
      .then((response) => {
        alert(response.data.message || "Enrolled successfully!");

        // Update state and localStorage
        setEnrolledCourses((prevSet) => {
          const updatedSet = new Set(prevSet).add(courseId);

          // Store updated enrolled courses in localStorage
          localStorage.setItem("enrolledCourses", JSON.stringify(Array.from(updatedSet)));

          return updatedSet;
        });
      })
      .catch((error) => {
        console.error("Error enrolling in course:", error);
        alert("Failed to enroll in the course. Please try again.");
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <StudentNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.courseId}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {course.courseId}: {course.title}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button
                className={`py-2 px-4 rounded-lg ${
                  enrolledCourses.has(course.courseId)
                    ? "bg-green-600 text-white cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => {
                  if (!enrolledCourses.has(course.courseId)) handleEnroll(course.courseId);
                }}
                disabled={enrolledCourses.has(course.courseId)}
              >
                {enrolledCourses.has(course.courseId) ? "Enrolled" : "Enroll"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
