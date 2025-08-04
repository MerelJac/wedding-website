import React from "react";

function Button({ image, href }) {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="inline-block"
    >
      <button className="px-4 py-2 transition duration-300 hover:scale-105 hover:ease-in-out">
        <img src={image} alt="button" className="max-w-full h-auto" />
      </button>
    </a>
  );
}

export default Button;
