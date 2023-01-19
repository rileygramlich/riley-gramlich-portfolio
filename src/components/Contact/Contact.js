import React, {useRef, useState, useEffect} from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const targetRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {;
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      })
      observer.observe(targetRef.current);
    }, []);


  const className = "Contact hidden " + (isVisible ? "show" : "") 


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div ref={targetRef} className={className}>
      <h1 className="title">Email Me!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="user_name" className="input-name"/>
        <label>Email:</label>
        <input type="email" name="user_email" className="input-email"/>
        <label>Message:</label>
        <textarea name="message" className="input-class"/>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
