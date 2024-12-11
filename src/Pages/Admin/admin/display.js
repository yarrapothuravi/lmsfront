

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/admin/sidebar";

const AdminTable = () => {
  const [admin, setAdmin] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null); // To hold selected student details
  const [showDetails, setShowDetails] = useState(false); // To toggle details view
  const navigate = useNavigate();

  // Fetch students from backend
  useEffect(() => {
    axios
      .get("http://localhost:2004/api/admin/all")
      .then((response) => setAdmin(response.data))
      .catch((error) => console.error("Error fetching admin:", error));
  }, []);

  const handleView = async (adminId) => {
    try {
      const response = await axios.get(`http://localhost:2004/api/admin/all/${adminId}`);
      if (response.status === 200) {
        setSelectedAdmin(response.data); // Save student details
        setShowDetails(true); // Show details view
      } else {
        alert("Failed to fetch admin details.");
      }
    } catch (error) {
      console.error("Error fetching admin details:", error);
    }
  };

  const handleEdit = (admin) => {
    navigate(`/admin/editadmin/${admin.id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      try {
        await axios.delete(`http://localhost:2004/api/admin/delete/${id}`);
        setAdmin((prev) => prev.filter((s) => s.id !== id));
      } catch (error) {
        console.error("Error deleting admin:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="ml-4 p-8"> {/* Adjusted margin-left */}
        <h1 className="text-2xl font-bold mb-4">Admin Table</h1>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">ID Number</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
          
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone number</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>

              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((ad, index) => (
              <tr key={ad.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{ad.username}</td>
                <td className="border border-gray-300 px-4 py-2">{ad.fullname}</td>
                <td className="border border-gray-300 px-4 py-2">{ad.gender}</td>

                <td className="border border-gray-300 px-4 py-2">{ad.address}</td>
                <td className="border border-gray-300 px-4 py-2">{ad.email}</td>
                <td className="border border-gray-300 px-4 py-2">{ad.phonenumber}</td>
                <td className="border border-gray-300 px-4 py-2">{ad.role}</td>
              
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleView(ad.id)}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleEdit(ad)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(ad.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Student Details Modal */}
        {showDetails && selectedAdmin && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600">Admin Details</h2>
              <p><strong>ID:</strong> {selectedAdmin.username}</p>
              <p><strong>Name:</strong> {selectedAdmin.fullname}</p>
              <p><strong>Gender:</strong> {selectedAdmin.gender}</p>
              <p><strong>Address:</strong> {selectedAdmin.address}</p>
              <p><strong>Role:</strong> {selectedAdmin.role}</p>
              <p><strong>Email:</strong> {selectedAdmin.email}</p>
              <p><strong>Phone Number:</strong> {selectedAdmin.phonenumber}</p>
              
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

export default AdminTable;
