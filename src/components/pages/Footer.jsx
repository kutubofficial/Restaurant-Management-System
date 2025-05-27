import { Link } from "react-scroll";
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { GrRestaurant } from "react-icons/gr";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GrRestaurant className="text-blue-500 text-3xl" />
              <h3 className="text-2xl font-bold text-blue-500">FeastFlow</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience fine dining with authentic flavors crafted by our award-winning chefs using locally-sourced ingblueients.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="flex items-center text-gray-400 hover:text-blue-500 cursor-pointer transition-colors gap-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="flex items-center text-gray-400 hover:text-blue-500 cursor-pointer transition-colors gap-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="menu"
                  smooth={true}
                  duration={500}
                  className="flex items-center text-gray-400 hover:text-blue-500 cursor-pointer transition-colors gap-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="flex items-center text-gray-400 hover:text-blue-500 cursor-pointer transition-colors gap-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 flex-shrink-0 text-blue-500" />
                <div>
                  <p>123 Gourmet Street</p>
                  <p>New Delhi, 201301</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-blue-500" />
                <a href="tel:+911234567890" className="hover:text-blue-500 transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-blue-500" />
                <a href="mailto:info@feastflow.com" className="hover:text-blue-500 transition-colors">
                  info@feastflow.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on special offers and events.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Our Kitchen. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;