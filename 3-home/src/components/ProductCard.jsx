import React from "react";

const ProductCard = ({ title, image, price, category, rating }) => {
  return (
    <div className="w-96 h-96 bg-white rounded-lg shadow-md overflow-hidden 
                    transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain p-4 transition-transform duration-300 hover:scale-105"
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold mb-2 truncate text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-2 capitalize">{category}</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-blue-600 font-bold text-lg">${price}</p>
          <p className="text-yellow-500 font-medium">⭐ {rating}</p>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg 
                         font-medium transition-all duration-300 
                         hover:bg-blue-600 hover:shadow-md 
                         active:bg-blue-700 active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
