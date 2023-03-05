import React from "react";
import "../styles/home.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Home({ scroll, setActivePage }) {
  return (
    <main className="home">
      <div className="image logo-large"></div>
      <div className="mottos">
        <span>COMFORTS</span>
        <div className="dot"></div>
        <span>CLASSICS</span>
        <div className="dot"></div>
        <span>CONVENIENCE</span>
      </div>
      <button className="arrow-btn" onClick={() => scroll(0.9)}>
        <span>
          <AiOutlineArrowDown />
        </span>
      </button>
      <div className="sections-container">
        <section className="menus-section">
          <div className="sec-image home-burger"></div>
          <div className="sec-p-container">
            <h1>OUR MENUS</h1>
            <p>
              Our creative, food and beverage program combines satisfying
              staples with imaginative twists. From boozy drag show brunches,
              classic American breakfasts, special occasions and everything in
              between, The Original has something for everyone.
            </p>
            <Link
              className="btn2"
              to="/menus"
              onClick={() => {
                scroll(0, "auto");
                setActivePage("menus");
              }}
            >
              VIEW MENUS
            </Link>
          </div>
        </section>
        <section className="story-section">
          <div className="sec-p-container">
            <h1>OUR STORY</h1>
            <p>
              The Original is a family-owned and operated restaurant located in
              the heart of the Castro District in San Francisco. We are a
              neighborhood restaurant that has been serving the community for
              over 40 years.
            </p>
            <Link
              className="btn2"
              to="/story"
              onClick={() => {
                scroll(0, "auto");
                setActivePage("story");
              }}
            >
              VIEW OUR STORY
            </Link>
          </div>
          <div className="sec-image home-restaurant"></div>
        </section>
      </div>
    </main>
  );
}
