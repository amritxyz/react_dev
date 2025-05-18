import React, { useEffect, useState } from 'react';

const FilterSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://blog-1rng.onrender.com/category')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch categories", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-6 text-blue-700">Filters</h2>

      {/* Categories Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-blue-600">Categories</h3>
        <div className="space-y-3">
          {loading ? (
            <p className="text-gray-500 text-sm">Loading categories...</p>
          ) : categories.length > 0 ? (
            categories.map(cat => (
              <div key={cat._id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${cat._id}`}
                  className="mr-3 accent-blue-600"
                />
                <label htmlFor={`category-${cat._id}`} className="text-sm text-gray-700">
                  {cat.title}
                </label>
              </div>
            ))
          ) : (
            <p className="text-sm text-red-500">No categories found</p>
          )}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-blue-600">Price Range</h3>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full accent-purple-600"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>

      {/* Reset Button */}
      <button className="inline-flex justify-center items-center gap-2 text-white cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-4 w-full rounded-lg hover:from-blue-700 hover:to-purple-700 transition">
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
