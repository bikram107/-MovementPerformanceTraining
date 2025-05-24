// ReviewCard.jsx
import React from "react";

const starsCount = 5;

const ReviewCard = ({ name, profession, testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-300 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-4 bg-orange-100 rounded-t-lg">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
          alt={`${name} profile`}
          loading="lazy"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-600">{profession}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-5">
        {/* Stars */}
        <div className="flex gap-1">
          {[...Array(starsCount)].map((_, i) => (
            <svg
              key={i}
              width="20"
              height="18"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500 fill-current"
              aria-hidden="true"
            >
              <path
                d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                fill="currentColor"
              />
            </svg>
          ))}
        </div>

        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
