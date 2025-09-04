"use client";
import { useState } from "react";
import {
  ChevronRight,
  Smartphone,
  Home,
  Book,
  Gamepad2,
  Heart,
  Shirt,
} from "lucide-react";
import CategoryOffers from "../components/CategoryOffers";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    color: "bg-blue-500",
    count: 245,
  },
  {
    id: "home",
    name: "Kitchen & Home",
    icon: Home,
    color: "bg-green-500",
    count: 189,
  },
  {
    id: "books",
    name: "Books",
    icon: Book,
    color: "bg-purple-500",
    count: 156,
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
    color: "bg-red-500",
    count: 98,
  },
  {
    id: "health",
    name: "Health & Beauty",
    icon: Heart,
    color: "bg-pink-500",
    count: 167,
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    color: "bg-indigo-500",
    count: 201,
  },
];

export default function OffersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (selectedCategory) {
    return (
      <CategoryOffers
        categoryId={selectedCategory}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600 text-sm mt-1">
            Browse offers by category
          </p>
        </div>
      </div>

      {/* Categories List */}
      <div className="px-4 py-4">
        <div className="space-y-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 active:scale-95 transition-transform"
              >
                <div className="flex items-center space-x-4">
                  <div className={`${category.color} p-3 rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {category.count} offers available
                    </p>
                  </div>

                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
