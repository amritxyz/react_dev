import React from 'react';

const categories = ['Web Development', 'Data Science', 'Design', 'Programming', 'Business', 'Marketing'];

const FilterSidebar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center">
              <input type="checkbox" id={`category-${cat}`} className="mr-2" />
              <label htmlFor={`category-${cat}`}>{cat}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-3">Price Range</h3>
        <input type="range" min="0" max="100" className="w-full" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>$0</span><span>$100</span>
        </div>
      </div>

      <button className="border px-4 py-2 w-full rounded">Reset Filters</button>
    </div>
  );
};

export default FilterSidebar;
