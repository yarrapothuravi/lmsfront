import React, { useState } from "react";
import FacultyNavbar from "../../components/facultyNavbar";

const FacultyContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    fromMail: "",
    phoneNo: "",
    subject: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:2004/faculty-contact/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.text();
        alert(result);
        setFormData({
          name: "",
          fromMail: "",
          phoneNo: "",
          subject: "",
          text: "",
        });
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <FacultyNavbar />

      {/* Contact Form */}
      <div className="flex justify-center items-center pt-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="fromMail"
                value={formData.fromMail}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              />
            </div>

            {/* Phone No */}
            <div>
              <label
                htmlFor="phoneNo"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter the subject"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
                required
                placeholder="Describe your issue"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-700"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FacultyContact;
