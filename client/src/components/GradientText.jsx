import React from 'react';

export default function GradientText({
  children,
  className = "",
  colors = ["#1E3A8A", "#3B82F6", "#93C5FD"],  // Default Blue shades for gradient
  animationSpeed = 8,  // Default animation speed
  showBorder = true,  // Whether to show a border or not
  backgroundColor = "#FB923C",  // Default background color (orange)
  borderSize = "8px",  // Default border size
  borderColor = "#000",  // Default border color (black)
  borderRadius = "1rem",  // Default border radius
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={`relative mx-auto flex w-px-23 flex-row items-center justify-center font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
      style={{ backgroundColor: backgroundColor, borderRadius: borderRadius }}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "900% 100%",
          }}
        >
          <div
            className="absolute inset-0 z-[-1]"
            style={{
              width: `calc(100% - ${borderSize})`,
              height: `calc(100% - ${borderSize})`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              border: `${borderSize} solid ${borderColor}`,  // Customizable border
              borderRadius: borderRadius,  // Customizable border radius
            }}
          ></div>
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
