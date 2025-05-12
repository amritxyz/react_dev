import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, content, image, author, createdAt, _id }) => {
  // Function to truncate content if it's too long
  const truncateContent = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  // Format date if available
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-48 w-full overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
            {title}
          </h2>
          {createdAt && (
            <span className="text-xs text-gray-500">
              {formatDate(createdAt)}
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {truncateContent(content)}
        </p>

        <div className="flex items-center justify-between">
          {author && (
            <div className="flex items-center">
              <div className="bg-indigo-100 h-8 w-8 rounded-full flex items-center justify-center text-indigo-800 font-semibold">
                {typeof author === "object" && author.name
                  ? author.name.charAt(0).toUpperCase()
                  : typeof author === "string"
                  ? author.charAt(0).toUpperCase()
                  : "A"}
              </div>
              <span className="ml-2 text-sm text-gray-700">
                {typeof author === "object" && author.name
                  ? author.name
                  : typeof author === "string"
                  ? author
                  : "Anonymous"}
              </span>
            </div>
          )}

          <Link
            to={`/blog/${_id}`}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
