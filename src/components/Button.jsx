import React from "react";

function Button({text, href}) {
  return (
    <button className="px-4 py-2 bg-backgrounBeige rounded-2xl border-2 border-darkBeige hover:opacity-80 transition duration-300 hover:scale-105 hover:ease-in-out">
      <a href={href} className="text-darkBeige no-underline">
        {text}
      </a>
    </button>
  );
}

export default Button;
