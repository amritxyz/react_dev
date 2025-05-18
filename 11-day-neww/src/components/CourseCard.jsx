import React from 'react';

const CourseCard = ({ course }) => (
  <div className="p-4 shadow rounded bg-white">
    <h2 className="text-xl font-bold">{course.title}</h2>
    <p className="text-gray-600">{course.category}</p>
    <p>{course.description}</p>
  </div>
);

export default CourseCard;
