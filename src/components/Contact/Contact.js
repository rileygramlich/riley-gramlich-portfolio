import React from "react"

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <h1 className="title">Contact</h1>
            <form action="" className="email-form">
                <label>Email:</label>
                <input type="text" className="email" /><br />
                <label htmlFor="">Subject:</label>
                <input type="text" className="subject" /><br />
                <label htmlFor="">Content:</label>
                <input type="text" className="content" /><br />
                <button type="submit">Send Email</button>
            </form>
        </div>
    )
}