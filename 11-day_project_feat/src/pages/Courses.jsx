import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { id: 1, title: "React Fundamentals", description: "Learn the basics of React including components, props, and hooks.", category: "Web Development" },
    { id: 2, title: "Data Analysis with Python", description: "Analyze real-world datasets using Pandas, NumPy, and Matplotlib.", category: "Data Science" },
    { id: 3, title: "UI/UX Design Principles", description: "Master the fundamentals of designing user-friendly digital experiences.", category: "Design" }
  ];

  const filteredCourses = courses.filter(c =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">All Courses</h2>
          {filteredCourses.length === 0 ? (
            <p className="text-center text-gray-600">No courses found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
