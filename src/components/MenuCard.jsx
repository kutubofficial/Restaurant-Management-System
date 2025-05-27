import { useState } from "react";
import toast from "react-hot-toast";

const MenuCard = ({ item, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...item, quantity });
    setQuantity(1); 
    toast.success(`${item.name} added to cart!`);
    // toast.success(` added to cart!`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </div>
        )}
        {item.isVegetarian && (
          <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Vegetarian
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
          <span className="text-blue-600 font-bold text-xl">${item.price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description || "Delicious dish made with fresh ingredients"}
        </p>

        {item.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-gray-300 rounded-full">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-full"
            >
              -
            </button>
            <span className="px-3 py-1 text-gray-800">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-full"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;