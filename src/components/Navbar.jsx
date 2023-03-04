import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({
  scroll,
  setShowContact,
  setActivePage,
  activePage,
}) {
  return (
    <nav>
      <Link
        className={`home-btn ${activePage === "home" ? "active" : ""}`}
        to="/"
        onClick={() => {
          scroll(0);
          setActivePage("home");
        }}
      ></Link>
      <Link
        className={`btn1 ${activePage === "location" ? "active" : ""}`}
        to="/location"
        onClick={() => {
          scroll(0, "auto");
          setActivePage("location");
        }}
      >
        HOURS & LOCATION
      </Link>
      <Link
        className={`btn1 ${activePage === "menus" ? "active" : ""}`}
        to="/menus"
        onClick={() => {
          scroll(0, "auto");
          setActivePage("menus");
        }}
      >
        MENUS
      </Link>
      <Link
        className={`btn1 ${activePage === "story" ? "active" : ""}`}
        to="/story"
        onClick={() => {
          scroll(0, "auto");
          setActivePage("story");
        }}
      >
        OUR STORY
      </Link>
      <button
        className="btn2"
        onClick={() => {
          scroll(0, "auto");
          setShowContact((prev) => !prev);
        }}
      >
        CONTACT
      </button>
    </nav>
  );
}
