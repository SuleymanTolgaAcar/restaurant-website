import React from "react";
import "../styles/contact.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Contact({ setShowContact, scroll }) {
  return (
    <div className="contact-container">
      <div className="contact">
        <h1>CONTACT</h1>
        <p>Phone: 123-456-7890</p>
        <p>
          Email:
          <a href="mailto:tolgasuleymanacar@gmail.com">Süleyman Tolga Acar</a>
        </p>
        <p>Address: 1234 Main St, Anytown, USA</p>
        <button
          onClick={() => {
            scroll(0, "auto");
            setShowContact((prev) => !prev);
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}
