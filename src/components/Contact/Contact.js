import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
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
    <div className="Contact">
      <h1 className="title">Contact Me!</h1>
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
