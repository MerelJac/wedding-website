import React from "react";

function Button({text, href}) {
  return (
    <button className="px-4 py-2 bg-black-500 text-black rounded border-2 border-black-700 hover:bg-black-600 transition duration-300 hover:scale-105 hover:ease-in-out">
      <a href={href} className="text-black no-underline">
        {text}
      </a>
    </button>
  );
}

export default Button;
