import { useState } from "react";
import Counter from "../Counter";
import staffMembers from "../data/staffMembers";
import { FcNext, FcPrevious } from "react-icons/fc";

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % staffMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + staffMembers.length) % staffMembers.length
    );
  };

  const currentMember = staffMembers[currentIndex];

  return (
    <section id="About Us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-blue-800">Our Story</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Founded in 2008, our restaurant has been serving authentic cuisine
              with a modern twist. What began as a small family-owned
              establishment has grown into a culinary destination, thanks to our
              commitment to quality ingredients and exceptional service.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our chefs bring a wealth of experience and creativity to the
              kitchen, crafting dishes that blend traditional flavors with
              innovative techniques. We source local and seasonal produce to
              ensure every bite is fresh, flavorful, and memorable.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're joining us for a casual lunch, a romantic dinner,
              or a special celebration, we aim to make every visit feel like a
              warm welcome home. At Our Restaurant, you're not just a customer —
              you're part of our story.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 transition-all hover:shadow-lg">
                <h3 className="text-3xl font-bold text-blue-600">
                  <Counter target={15} suffix="+" />
                </h3>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 transition-all hover:shadow-lg">
                <h3 className="text-3xl font-bold text-blue-600">
                  <Counter target={50} suffix="+" />
                </h3>
                <p className="text-gray-600 mt-2">Signature Dishes</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="./images/interior2.jpeg"
                alt="Restaurant Interior"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="./images/interior.jpg"
                alt="Dining Area"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg col-span-2">
              <img
                src="./images/food.jpeg"
                alt="Our Signature Dish"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-12 text-blue-800">
            Meet Our Team
          </h3>

          <div className="flex items-center justify-center gap-6 relative">
            <button
              onClick={prevMember}
              className="absolute left-110 z-10 p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition"
              title="Previous Member"
            >
              <FcPrevious size={30} />
            </button>

            <div className="w-[440px] bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl">
              <div className="relative group">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm">{currentMember.bio}</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-blue-700">
                  {currentMember.name}
                </h4>
                <p className="text-blue-500 mb-4 text-sm">
                  {currentMember.position}
                </p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {currentMember?.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        <Counter
                          target={stat.value}
                          suffix={stat.label.includes("Awards") ? "+" : ""}
                        />
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={nextMember}
              className="absolute right-110 z-10 p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition"
              title="Next Member"
            >
              <FcNext size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
