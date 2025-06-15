import React from "react";

function Button({text, href}) {
  return (
    <button className="px-4 py-2 bg-green-500 text-white rounded border-2 border-green-700 hover:bg-green-600 transition duration-300 hover:scale-105 hover:ease-in-out">
      <a href={href} className="text-white no-underline">
        {text}
      </a>
    </button>
  );
}

export default Button;
