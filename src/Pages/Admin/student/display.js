

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/admin/sidebar";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // To hold selected student details
  const [showDetails, setShowDetails] = useState(false); // To toggle details view
  const navigate = useNavigate();

  // Fetch students from backend
  useEffect(() => {
    axios
      .get("http://localhost:2004/api/students/all")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const handleView = async (studentId) => {
    try {
      const response = await axios.get(`http://localhost:2004/api/students/all/${studentId}`);
      if (response.status === 200) {
        setSelectedStudent(response.data); // Save student details
        setShowDetails(true); // Show details view
      } else {
        alert("Failed to fetch student details.");
      }
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  const handleEdit = (student) => {
    navigate(`/admin/student/editstudent/${student.id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:2004/api/students/delete/${id}`);
        setStudents((prev) => prev.filter((s) => s.id !== id));
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="ml-4 p-8"> {/* Adjusted margin-left */}
        <h1 className="text-2xl font-bold mb-4">Student Table</h1>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">ID Number</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">Year</th>
              <th className="border border-gray-300 px-4 py-2">Branch</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone number</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{student.username}</td>
                <td className="border border-gray-300 px-4 py-2">{student.fullname}</td>
                <td className="border border-gray-300 px-4 py-2">{student.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{student.year}</td>
                <td className="border border-gray-300 px-4 py-2">{student.branch}</td>
                <td className="border border-gray-300 px-4 py-2">{student.email}</td>
                <td className="border border-gray-300 px-4 py-2">{student.phonenumber}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleView(student.id)}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Student Details Modal */}
        {showDetails && selectedStudent && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Student Details</h2>
              <p><strong>ID:</strong> {selectedStudent.username}</p>
              <p><strong>Name:</strong> {selectedStudent.fullname}</p>
              <p><strong>Gender:</strong> {selectedStudent.gender}</p>
              <p><strong>Year:</strong> {selectedStudent.year}</p>
              <p><strong>Branch:</strong> {selectedStudent.branch}</p>
              <p><strong>Email:</strong> {selectedStudent.email}</p>
              <p><strong>Phone Number:</strong> {selectedStudent.phonenumber}</p>
              <p><strong>Address:</strong> {selectedStudent.address}</p>
              <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                onClick={() => setShowDetails(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentTable;
