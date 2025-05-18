import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CreateCourse = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({
    title: "",
    instructor: "",
    description: "",
    duration: "",
    price: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("category");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryId) {
      alert("Category ID is missing.");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("instructor", form.instructor);
    formData.append("description", form.description);
    formData.append("duration", form.duration);
    formData.append("price", form.price);
    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://blog-1rng.onrender.com/mycourse/create?category=${categoryId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to create course");
      }

      alert("Course created successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Add New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            type="text"
            placeholder="Course Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="instructor"
            type="text"
            placeholder="Instructor Name"
            value={form.instructor}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="duration"
            type="text"
            placeholder="Duration (e.g., 4 weeks)"
            value={form.duration}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="price"
            type="number"
            placeholder="Price in USD"
            value={form.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Course Description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full border p-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-64 h-40 object-cover mt-2 rounded"
            />
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Create Course"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateCourse;
