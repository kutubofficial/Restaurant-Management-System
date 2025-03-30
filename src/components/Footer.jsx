import { Link } from "react-scroll";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500">Our Kitchen</h3>
            <p className="text-gray-400">
              Experience fine dining with authentic flavors crafted by our
              master chefs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  className="text-gray-400 hover:text-red-500 cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="menu"
                  smooth={true}
                  className="text-gray-400 hover:text-red-500 cursor-pointer"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  className="text-gray-400 hover:text-red-500 cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Street</li>
              <li>New Delhi, 110096</li>
              <li>Phone: (+91) 123-4567</li>
              <li>Email: info@ourkitchen.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500">
                <FiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <FiTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-9 pt-2 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Our Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
