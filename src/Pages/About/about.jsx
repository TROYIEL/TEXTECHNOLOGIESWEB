import "./about.css";
import aboutBackground from "../../assets/about-bg.jpg";
import Navbar from "../../components/Navbar/navbar.jsx";
import Aboutmotion from "../../components/Aboutmotion/aboutmotion.jsx";

const About = () => {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      <div className="about-overlay">
        <Navbar />
        <div className="about-text">
          <h1 className="about-heading1">ABOUT US</h1>
          <h1>
            At TEX TECHNOLOGIES, we are passionate about transforming
            <br />
            ideas into impactful digital solutions. Founded with a vision <br />
            to innovate, empower, and connect, we specialize in
            <br />
            delivering cutting-edge technology services
            <br />
            tailored to meet the needs of modern
            <br />
            businesses and individuals.
          </h1>
        </div>
        <div className="about-text2">
          <h1 className="about-heading1">Who We Are</h1>
          <h1>
            We are a team of forward-thinking developers, designers, and IT
            professionals committed to excellence and innovation. Our mission is
            to bridge the gap between technology and user needs, ensuring every
            solution we provide is intuitive, scalable, and future-ready.
          </h1>
        </div>
      </div>
      <div>
        <Aboutmotion />
      </div>
    </div>
  );
};

export default About;
