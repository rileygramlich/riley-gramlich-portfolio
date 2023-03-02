import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const targetRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(targetRef.current);
  }, []);

  const className = "Contact hidden " + (isVisible ? "show" : "");

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_ay4nvn7", "template_iw49qpe", e.target, "KPjUKtAwiIoLni6eI")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div ref={targetRef} className={className} id="contact">
      <h1 className="title">Email Me!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="name" className="input-name" />
        <label>Email:</label>
        <input type="email" name="email" className="input-email" />
        <label>Subject:</label>
        <input name="subject" className="input-class" />
        <label>Message:</label>
        <textarea name="message" className="input-class" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
