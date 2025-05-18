import React from 'react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';

const dummyCourses = [
  { id: 1, title: "React Fundamentals", description: "Learn the basics of React including components, props, and hooks.", category: "Web Development" },
  { id: 2, title: "Data Analysis with Python", description: "Analyze real-world datasets using Pandas, NumPy, and Matplotlib.", category: "Data Science" },
  { id: 3, title: "UI/UX Design Principles", description: "Master the fundamentals of designing user-friendly digital experiences.", category: "Design" }
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dummyCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
