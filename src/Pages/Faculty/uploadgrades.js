import React, { useState } from "react";
import FacultyNavbar from "../../components/facultyNavbar";

function UploadGrades() {
  const [grades, setGrades] = useState({ student: "", subject: "", grade: "", file: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGrades({ ...grades, [name]: value });
  };

  const handleFileChange = (e) => {
    setGrades({ ...grades, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Grades uploaded successfully!");
    // Add your upload logic here
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <FacultyNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Upload Grades</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Select Student */}
            <div>
              <label
                htmlFor="student"
                className="block text-gray-700 font-medium mb-2"
              >
                Select Student
              </label>
              <select
                id="student"
                name="student"
                value={grades.student}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="" disabled>
                  -- Select a Student --
                </option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                <option value="Mark Johnson">Mark Johnson</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={grades.subject}
                onChange={handleInputChange}
                placeholder="Enter subject name"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Grade */}
            <div>
              <label
                htmlFor="grade"
                className="block text-gray-700 font-medium mb-2"
              >
                Grade
              </label>
              <input
                type="text"
                id="grade"
                name="grade"
                value={grades.grade}
                onChange={handleInputChange}
                placeholder="Enter grade (e.g., A, B+, etc.)"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Upload File */}
            <div>
              <label
                htmlFor="file"
                className="block text-gray-700 font-medium mb-2"
              >
                Upload Grade File (Optional)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="w-full text-gray-600 border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700"
              >
                Upload Grades
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadGrades;
