import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import FilterSidebar from './FilterSidebar';
import Navbar from '../components/Navbar';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://blog-1rng.onrender.com/mycourse ')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Navbar />

      <section className="w-[100%] flex items-center justify-center">
        <explore
          className="w-[100%] flex items-center justify-center bg-gradient-to-r from-blue-800 to-purple-800 text-white py-12
        ">
          <div className="container w-95/100">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Courses
            </h1>
            <p className="text-lg text-white/80 max-w-3xl">
              Browse our comprehensive collection of courses designed to help you master new skills,
              advance your career, and achieve your learning goals.
            </p>
          </div>
        </explore>
      </section>

      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <FilterSidebar />
          </div>
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">Showing {courses.length} courses</p>
              <select className="border rounded p-2">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
