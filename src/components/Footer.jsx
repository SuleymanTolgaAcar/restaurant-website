import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <a
        className="social-media-btn"
        href="https://www.facebook.com"
        target="_blank"
      >
        <BsFacebook />
      </a>
      <a
        className="social-media-btn"
        href="https://instagram.com"
        target="_blank"
      >
        <BsInstagram />
      </a>
      <a
        className="social-media-btn twitter-btn"
        href="https://twitter.com"
        target="_blank"
      >
        <BsTwitter />
      </a>
      <span>
        This restaurant does NOT exist. It's just a website project. All
        addresses and numbers are arbitrary.
      </span>
      <button className="btn1 footer-btn">CAREERS</button>
      <button className="btn1 footer-btn">GIFT CARDS</button>
      <button className="btn1 footer-btn">PRIVACY POLICY</button>
      <button className="btn1 footer-btn">CONTACT</button>
      <button className="btn2 footer-btn">SIGN UP</button>
    </footer>
  );
}
