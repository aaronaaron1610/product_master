import { ArrowLeft } from "lucide-react";
import ProductCard from "./ProductCard";

const categoryProducts = {
  electronics: [
    {
      id: 1,
      name: "Smartphone Pro Max",
      price: 899.99,
      originalPrice: 1199.99,
      image: "/api/placeholder/300/300",
      category: "Electronics",
      rating: 4.8,
      discount: 25,
    },
    {
      id: 2,
      name: "Wireless Charging Pad",
      price: 39.99,
      originalPrice: 59.99,
      image: "/api/placeholder/300/300",
      category: "Electronics",
      rating: 4.6,
      discount: 33,
    },
  ],
  home: [
    {
      id: 3,
      name: "Robot Vacuum Cleaner",
      price: 299.99,
      originalPrice: 399.99,
      image: "/api/placeholder/300/300",
      category: "Kitchen & Home",
      rating: 4.7,
      discount: 25,
    },
  ],
  books: [
    {
      id: 4,
      name: "Complete Web Development Course",
      price: 49.99,
      originalPrice: 99.99,
      image: "/api/placeholder/300/300",
      category: "Books",
      rating: 4.9,
      discount: 50,
    },
  ],
};

interface CategoryOffersProps {
  categoryId: string;
  onBack: () => void;
}

export default function CategoryOffers({
  categoryId,
  onBack,
}: CategoryOffersProps) {
  const products =
    categoryProducts[categoryId as keyof typeof categoryProducts] || [];
  const categoryName = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {categoryName}
              </h1>
              <p className="text-sm text-gray-600">
                {products.length} offers available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="px-4 py-6">
        <div className="space-y-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showDiscount />
          ))}
        </div>
      </div>
    </div>
  );
}
