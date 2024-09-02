import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../data/coursesData';

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter courses based on search term (by course name or instructor)
  const filteredCourses = coursesData.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Course List</h1>
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id}>
            <div className="bg-white p-4 rounded shadow hover:shadow-md transition duration-300">
              <img src={course.thumbnail} alt={course.name} className="w-full h-32 object-cover rounded" />
              <h2 className="text-xl font-bold mt-2">{course.name}</h2>
              <p className="text-gray-700">Instructor: {course.instructor}</p>
              <p className="text-gray-500">{course.description.substring(0, 60)}...</p>
              <p className={`text-sm mt-2 ${course.enrollmentStatus === 'Open' ? 'text-green-500' : course.enrollmentStatus === 'Closed' ? 'text-red-500' : 'text-yellow-500'}`}>
                Status: {course.enrollmentStatus}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
