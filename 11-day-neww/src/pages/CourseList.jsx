import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../api/api';
import CourseCard from '../components/CourseCard';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses().then(res => setCourses(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map(course => <CourseCard key={course._id} course={course} />)}
    </div>
  );
};

export default CourseList;
