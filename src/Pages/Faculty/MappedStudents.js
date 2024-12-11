import React from 'react';
import FacultyNavbar from "../../components/facultyNavbar";
import './MappedStudents.css'; // Optional CSS for styling

const MappedStudents = () => {
  // Sample data for mapped students
  const mappedStudents = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", course: "Mathematics", semester: "3rd" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", course: "Physics", semester: "2nd" },
    { id: 3, name: "Emily Brown", email: "emily.brown@example.com", course: "Computer Science", semester: "1st" },
  ];

  return (
    <div>
      <FacultyNavbar />
      <div className="container">
        <h1>Mapped Students</h1>
        <table className="mapped-students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {mappedStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MappedStudents;
