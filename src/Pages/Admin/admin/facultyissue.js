import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../../components/admin/sidebar";


const FacultyIssue = () => {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [response, setResponse] = useState("");

  // Fetch issues from backend
  useEffect(() => {
    axios
      .get("http://localhost:2004/faculty-contact/all")
      .then((res) => setIssues(res.data))
      .catch((err) => console.error("Error fetching issues:", err));
  }, []);

  // Handle issue response submission
  const handleResponseSubmit = () => {
    const updatedIssue = { 
      ...selectedIssue, 
      status: "Resolved",
      fromMail: selectedIssue.fromMail,
      subject: "Issue Resolved: " + selectedIssue.subject,
      text: response // Ensure the response is used here
    };
  
    axios.post("http://localhost:2004/faculty-contact/send-email", updatedIssue)
      .then(() => {
        setIssues((prevIssues) =>
          prevIssues.map((issue) =>
            issue.id === selectedIssue.id ? { ...issue, status: "Resolved" } : issue
          )
        );
        setSelectedIssue(null);
        setResponse("");
      })
      .catch((err) => console.error("Error sending email:", err));
  };    return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Issues List</h1>

        {/* Issues Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-2 text-sm text-gray-600">Name</th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">Email</th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">Subject</th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">Text</th>
                <th className="text-left px-4 py-2 text-sm text-gray-600">Status</th>
                <th className="text-center px-4 py-2 text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id} className="border-b hover:bg-gray-100 transition">
                  <td className="px-4 py-2 text-gray-700">{issue.name}</td>
                  <td className="px-4 py-2 text-gray-700">{issue.fromMail}</td>
                  <td className="px-4 py-2 text-gray-700">{issue.subject}</td>
                  <td className="px-4 py-2 text-gray-700">{issue.text}</td>
                  <td
                    className={`px-4 py-2 ${
                      issue.status === "Resolved"
                        ? "text-green-600"
                        : issue.status === "In Progress"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {issue.status || "Pending"}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
                      onClick={() => setSelectedIssue(issue)}
                    >
                      Respond
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Response Modal */}
        {selectedIssue && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-1/3 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Respond to Issue</h2>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Subject:</span> {selectedIssue.subject}
              </p>
              <textarea
                rows="5"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Write your response..."
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-indigo-300 focus:outline-none"
              ></textarea>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setSelectedIssue(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:ring focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleResponseSubmit}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
                >
                  Submit Response
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyIssue;
