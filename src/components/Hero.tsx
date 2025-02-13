
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Beautiful Indian landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Discover India's Hidden Gems
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in delay-100">
          Join a community of passionate travelers exploring the diverse beauty of India.
          Share stories, find inspiration, and plan your next adventure.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-200">
          <Button size="lg" variant="default">
            Start Exploring
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            Share Your Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
