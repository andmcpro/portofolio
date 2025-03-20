"use client";
import React, { useState } from "react";

const AccordionItem = ({ title, content, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const ChevronIcon = ({ direction }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          direction === "up"
            ? "M15 12.5L10 7.5L5 12.5"
            : "M5 7.5L10 12.5L15 7.5"
        }
        stroke="#1E1E1E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="overflow-hidden rounded border border-solid bg-stone-50 border-stone-900 border-opacity-10">
      <button
        className="flex justify-between items-center p-4 w-full cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <h3 className="text-base font-bold text-stone-900">{title}</h3>
        <ChevronIcon direction={isExpanded ? "up" : "down"} />
      </button>
      {isExpanded && content && (
        <div className="mt-2 p-4 pt-0 text-base text-stone-900 text-justify">
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
