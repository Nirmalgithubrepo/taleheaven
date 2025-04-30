import React from "react";

const TiltedCard = ({ image, title, description }) => {
  return (
    <div className="group perspective w-64 h-80 mx-auto">
      <div className="relative w-full h-full transition-transform duration-500 transform bg-white rounded-xl shadow-xl group-hover:rotateY-12 group-hover:-rotateX-6">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TiltedCard;
