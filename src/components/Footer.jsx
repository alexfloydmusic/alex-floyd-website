import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <FaRegCopyright /> 2025 Alex Floyd
      </div>
      <div className="social-media-links">
        <Link to="https://www.instagram.com/alexfloyd_music/"
              target="_blank"
              rel="noopener noreferrer"><FaInstagram /></Link>
        <Link to="https://www.youtube.com/@AlexFloyd-Music"
              target="_blank"
              rel="noopener noreferrer"> <FaYoutube /></Link>
        <Link to="https://www.tiktok.com/@alexfloyd_music"
              target="_blank"
              rel="noopener noreferrer"><FaTiktok /></Link>
      </div>
    </footer>
  );
}

export default Footer;
