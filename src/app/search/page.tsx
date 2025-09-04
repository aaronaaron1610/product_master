"use client";
import { useState } from "react";
import { Search, Clock, X, TrendingUp } from "lucide-react";
import ProductCard from "../components/ProductCard";

const recentSearches = ["wireless earbuds", "coffee maker", "gaming chair"];
const trendingSearches = [
  "iPhone 15",
  "air fryer",
  "desk setup",
  "winter clothes",
];

const searchResults = [
  {
    id: 1,
    name: "Wireless Earbuds Pro Max",
    price: 149.99,
    originalPrice: 199.99,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    rating: 4.8,
    discount: 25,
  },
  {
    id: 2,
    name: "True Wireless Buds",
    price: 79.99,
    originalPrice: 129.99,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    rating: 4.6,
    discount: 38,
  },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setShowResults(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {!showResults ? (
          <>
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Recent Searches</span>
                </h2>

                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Searches */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Trending</span>
              </h2>

              <div className="space-y-2">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="w-full text-left bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-gray-900">{search}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Search Results */
          <div>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-primary-600">
                  {searchResults.length} results
                </span>{" "}
                for "{searchQuery}"
              </p>
            </div>

            <div className="space-y-4">
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} showDiscount />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
