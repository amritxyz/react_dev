import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourseById } from '../hooks/useCourseById';
import CourseForm from '../courses/CourseForm.jsx';

export const CourseFormPage = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data: course, isLoading } = useCourseById(_id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-indigo-600 hover:text-indigo-800"
      >
        ← Back
      </button>
      <CourseForm course={course} mode={_id ? 'update' : 'create'} />
    </div>
  );
};
