import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://blog-1rng.onrender.com/mycourse/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-10 text-blue-600">Loading course...</div>;
  if (!course) return <div className="text-center py-10 text-red-500">Course not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Image */}
      <div className="w-full mb-8">
        <img
          src={course.image || "https://via.placeholder.com/800x400?text=No+Image"}
          alt={course.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Details */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">{course.title}</h1>
      <p className="text-lg text-gray-700 mb-2">
        <span className="font-semibold">Instructor:</span> {course.instructor || "Unknown"}
      </p>
      <p className="text-md text-gray-600 mb-4">
        <span className="font-semibold">Duration:</span> {course.duration || "N/A"}
      </p>
      <p className="text-lg text-gray-800 mb-6">{course.description || "No description available."}</p>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-purple-600">${course.price ?? "Free"}</span>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-6 rounded-lg">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
