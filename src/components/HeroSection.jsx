const HeroSection = () => {
  return (
    <section className="pt-20 bg-red-50">
      <div id="home" className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-6">Experience Fine Dining</h1>
          <p className="text-lg mb-8">Where every bite tells a story</p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:cursor-pointer hover:bg-red-700">
            Book Your Table
          </button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
            alt="Restaurant"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
