import Background from "../../components/Background/background.jsx";
import Navbar from "../../components/Navbar/navbar.jsx";
import Loader from "../../components/Loader/loader.jsx";
import Typing from "../Hero/Typing/typingtext.jsx";

const Hero = ({ setherocount, herocount }) => {
  return (
    <div className="relative z-0 min-h-screen flex flex-col">
      
      <Background herocount={herocount} />

      
      <header className="w-full z-10">
        <Navbar />
      </header>

      
      <main className="flex-grow flex flex-col justify-center items-center px-4 text-center relative z-10">
        
        <Loader className="mb-4" />

        <div className="text-center mt-8 mb-12 text-4xl font-bold">
          <Typing  />
        </div>
      </main>
    </div>
  );
};

export default Hero;
