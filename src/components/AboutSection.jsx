const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              ipsa tenetur fugiat odio, magnam deserunt esse doloribus magni
              modi? Autem, saepe voluptatibus. Iusto quisquam voluptatibus est
              ipsum expedita distinctio hic exercitationem beatae ea? Esse
              maxime at, vel et incidunt maiores laudantium, sit adipisci
              sapiente molestiae sequi reprehenderit modi laborum. Placeat.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="text-xl font-bold text-red-600">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="text-xl font-bold text-red-600">50+</h3>
                <p className="text-gray-600">Signature Dishes</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="./images/interior2.jpeg"
              alt="Kitchen"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="./images/interior.jpg"
              alt="Ingredients"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="./images/food.jpeg"
              alt="Dining Area"
              className="w-full h-48 object-cover rounded-lg shadow-lg col-span-2"
            />
          </div>
        </div>

        {/* Chef Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Meet Our Master Chef</h3>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16"
              alt="Chef"
              className="w-48 h-48 object-cover rounded-full shadow-xl border-4 border-white"
            />
          </div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Chef Marco Pierre brings 25 years of international experience to our
            kitchen. Awarded 3 Michelin stars, his creations are a perfect blend
            of art and flavor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
