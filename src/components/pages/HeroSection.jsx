import { MdStarRate } from "react-icons/md";
import Counter from "../Counter";
const HeroSection = () => {
  return (
    <section className="relative pt-20 bg-blue-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-200 rounded-full filter blur-3xl"></div>
      </div>

      <div
        id="home"
        className="container mx-auto px-9 py-16 md:py-24 flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 z-10">
          <div className="mb-1 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-600"></span>
            <span className="text-blue-600 font-medium">SINCE 1958</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Experience <span className="text-blue-600">Authentic</span> Culinary
            Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
            Discover a world of flavors crafted with passion by our
            award-winning chefs. Our seasonal menu celebrates local ingredients
            with global inspiration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Book Your Table
            </button>
            <button className="border-2 cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
              View Our Menu
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                <Counter target={15} suffix="+" />
              </div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                <Counter target={50} suffix="+" />
              </div>
              <div className="text-gray-600 text-sm">Signature Dishes</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-2xl md:text-3xl font-bold text-blue-600 gap-1">
                <Counter target={4.8} />
                <MdStarRate className="text-blue-600" />
              </div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 relative z-10">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              alt="Restaurant dining area with elegant decor"
              className="rounded-xl shadow-2xl w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Opening Hours</div>
                  <div className="text-sm text-gray-600">
                    Mon-Sun: 10:00 am - 11:00 pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating food icons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex gap-8 z-0">
        {["🍝", "🍷", "🍣", "🍰", "☕"].map((icon, index) => (
          <div
            key={index}
            className="text-3xl opacity-70 animate-float"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
