import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
    const targetRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [status, setStatus] = useState("");

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
        setStatus("Sending...");

        emailjs
            .sendForm(
                "service_ay4nvn7",
                "template_iw49qpe",
                e.target,
                "KPjUKtAwiIoLni6eI",
            )
            .then(
                () => {
                    setStatus("Thanks. Your message has been sent.");
                    e.target.reset();
                },
                () => {
                    setStatus("Sorry, something went wrong. Please try again.");
                },
            );
    }

    return (
        <section ref={targetRef} className={className} id="contact">
            <h1 className="title">Start a Project Conversation</h1>
            <p className="contact-subtitle">
                Tell me what your team is trying to improve, and I will follow
                up with a practical next step.
            </p>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="input-class"
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="input-class"
                    required
                />

                <label htmlFor="company">Company (optional)</label>
                <input
                    id="company"
                    type="text"
                    name="company"
                    className="input-class"
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className="input-class"
                    rows="5"
                    required
                />

                <button type="submit" className="contact-submit">
                    Contact Us
                </button>
                {status && <p className="contact-status">{status}</p>}
            </form>
        </section>
    );
}
