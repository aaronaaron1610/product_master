import { Filter, SortDesc } from "lucide-react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

const deals = [
  {
    id: 1,
    name: "Gaming Headset RGB",
    price: 49.99,
    originalPrice: 89.99,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    rating: 4.7,
    discount: 44,
  },
  {
    id: 2,
    name: "Air Fryer 5.5L",
    price: 89.99,
    originalPrice: 149.99,
    image: "/api/placeholder/300/300",
    category: "Kitchen & Home",
    rating: 4.9,
    discount: 40,
  },
  {
    id: 3,
    name: "Programming Book Set",
    price: 29.99,
    originalPrice: 59.99,
    image: "/api/placeholder/300/300",
    category: "Books",
    rating: 4.8,
    discount: 50,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 34.99,
    originalPrice: 69.99,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    rating: 4.6,
    discount: 50,
  },
];

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Hot Deals 🔥
          </h1>

          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>

            <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
              <SortDesc className="w-4 h-4" />
              <span className="text-sm font-medium">Sort</span>
            </button>
          </div>

          <CategoryFilter />
        </div>
      </div>

      {/* Deals Grid */}
      <div className="px-4 py-6">
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-primary-600">
              {deals.length} deals
            </span>{" "}
            found
          </p>
        </div>

        <div className="space-y-4">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} showDiscount />
          ))}
        </div>
      </div>
    </div>
  );
}
