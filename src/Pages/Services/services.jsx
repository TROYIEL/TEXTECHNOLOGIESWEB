import Navbar from "../../components/Navbar/navbar.jsx";
import Parttens from "../../components/Parttens/parttens.jsx";
import { Button } from "react-bootstrap";
import { FaUserAlt, FaPaintBrush, FaCube, FaPencilRuler } from "react-icons/fa";

const services = [
  {
    title: "UX Design",
    description:
      "Crafting seamless user experiences with elegant and intuitive design.",
    icon: <FaUserAlt size={32} />,
    color: "#34D399",
  },
  {
    title: "Branding",
    description:
      "Crafting identity, inspiring connection: Your brand's unique story.",
    icon: <FaPaintBrush size={32} />,
    color: "#F87171",
  },
  {
    title: "3D Design",
    description:
      "Creating immersive worlds through intricate and innovative designs.",
    icon: <FaCube size={32} />,
    color: "#3B82F6",
  },
  {
    title: "Illustration",
    description:
      "Capturing moments: A visual journey through time and emotion.",
    icon: <FaPencilRuler size={32} />,
    color: "#8B5CF6",
  },
];

const Services = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${require("servicebg")})` }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-70 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-12 text-white text-center">
          <h2 className="text-4xl font-semibold mb-8">Our Services</h2>

          {/* Horizontal scroll container */}
          <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 py-4 px-2">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 bg-gray-900 bg-opacity-40 rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition-transform hover:scale-105"
              >
                <div
                  className="text-white mb-4 p-4 rounded-full"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>
                <h5 className="text-xl font-medium mb-2">{service.title}</h5>
                <p className="text-sm mb-4">{service.description}</p>
                <Button variant="outline-light" size="sm" className="mt-auto">
                  View more
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-semibold mt-20 mb-8">Our Patterns</h2>
          <Parttens />
        </main>
      </div>
    </div>
  );
};

export default Services;
