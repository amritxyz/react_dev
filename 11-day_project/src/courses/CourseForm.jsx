import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCourses } from '../hooks/useCourses.js';
import { useCategories } from '../hooks/useCategories.js';
import { useNavigate } from 'react-router-dom';

// Validation schema
const courseSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(1, 'Please select a category'),
  instructor: z.string().min(2, 'Instructor name must be at least 2 characters'),
  duration: z.string().min(1, 'Please enter the course duration'),
  image: z.any().refine((file) => {
    if (!file) return false;
    if (typeof file === 'string') return true; // For existing image URLs
    return file instanceof File;
  }, 'Please upload an image file'),
  prerequisites: z.array(z.string()).optional(),
  learningObjectives: z.array(z.string()).optional(),
});

export default function CourseForm({ course, mode = 'create' }) {
  const navigate = useNavigate();
  const { createCourse, updateCourse } = useCourses();
  const { data: categories, isLoading } = useCategories();
  const [imagePreview, setImagePreview] = useState(course?.image || '');

  console.log('Categories in CourseForm:', categories); // Debug log
  console.log('Selected category:', course?.category); // Debug log

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: course?.title || '',
      description: course?.description || '',
      category: course?.category || '',
      instructor: course?.instructor || '',
      duration: course?.duration || '',
      image: course?.image || '',
      prerequisites: course?.prerequisites || [''],
      learningObjectives: course?.learningObjectives || [''],
    },
  });

  // Set the category value when the course data is available
  React.useEffect(() => {
    if (course?.category) {
      setValue('category', course.category);
    }
  }, [course, setValue]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('image', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Append all form fields to FormData
      Object.keys(data).forEach(key => {
        if (key === 'image' && data[key] instanceof File) {
          formData.append('image', data[key]);
        } else if (Array.isArray(data[key])) {
          formData.append(key, JSON.stringify(data[key]));
        } else {
          formData.append(key, data[key]);
        }
      });
      // Append userId to FormData
      formData.append('userId', localStorage.getItem('userId'));

      if (mode === 'create') {
        await createCourse.mutateAsync(formData);
      } else {
        await updateCourse.mutateAsync({ id: course._id, courseData: formData });
      }
      navigate('/courses');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl max-w-2xl w-full p-8 space-y-6"
        noValidate
        encType="multipart/form-data"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          {mode === 'create' ? 'Create New Course' : 'Update Course'}
        </h2>

        <div className="space-y-1">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
            Course Title
          </label>
          <input
            {...register('title')}
            type="text"
            id="title"
            className={`w-full rounded-md border px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${errors.title ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
            Description
          </label>
          <textarea
            {...register('description')}
            id="description"
            rows="4"
            className={`w-full rounded-md border px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${errors.description ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.description && (
            <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
            Course Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="image-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="image-upload"
                    name="image"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          {errors.image && (
            <p className="text-red-600 text-sm mt-1">{errors.image.message}</p>
          )}
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Course preview"
                className="w-full h-48 object-cover rounded-md"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200?text=Invalid+Image';
                }}
              />
            </div>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
            Category
          </label>
          <select
            {...register('category')}
            id="category"
            className={`w-full rounded-md border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${errors.category ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
              }`}
          >
            <option value="">Select a category</option>
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-600 text-sm mt-1">{errors.category.message}</p>
          )}
          {!categories?.length && !isLoading && (
            <p className="text-yellow-600 text-sm mt-1">
              No categories available. Please create a category first.
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="instructor" className="block text-sm font-semibold text-gray-700">
            Instructor
          </label>
          <input
            {...register('instructor')}
            type="text"
            id="instructor"
            className={`w-full rounded-md border px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${errors.instructor ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.instructor && (
            <p className="text-red-600 text-sm mt-1">{errors.instructor.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="duration" className="block text-sm font-semibold text-gray-700">
            Duration
          </label>
          <input
            {...register('duration')}
            type="text"
            id="duration"
            placeholder="e.g., 8 weeks, 40 hours"
            className={`w-full rounded-md border px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${errors.duration ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.duration && (
            <p className="text-red-600 text-sm mt-1">{errors.duration.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center gap-2 py-3 rounded-md bg-indigo-600 text-white text-lg font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              {mode === 'create' ? 'Creating...' : 'Updating...'}
            </>
          ) : (
            mode === 'create' ? 'Create Course' : 'Update Course'
          )}
        </button>
      </form>
    </div>
  );
} 
