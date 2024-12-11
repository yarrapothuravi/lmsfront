

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/admin/sidebar";

const FacultyTable = () => {
  const [faculty, setFaculty] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null); // To hold selected student details
  const [showDetails, setShowDetails] = useState(false); // To toggle details view
  const navigate = useNavigate();

  // Fetch students from backend
  useEffect(() => {
    axios
      .get("http://localhost:2004/api/faculty/all")
      .then((response) => setFaculty(response.data))
      .catch((error) => console.error("Error fetching facultys:", error));
  }, []);

  const handleView = async (facultyId) => {
    try {
      const response = await axios.get(`http://localhost:2004/api/faculty/all/${facultyId}`);
      if (response.status === 200) {
        setSelectedFaculty(response.data); // Save student details
        setShowDetails(true); // Show details view
      } else {
        alert("Failed to fetch faculty details.");
      }
    } catch (error) {
      console.error("Error fetching faculty details:", error);
    }
  };

  const handleEdit = (faculty) => {
    navigate(`/admin/faculty/editfaculty/${faculty.id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this faculty?")) {
      try {
        await axios.delete(`http://localhost:2004/api/faculty/delete/${id}`);
        setFaculty((prev) => prev.filter((s) => s.id !== id));
      } catch (error) {
        console.error("Error deleting faculty:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="ml-4 p-8"> {/* Adjusted margin-left */}
        <h1 className="text-2xl font-bold mb-4">Faculty Table</h1>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">ID Number</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">joiningdate</th>
              <th className="border border-gray-300 px-4 py-2">Department</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone number</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">Salary</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {faculty.map((fac, index) => (
              <tr key={fac.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{fac.username}</td>
                <td className="border border-gray-300 px-4 py-2">{fac.fullname}</td>
                <td className="border border-gray-300 px-4 py-2">{fac.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{fac.joiningdate}</td>
                <td className="border border-gray-300 px-4 py-2">{fac.department}</td>
                <td className="border border-gray-300 px-4 py-2">{fac.email}</td>
                <td className="border border-gray-300 px-4 py-2">{fac.phonenumber}</td>
                <td className="border border-gray-300 px-4 py-2">{fac.age}</td>
                <td className="border border-gray-300 px-4 py-2">{fac.salaray}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleView(fac.id)}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleEdit(fac)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(fac.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Student Details Modal */}
        {showDetails && selectedFaculty && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Faculty Details</h2>
              <p><strong>ID:</strong> {selectedFaculty.username}</p>
              <p><strong>Name:</strong> {selectedFaculty.fullname}</p>
              <p><strong>Gender:</strong> {selectedFaculty.gender}</p>
              <p><strong>Department:</strong> {selectedFaculty.department}</p>
              <p><strong>Age:</strong> {selectedFaculty.age}</p>
              <p><strong>Email:</strong> {selectedFaculty.email}</p>
              <p><strong>Phone Number:</strong> {selectedFaculty.phonenumber}</p>
              <p><strong>Salary:</strong> {selectedFaculty.salaray}</p>
              <p><strong>joiningdate:</strong> {selectedFaculty.joiningdate}</p>
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

export default FacultyTable;
