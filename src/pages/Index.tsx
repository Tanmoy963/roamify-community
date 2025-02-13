
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TravelFeed from "../components/TravelFeed";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="animate-fade-in">
        <Hero />
        <Stats />
        <TravelFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
