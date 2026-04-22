import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="contact container">
      <h2>Contact Us</h2>

      {submitted ? (
        <p>✅ Message sent successfully!</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input placeholder="Subject" />
          <textarea placeholder="Message" required />

          <button className="btn btn--primary">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}