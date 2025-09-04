import { ShoppingBag, TrendingUp, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 99.99,
    originalPrice: 149.99,
    image: "/api/placeholder/300/300",
    category: "Electronics",
    rating: 4.8,
    discount: 33,
  },
  {
    id: 2,
    name: "Smart Coffee Maker",
    price: 79.99,
    originalPrice: 119.99,
    image: "/api/placeholder/300/300",
    category: "Kitchen & Home",
    rating: 4.6,
    discount: 33,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Hey Aaron! 👋</h1>
            <p className="text-primary-100 text-sm">
              Discover amazing deals today
            </p>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <ShoppingBag className="w-6 h-6" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <TrendingUp className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">Trending</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <Star className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">Top Rated</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
            <ShoppingBag className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">Hot Deals</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link
            href="/deals"
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 active:scale-95 transition-transform"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Hot Deals</h3>
                <p className="text-sm text-gray-500">Up to 70% off</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary-600" />
            </div>
          </Link>

          <Link
            href="/offers"
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 active:scale-95 transition-transform"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Categories</h3>
                <p className="text-sm text-gray-500">Browse all</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary-600" />
            </div>
          </Link>
        </div>

        {/* Featured Products */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Featured Products
            </h2>
            <Link
              href="/deals"
              className="text-primary-600 text-sm font-medium"
            >
              See all
            </Link>
          </div>

          <div className="space-y-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
