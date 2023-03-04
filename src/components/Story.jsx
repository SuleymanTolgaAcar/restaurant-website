import React from "react";
import "../styles/story.css";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Story({ scroll }) {
  return (
    <main className="outer-container">
      <div className="title-image story-title-image">
        <div className="title-container">
          <h1>OUR STORY</h1>
          <button className="arrow-simple" onClick={() => scroll()}>
            <RiArrowDownSLine />
          </button>
        </div>
      </div>
      <div className="sections-container story-sections-container">
        <section className="story-section1">
          <div className="sec-image story-gathering"></div>
          <div className="sec-p-container">
            <h1>HOW IT STARTED</h1>
            <p>
              John and Sarah's passion for cooking began in their childhood,
              where they bonded over their love of food. As they grew older,
              they talked about opening a restaurant together, but it wasn't
              until they gained experience in the industry that they felt ready
              to take the leap. They spent months researching, planning, and
              perfecting a menu that reflected their shared passion for
              homemade, delicious food. Despite facing some obstacles along the
              way, such as securing funding and finding the perfect location,
              they persevered, driven by their love for cooking and their dream
              of owning a restaurant.
            </p>
          </div>
        </section>
        <section className="story-section2">
          <div className="sec-p-container">
            <h1>A SUCCESS STORY</h1>
            <p>
              Their hard work and dedication paid off. The restaurant quickly
              gained a reputation for serving high-quality, homemade meals in a
              welcoming, friendly atmosphere. The community embraced their
              restaurant, and it became a popular spot for locals and tourists
              alike. As their business grew, they expanded to catering and
              special events, further solidifying their reputation as a go-to
              destination for delicious, home-cooked meals. Today, John and
              Sarah's restaurant is a beloved staple in the community, a place
              where people come to enjoy great food and warm, friendly
              conversation. Their success is a testament to their unwavering
              dedication to their craft, their passion for food, and their
              shared dream of creating a welcoming environment where people can
              come together over a shared love of delicious, homemade meals.
            </p>
          </div>
          <div className="sec-image story-steak"></div>
        </section>
      </div>
      <h1>OUR ORIGINAL CREW</h1>
      <div className="portraits-container">
        <div className="portrait-container">
          <div className="portrait-image john"></div>
          <h2 className="portrait-text">John Goodman</h2>
          <h4>Co-Founder</h4>
        </div>
        <div className="portrait-container">
          <div className="portrait-image sarah"></div>
          <h2 className="portrait-text">Sarah Goodman</h2>
          <h4>Co-Founder</h4>
        </div>
      </div>
    </main>
  );
}
