import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  FiMenu,
  FiX,
  FiClock,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { GrRestaurant } from "react-icons/gr";
import Cart from "./Cart";

const Navbar = ({ cartCount, cartItems, setCartItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-gray-900 text-gray-100 text-sm py-2 px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1">
              <FiMapPin className="text-yellow-400" />
              Restaurant St, Delicious City, New Delhi 9578, India
            </span>
            <span className="flex items-center gap-1">
              <FiClock className="text-yellow-400" />
              Daily : 10.00 am to 11.00 pm
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-2 md:mt-0">
            <span className="flex items-center gap-1">
              <FiPhone className="text-yellow-400" />
              +1 123 456 7890
            </span>
            <span className="flex items-center gap-1">
              <FiMail className="text-yellow-400" />
              booking@ourestaurant.com
            </span>
          </div>
        </div>

        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <Link
              to="home"
              smooth={true}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <GrRestaurant className="text-blue-600 text-3xl" />
              <h1 className="text-2xl font-bold text-blue-600">
                FeastFlow
              </h1>
            </Link>

            <div className="hidden md:flex items-center space-x-9">
              {["about", "menu", "contact"].map((menu) => (
                <Link
                  key={menu}
                  to={menu}
                  smooth={true}
                  className="group relative cursor-pointer font-medium text-blue-600 px-3 py-0 rounded-lg transition"
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)} Us
                  <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  <span className="absolute left-0 -bottom-2 w-full h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 delay-100"></span>
                </Link>
              ))}

              <div className="relative group">
                <div className="cursor-pointer p-2 rounded-full hover:bg-blue-50 transition" onClick={() => setIsCartOpen(true)}>
                  <span className="text-2xl">🛒</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {cartCount}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              className="md:hidden text-2xl p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg animate-fadeIn">
              <div className="px-6 py-3 flex flex-col space-y-3">
                {["about", "menu", "contact"].map((item) => (
                  <Link
                    key={item}
                    to={item}
                    smooth={true}
                    className="cursor-pointer font-medium text-gray-700 hover:text-blue-600 transition px-4 py-3 rounded-lg hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)} Us
                  </Link>
                ))}
                <div className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-50 transition">
                  <span className="text-xl mr-3">🛒</span>
                  <span className="font-medium text-gray-700">Cart</span>
                  <span className="ml-auto bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
