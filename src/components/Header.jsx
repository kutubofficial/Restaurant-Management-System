import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { GrRestaurant } from "react-icons/gr";

const Header = ({ cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="home" smooth={true}>
          <h1 className="text-2xl font-bold text-red-600 flex items-center gap-2">
            <GrRestaurant className="text-red-600 text-3xl" />
            <span>Our Restaurant</span>
          </h1>
        </Link>

        <div className="hidden md:flex space-x-12">
          <Link
            to="about"
            smooth={true}
            className="cursor-pointer font-bold hover:text-red-600"
          >
            About Us
          </Link>
          <Link
            to="menu"
            smooth={true}
            className="cursor-pointer font-bold hover:text-red-600"
          >
            Menu
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="cursor-pointer font-bold hover:text-red-600"
          >
            Contact Us
          </Link>
          <div className="relative">
            🛒
            <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          </div>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="menu"
              smooth={true}
              className="cursor-pointer hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="contact"
              smooth={true}
              className="cursor-pointer hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="relative flex items-center">
              🛒 Cart
              <span className="ml-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
