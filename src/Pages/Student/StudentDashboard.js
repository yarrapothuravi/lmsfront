import React, { useState } from 'react';
import StudentNavbar from '../../components/navbar';
import Calendar from 'react-calendar';  // Import the calendar component
import 'react-calendar/dist/Calendar.css';  // Import the CSS for the calendar

const Dashboard = () => {
  const [date, setDate] = useState(new Date());  // State to manage the selected date

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <StudentNavbar />

      {/* Main Content */}
      <div className="flex">
        {/* Main Dashboard Content */}
        <div className="flex-1 p-6">
          {/* Timeline */}
          <section className="mb-8">
            <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl font-semibold">Timeline</h3>
              <button className="bg-green-500 text-white px-3 py-1 rounded-md">Filter</button>
            </div>
            <div className="mt-4 bg-white p-4 shadow-md rounded-md">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-500 text-white p-2 rounded-full">
                  <i className="fas fa-calendar-day"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Wednesday, 4 December 2024</h4>
                  <p className="text-gray-500">Software Testing (EPAM) - Lab End Sem Exam closes, Attempt Quiz Now</p>
                </div>
              </div>
            </div>
          </section>

          {/* Recently Accessed Items */}
          <section className="mb-8">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl font-semibold">Recently Accessed Items</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Example Item Cards */}
                <div className="bg-pink-200 p-4 rounded-md">
                  <h4 className="font-semibold">Viva Questions</h4>
                  <p className="text-gray-500">Data Warehousing & Mining 2024-2025</p>
                </div>
                <div className="bg-pink-200 p-4 rounded-md">
                  <h4 className="font-semibold">Lab Exam Question Paper</h4>
                  <p className="text-gray-500">Data Warehousing & Mining 2024-2025</p>
                </div>
                <div className="bg-pink-200 p-4 rounded-md">
                  <h4 className="font-semibold">ENDSEM MCQ CO3</h4>
                  <p className="text-gray-500">Software Testing (EPAM) 2024-2025</p>
                </div>
                {/* Add more items as needed */}
              </div>
            </div>
          </section>

          {/* Calendar Section */}
          <section>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl font-semibold">Calendar</h3>
              <div className="mt-4">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="react-calendar"  // Styling the calendar
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
