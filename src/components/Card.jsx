import React from "react";

function Card({ name, price, imageSize }) {
  return (
    <div className="card shadow-md rounded-md p-5 flex flex-col justify-between h-full">
      <img
        className={`${imageSize} object-contain`}
        src="/spiral.png"
        alt={name}
      />

      {/* Ensure content stays below image */}
      <div className="flex flex-col items-center mt-2">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-sm">{price}</p>
      </div>
    </div>
  );
}

export default Card;
