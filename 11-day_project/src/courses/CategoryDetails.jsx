import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryDetails = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [adding, setAdding] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const [newCourse, setNewCourse] = useState({
    title: "",
    instructor: "",
    imageFile: null, // store local image file here
    duration: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const fetchCategoryAndCourses = async () => {
      try {
        const categoryRes = await fetch(`https://blog-1rng.onrender.com/category/${id}`);
        const categoryData = await categoryRes.json();

        const courseRes = await fetch(`https://blog-1rng.onrender.com/mycourse/category/${id}`);
        const courseData = await courseRes.json();

        setCategory(categoryData);
        setCourses(courseData);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndCourses();
  }, [id]);

  const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // Handle text inputs for new course form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle local image file select & preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCourse((prev) => ({ ...prev, imageFile: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit new course
  const handleAddCourse = async () => {
    if (!newCourse.title.trim()) {
      alert("Course title cannot be empty");
      return;
    }

    setAdding(true);
    try {
      const formData = new FormData();
      formData.append("title", newCourse.title);
      formData.append("instructor", newCourse.instructor);
      formData.append("duration", newCourse.duration);
      formData.append("price", newCourse.price);
      formData.append("description", newCourse.description);

      if (newCourse.imageFile) {
        formData.append("image", newCourse.imageFile);
      }

      // pass category as a query param
      const res = await fetch(`https://blog-1rng.onrender.com/mycourse/create?category=${id}`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to add course");

      const addedCourse = await res.json();

      setCourses((prev) => [...prev, addedCourse]);

      // Reset form
      setNewCourse({
        title: "",
        instructor: "",
        imageFile: null,
        duration: "",
        price: "",
        description: "",
      });
      setImagePreview(null);
      setShowAddCourseModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to add course");
    }
    setAdding(false);
  };

  if (loading) {
    return <p className="text-center text-blue-600 py-10">Loading category and courses...</p>;
  }

  if (!category) {
    return <p className="text-center text-red-500 py-10">Category not found.</p>;
  }

  return (
    <section className="min-h-screen bg-blue-50 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Category Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">{category.name}</h2>
          <p className="text-lg text-current/60 mb-6">{category.description || "No description available."}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Created At</p>
              <p className="text-md font-medium text-purple-600">{formatDate(category.createdAt)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Courses</p>
              <p className="text-md font-medium text-purple-600">{courses.length}</p>
            </div>
          </div>
        </div>

        {/* Add Course Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowAddCourseModal(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            + Add Course
          </button>
        </div>

        {/* Courses List */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold text-purple-600 mb-6">Courses in this Category</h3>

          {courses.length === 0 ? (
            <p className="text-gray-500">No courses found in this category.</p>
          ) : (
            <div className="space-y-4">
              {courses.map((course) => (
                <Link
                  to={`/course/${course._id}`}
                  key={course._id}
                  className="block p-4 border border-gray-100 rounded-lg hover:shadow transition"
                >
                  <h4 className="text-lg font-bold text-blue-600">{course.title}</h4>
                  <p className="text-sm text-gray-600">{course.description || "No description provided."}</p>
                  <div className="text-sm text-gray-500 mt-1">
                    Instructor: <span className="text-purple-600">{course.instructor || "Unknown"}</span> •{" "}
                    {formatDate(course.createdAt)}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Back Link */}
        <Link
          to="/"
          className="inline-block mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded hover:from-blue-700 hover:to-purple-700"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Add Course Modal */}
      {showAddCourseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg max-h-[90vh] overflow-auto">
            <h3 className="text-lg font-semibold mb-4">Add New Course</h3>

            <input
              name="title"
              type="text"
              placeholder="Course Title"
              value={newCourse.title}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mb-3"
              autoFocus
              required
            />
            <input
              name="instructor"
              type="text"
              placeholder="Instructor Name"
              value={newCourse.instructor}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mb-3"
            />
            <input
              name="duration"
              type="text"
              placeholder="Duration (e.g. 3 hours)"
              value={newCourse.duration}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mb-3"
            />
            <input
              name="price"
              type="number"
              placeholder="Price (0 for free)"
              value={newCourse.price}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mb-3"
              min="0"
            />

            {/* Local image file input */}
            <input
              name="imageFile"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded p-2 mb-3"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-20 object-cover rounded mb-3"
              />
            )}

            <textarea
              name="description"
              placeholder="Description"
              value={newCourse.description}
              onChange={handleInputChange}
              className="w-full border rounded p-2 mb-4 resize-none"
              rows={4}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAddCourseModal(false);
                  setImagePreview(null);
                }}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                disabled={adding}
              >
                Cancel
              </button>
              <button
                onClick={handleAddCourse}
                className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
                disabled={adding}
              >
                {adding ? "Adding..." : "Add Course"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryDetails;
