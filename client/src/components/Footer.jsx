import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import ContactSection from "./ContactSection";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <ContactSection />
      <div className="footer">
      </div>
    </footer>
  );
}