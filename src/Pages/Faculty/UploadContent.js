import React, { useState } from "react";
import FacultyNavbar from "../../components/facultyNavbar"; // Adjust the path if needed

const CourseUpload = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log({
      courseName,
      description,
      file,
    });
    alert("Course uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <FacultyNavbar />

      <div className="flex items-center justify-center p-5">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-purple-600 mb-6 text-center">
            Upload New Course
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Course Name */}
            <div className="mb-4">
              <label
                htmlFor="courseName"
                className="block text-gray-700 font-medium mb-2"
              >
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter course name"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-2"
              >
                Course Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter course description"
                rows="4"
              ></textarea>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label
                htmlFor="file"
                className="block text-gray-700 font-medium mb-2"
              >
                Upload Course File
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full px-4 py-2 border rounded-md focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-purple-600 file:cursor-pointer hover:file:bg-purple-700"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              >
                Upload Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseUpload;
