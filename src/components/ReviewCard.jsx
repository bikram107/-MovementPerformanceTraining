import React from "react";

const ReviewCard = ({ name, profession, testimonial, image }) => {
  return (
    <div
      className="
        bg-gradient-to-br from-white to-orange-50
        rounded-2xl border border-orange-200
        shadow-lg hover:shadow-2xl transition-shadow duration-300
        max-w-md mx-auto cursor-default
        hover:border-orange-400
        transform hover:-translate-y-1
        flex flex-col items-center text-center
        px-6 py-6
      "
    >
      {/* Profile Picture */}
      <div className="h-24 w-24 rounded-full overflow-hidden ring-4 ring-orange-300 mb-4">
        <img
          className="h-full w-full object-cover scale-130"
          src={image}
          alt={`${name} profile`}
          loading="lazy"
        />
      </div>

      {/* Name and Profession */}
      <div className="mb-3">
        <h2 className="text-lg font-bold text-orange-700 leading-tight">{name}</h2>
        <p className="text-sm text-orange-500 font-semibold">{profession}</p>
      </div>

      {/* Divider line */}
      <hr className="w-16 border-t-2 border-orange-300 mb-6" />

      {/* Testimonial */}
      <p className="text-gray-800 text-sm leading-snug text-justify max-w-full">
        {testimonial}
      </p>
    </div>
  );
};

export default ReviewCard;
