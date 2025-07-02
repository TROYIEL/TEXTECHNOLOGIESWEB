import "./contact.css";
import Navbar from "../../components/Navbar/navbar.jsx";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left">
          <h1>Get in touch</h1>

          <div className="radio-group">
            <label>
              <input type="radio" name="type" /> Graphic Designing
            </label>
            <label>
              <input type="radio" name="type" /> Web Development
            </label>
            <label>
              <input type="radio" name="type" /> Motion Graphics
            </label>
            <label>
              <input type="radio" name="type" /> Networking
            </label>
            <label>
              <input type="radio" name="type" /> Consulting
            </label>
          </div>

          <form>
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />

            <textarea placeholder="Message" rows="4"></textarea>

            <button className="btn" type="submit">
              Send message
            </button>
          </form>
        </div>
        <div className="right">
          <img src="src/assets/contact1.jpg" alt="Abstract" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
