import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire prêt pour API :", form);
  };

  return (
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nom
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            required
            onChange={handleChange}
          />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;