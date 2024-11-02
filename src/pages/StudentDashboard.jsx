import React, { useState } from 'react';
import enrolledCoursesData from '../data/enrolledCoursesData';

const StudentDashboard = () => {
  // State to manage the enrolled courses and their completion status
  const [enrolledCourses, setEnrolledCourses] = useState(enrolledCoursesData);

  // Function to handle marking a course as completed
  const handleMarkAsCompleted = (id) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, isCompleted: true } : course
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50"
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold">{course.name}</h2>
            <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
            <p className="text-sm text-gray-500">Due Date: {course.dueDate}</p>
            <div className="w-full bg-gray-200 rounded-full h-4 my-2">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Progress: {course.progress}%
            </p>
            {course.isCompleted ? (
              <p className="text-green-500 font-bold">Completed</p>
            ) : (
              <button
                onClick={() => handleMarkAsCompleted(course.id)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Mark as Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
