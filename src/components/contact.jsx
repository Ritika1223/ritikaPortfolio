import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_odwl7as', 'template_db1n8d8', form.current, {
        publicKey: 'UcsRAsk6jlWBlAJKJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send message, please try again.");
        },
      );
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form
          className="form"
          onSubmit={sendEmail}
          data-form
          ref={form}
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="user_name"
              className="form-input"
              placeholder="Full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-form-input
            />

            <input
              type="email"
              name="user_email"
              className="form-input"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-form-input
            />
          </div>

          <textarea
            name="message"
            rows="15"
            className="form-input"
            placeholder="Your Message"
            required
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            data-form-input
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={msg === "" && email === ""}
            data-form-btn
          >
            Send Message
          </button>
        </form>

        <section className="mapbox mt-6" data-mapbox>
          <figure>
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438381.6894012543!2d77.32244047459888!3d28.98446205899709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f457b66325%3A0x42faa83387a6be5e!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711734020306!5m2!1sen!2sin"
      width="400"
              height="300"
              loading="lazy"
              title="location"
            ></iframe>
          </figure>
        </section>
      </section>
    </article>
  );
}
