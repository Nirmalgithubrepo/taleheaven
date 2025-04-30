import React, { useState } from "react";

function FlipCard({ frontContent, backContent, className = "", onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (onClick) onClick();
  };

  return (
    <div
      className={`relative w-[300px] h-[400px] cursor-pointer [perspective:1000px] ${className}`}
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          {frontContent}
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
