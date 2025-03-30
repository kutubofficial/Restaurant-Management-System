import { useState } from "react";
import MenuCard from "./MenuCard";
import Cart from "./Cart";

const Specialization = ({ cartItems, setCartItems }) => {
  const [menuItems] = useState([
    { id: 1, name: "Paneer Pasta", price: 24.99, image: "./images/paneerPasta.jpg" },
    { id: 2, name: "cheese Pizza", price: 84.54, image: "./images/cheesePasta.jpg" },
    { id: 3, name: "Sandwich ", price: 49.99, image: "./images/sandwich.jpg" },
    { id: 4, name: "Onion Pizza ", price: 139.42, image: "./images/onion.jpg" },
    { id: 5, name: "Biryani ", price: 258.99, image: "./images/biryani.jpg" },
    { id: 6, name: "Lemon Water ", price: 29.56, image: "./images/lemon.avif" },
    { id: 7, name: "Fried Chicken ", price: 259.99, image: "./images/chicken.jpg" },
    { id: 8, name: "Choclate Ice-Cream ", price: 59.78, image: "./images/ice.jpg" },
    { id: 9, name: "Green Tea", price: 19.59, image: "./images/tea.jpg" },
  ]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </div>

        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </section>
  );
};

export default Specialization;
