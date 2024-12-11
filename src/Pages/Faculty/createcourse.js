import React, { useState } from "react";
import FacultyNavbar from "../../components/facultyNavbar"; // Import the FacultyNavbar component

function CreateCourse() {
  const [course, setCourse] = useState({
    courseId: "",
    title: "",
    description: "",
    topicsCovered: "",
    duration: "",
    level: "",
    language: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2004/api/course/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });

      if (response.ok) {
        alert("Course added successfully!");
        setCourse({
          courseId: "",
          title: "",
          description: "",
          topicsCovered: "",
          duration: "",
          level:"",
          language:"",
          startDate: "",
          endDate:"",
        });
      } else {
        alert("Failed to add course. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };


  return (
    <div>
      {/* Render the FacultyNavbar */}
      <FacultyNavbar />

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 bg-white shadow-md rounded-md mt-6">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">Create Course</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Course ID</label>
            <input
              type="text"
              name="courseId"
              value={course.courseId}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter Course ID"
              required
            />
          </div>
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={course.title}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter Course Title"
              required
            />
          </div>
          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={course.description}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter Course Description"
              rows="4"
              required
            />
          </div>
          {/* Topics Covered */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Topics Covered</label>
            <input
              type="text"
              name="topicsCovered"
              value={course.topicsCovered}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter Topics Covered"
              required
            />
          </div>
          {/* Duration */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Duration</label>
            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter Duration (e.g., 4 weeks)"
              required
            />
          </div>
          {/* Level */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Level</label>
            <select
              name="level"
              value={course.level}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          {/* Language */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Language</label>
            <input
              type="text"
              name="language"
              value={course.language}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter Language"
              required
            />
          </div>
          {/* Start Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={course.startDate}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          {/* End Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">End Date</label>
            <input
              type="date"
              name="endDate"
              value={course.endDate}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md hover:bg-purple-700"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCourse;
