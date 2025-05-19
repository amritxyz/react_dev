import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../home/Navbar";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetch("https://blog-1rng.onrender.com/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setLoading(false);
      });
  }, []);

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) {
      alert("Category name cannot be empty");
      return;
    }

    setAdding(true);
    try {
      const res = await fetch("https://blog-1rng.onrender.com/category/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newCategoryName.trim(),
          description: newCategoryDescription.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed to add category");
      const addedCategory = await res.json();

      setCategories((prev) => [...prev, addedCategory]);
      setNewCategoryName("");
      setNewCategoryDescription("");
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("Failed to add category");
    }
    setAdding(false);
  };

  if (loading)
    return (
      <p className="text-center text-blue-600 py-10">Loading categories...</p>
    );

  return (
    <>
      <Navbar />
      <section id="category" className="bg-blue-50 py-16 px-6 md:px-16">
        <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Explore Categories
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            + Add Category
          </button>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">
              No categories found.
            </p>
          ) : (
            categories.map((category) => (
              <Link
                to={`/category/${category._id || category.id}`}
                key={category._id || category.id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 block"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  {category.title || category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description || "No description available."}
                </p>
              </Link>
            ))
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Add New Category</h3>
              <input
                type="text"
                placeholder="Category Name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="w-full border rounded p-2 mb-4"
                autoFocus
              />
              <textarea
                placeholder="Description (optional)"
                value={newCategoryDescription}
                onChange={(e) => setNewCategoryDescription(e.target.value)}
                className="w-full border rounded p-2 mb-4 resize-none"
                rows={3}
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                  disabled={adding}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCategory}
                  className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
                  disabled={adding}
                >
                  {adding ? "Adding..." : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Category;
