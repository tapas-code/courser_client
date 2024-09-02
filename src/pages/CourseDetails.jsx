import React from 'react';
import { useParams } from 'react-router-dom';
import coursesData from '../data/coursesData';

const CourseDetails = () => {
  // Retrieve the course ID from the route parameters
  const { id } = useParams();

  // Find the specific course from the dummy data using the ID
  const course = coursesData.find((course) => course.id === parseInt(id));

  // Render the course details
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {course ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
          <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
          <p className="mb-4">{course.description}</p>
          <p className="mb-4">Enrollment Status: {course.enrollmentStatus}</p>
          <p className="mb-4">Duration: {course.duration}</p>
          <p className="mb-4">Schedule: {course.schedule}</p>
          <p className="mb-4">Location: {course.location}</p>
          <p className="mb-4">
            Prerequisites: {course.prerequisites.join(', ')}
          </p>
          <div>
            <h3 className="text-xl font-bold mb-2">Syllabus</h3>
            {course.syllabus.map((item) => (
              <details key={item.week} className="mb-2">
                <summary className="cursor-pointer text-blue-500">{`Week ${item.week}: ${item.topic}`}</summary>
                <p className="ml-4">{item.content}</p>
              </details>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">Course not found</p>
      )}
    </div>
  );
};

export default CourseDetails;
