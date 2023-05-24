import React from "react";

const ScrollToTopButton = ({ handleClick }) => {
  return (
    <button
      className="rounded-full w-14 h-14 bg-secondary-dark/80 text-secondary-light text-2xl flex justify-center items-center fixed bottom-8 right-8"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="icon icon-tabler icon-tabler-arrow-narrow-up"
        viewBox="0 0 24 24"
      >
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <path d="M12 5v14M16 9l-4-4M8 9l4-4"></path>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
