import React, { useState } from "react";
import Sidebar from "../../components/admin/sidebar";

const AddCourse = () => {
  // State for form values
  const [formValues, setFormValues] = useState({
    courseName: "",
    courseId: "",
    courseContent: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Added:", formValues);
    alert("Course Added Successfully!");
    // Clear the form after submission
    setFormValues({
      courseName: "",
      courseId: "",
      courseContent: "",
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Course</h1>
          <form onSubmit={handleSubmit}>
            {/* Course Name */}
            <div className="mb-4">
              <label
                htmlFor="courseName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={formValues.courseName}
                onChange={handleInputChange}
                placeholder="Enter course name"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                required
              />
            </div>

            {/* Course ID */}
            <div className="mb-4">
              <label
                htmlFor="courseId"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Course ID
              </label>
              <input
                type="text"
                id="courseId"
                name="courseId"
                value={formValues.courseId}
                onChange={handleInputChange}
                placeholder="Enter course ID"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                required
              />
            </div>

            {/* Course Content */}
            <div className="mb-4">
              <label
                htmlFor="courseContent"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Course Content
              </label>
              <textarea
                id="courseContent"
                name="courseContent"
                value={formValues.courseContent}
                onChange={handleInputChange}
                placeholder="Enter course details or content"
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
