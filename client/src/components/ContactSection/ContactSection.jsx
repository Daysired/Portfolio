import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact">
      <div className="contact-header"> Get In Touch! </div>
      <div className="contact-icons">
        <div className="email">
          <a href="mailto: daysireddejesus@odetocode.tech">
            <FontAwesomeIcon className="icons" icon={faAt} />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/daysired-de-jesus/">
            <FontAwesomeIcon className="icons" icon={faLinkedin} />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/Daysired">
            <FontAwesomeIcon className="icons" icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
}
