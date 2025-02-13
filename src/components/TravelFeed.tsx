
import { Card } from "./ui/card";

const destinations = [
  {
    id: 1,
    title: "The Mystical Valleys of Ladakh",
    image: "/placeholder.svg",
    description: "Experience the breathtaking landscapes and ancient monasteries",
    author: "Priya Sharma",
    likes: 1240,
  },
  {
    id: 2,
    title: "Backwaters of Kerala",
    image: "/placeholder.svg",
    description: "Cruise through serene waters surrounded by lush greenery",
    author: "Rahul Verma",
    likes: 890,
  },
  {
    id: 3,
    title: "Royal Palaces of Rajasthan",
    image: "/placeholder.svg",
    description: "Explore the magnificent heritage of royal India",
    author: "Anita Desai",
    likes: 1560,
  },
];

const TravelFeed = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden hover-scale glass-card"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{destination.author}</span>
                  <span className="text-sm text-primary">{destination.likes} likes</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelFeed;
