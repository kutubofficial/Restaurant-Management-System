import { useState } from "react";
import MenuCard from "../MenuCard";
import Cart from "../Cart";
import { menuItems } from "../data/foodList";

const Specialization = ({ cartItems, setCartItems }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (item) => {
    const existingItem = cartItems?.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems?.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity } 
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const filteredItems = menuItems?.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["all", ...new Set(menuItems?.map(item => item.category))];

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Specialties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted menu featuring the finest ingredients
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search dishes..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems?.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No items found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* <Cart cartItems={cartItems} setCartItems={setCartItems} /> */}
      </div>
    </section>
  );
};

export default Specialization;