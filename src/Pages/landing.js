import React from "react";
import { useNavigate } from "react-router-dom";
import student from '../assets/images/student.png'
import dev1 from '../assets/images/dev1.jpg'; // Correct path for developer image 1
import dev2 from '../assets/images/dev2.jpg'; // Correct path for developer image 2
import meka from '../assets/images/meka.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Redirect to the Login page
  };


  return (
    <div className="bg-purple-500 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">LMS Logo</div>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Transform Your Future with Education
          </h1>
          <p className="text-lg text-white mb-4">
            Access a variety of online courses to enhance your skills.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Dashboard
            </button>
            <button className="px-6 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100">
              Access Here
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="container mx-auto px-4 py-12 bg-white shadow-md rounded-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="flex justify-center">
              {/* Optional image for About Us */}
              <img
        src={student} // Path to your image
        alt="About Us"
        className="max-w-full h-auto rounded-md"
      />
            </div>
            {/* About Us Content */}
            <div>
              <h2 className="text-xl text-red-500 font-bold mb-4">About Us</h2>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                First Choice for Online Education Anywhere
              </h3>
              <p className="text-gray-600 mb-6">
              An LMS, or Learning Management System, is a digital platform designed to facilitate online learning.
               It provides a centralized hub for educators to create, deliver, and track courses, while learners 
               can access educational content, complete assignments, take quizzes, and interact with instructors and peers.   
              </p>
              <p className="text-gray-600">
                Whether you are a student looking for academic excellence or a
                professional seeking to enhance your skills, LMS is here to
                support you on your educational journey.
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Meet the Developer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-md p-6 text-center">
              <img
                src={dev1} // Using the imported image path
                alt="Developer 1"
                className="w-24 h-24 mx-auto mb-4" // Square image
              />
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                YARRAPOTHU RAVIKUMAR
              </h3>
              
              <p className="text-gray-600">
                Loves solving real-world problems through efficient and scalable
                code. Dedicated to continuous learning in software development.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-md p-6 text-center">
              <img
                src={dev2} // Using the imported image path
                alt="Developer 2"
                className="w-24 h-24 mx-auto mb-4" // Square image
              />
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                Bhargavi
              </h3>
              <p className="text-gray-600">
                Expertise in both front-end and back-end technologies. Focused
                on creating responsive and user-friendly applications.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-md p-6 text-center">
              {/* Optionally add image for Developer 3 */}
              <img
                src={meka} // Using the imported image path
                alt="Developer 2"
                className="w-24 h-24 mx-auto mb-4" // Square image
              />
              <h3 className="text-xl font-bold text-purple-600 mb-4">
            MEKA GAYATHRI
              </h3>
              <p className="text-gray-600">
                Skilled in debugging, optimizing applications, and enhancing
                performance to provide seamless user experiences.
              </p>
            </div>
          </div>
        </section>
     

        {/* Developer Section with Cards */}
              </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>All rights reserved by Bhargavi</p>
      </footer>
    </div>
  );
};

export default LandingPage;
