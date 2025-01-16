import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-us">
      <h2>Contact Us</h2>
      <form>
        <label for="name"> Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
        <label for="name"> Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
        />
        <label for="message"> Message :</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Your message"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
