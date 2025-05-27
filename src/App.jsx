import { useState } from "react";
import AboutSection from "./components/pages/AboutSection";
import Specialization from "./components/pages/Specialization";
import Footer from "./components/pages/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import HeroSection from "./components/pages/HeroSection";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="font-sans">
      <Navbar
        cartCount={cartCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          },
        }}
      />
      <HeroSection />
      <AboutSection />
      <Specialization cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  );
}

export default App;