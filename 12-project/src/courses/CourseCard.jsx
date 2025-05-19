import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/course/${course._id || course.id}`}>
        <img
          src={course.image || "https://via.placeholder.com/400x200?text=No+Image"}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5">
        <h3 className="mt-2 text-lg font-bold">{course.title}</h3>
        <p className="mt-1 text-sm text-gray-500">Instructor: {course.instructor}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-sm text-gray-500">⏱️ {course.duration}</span>
          <span className="font-semibold text-lg text-blue-600">
            ${course.price}
          </span>
        </div>

        <Link
          to={`/course/${course._id || course.id}`}
          className="mt-4 block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
