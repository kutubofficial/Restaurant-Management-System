import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Specialization from "./components/Specialization";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="font-sans">
      <Header cartCount={cartItems.length} />
      <HeroSection />
      <AboutSection />
      <Specialization cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  );
}

export default App;
