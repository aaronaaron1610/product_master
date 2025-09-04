"use client";
import { useState } from "react";

const categories = [
  "All",
  "Electronics",
  "Kitchen & Home",
  "Books",
  "Gaming",
  "Fashion",
  "Health",
];

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "bg-primary-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
