import React from "react";

export default function ProgLangItem({ children, title }) {
  return (
    <div
      className="
        bg-gray
        bg-opacity-50
        rounded-full
        justify-center
        items-center
        text-center
        px-2
        py-0.5
        flex
        flex-wrap
        transition-transform
        transform
        hover:scale-105
        hover:bg-opacity-70
        group
      "
    >
      <div className="pr-2">
        {children}
      </div>
      <div className="text-gray-light xl:text-s group-hover:text-white">
        {title}
      </div>
    </div>
  );
}
