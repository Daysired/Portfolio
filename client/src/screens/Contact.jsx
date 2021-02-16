import React from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3c1g7f9",
        "template_6ucl8fq",
        e.target,
        "user_MOWMZKlsmhvNG1YsL59tO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        });
        e.target.reset()
  }

  return (
    <div className="contact-container">
      <div className="contact-circle">
        <img className="contact-img" src="https://i.imgur.com/H4t0mRM.png" />
      </div>
      <div className="form-container">
      <h4 className="contact-me">Let's Work Together!</h4>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <input
            className="inputs"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="inputs"
            type="text"
            name="email"
            placeholder="Email"
          />
          <textarea name="message" placeholder="Message" />
          <input className="btn" type="submit" value="Send" />
        </form>
        <h5 className="my-email">{"{  Email: daysireddejesus@odetocode.tech }"}</h5>
      </div>
    </div>
  );
}
