import React from "react";
import "../styles/menus.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";

export default function Menus({ scroll }) {
  const [activeMenu, setActiveMenu] = useState("breakfast");

  const menus = {
    breakfast: [
      {
        name: "Breakfast Burrito",
        description: "Eggs, potatoes, cheese, salsa, sour cream",
        price: "$8.99",
      },
      {
        name: "Sandwich",
        description: "Eggs, cheese, bacon, sausage, ham",
        price: "$8.99",
      },
      {
        name: "Breakfast Plate",
        description: "Eggs, potatoes, bacon, sausage, ham",
        price: "$8.99",
      },
      {
        name: "Omelette",
        description: "Eggs, cheese, bacon, sausage, ham",
        price: "$8.99",
      },
    ],
    lunch: [
      {
        name: "Cheeseburger",
        description: "1/3 lb. burger, lettuce, tomato, onion, pickle",
        price: "$8.99",
      },
      {
        name: "Chicken Sandwich",
        description: "Grilled chicken, lettuce, tomato, onion, pickle",
        price: "$8.99",
      },
      {
        name: "Grilled Cheese",
        description: "American cheese, sourdough bread",
        price: "$8.99",
      },
      {
        name: "BLT",
        description: "Bacon, lettuce, tomato, mayo",
        price: "$8.99",
      },
    ],
    dinner: [
      {
        name: "Steak",
        description: "8 oz. steak, baked potato, salad",
        price: "$18.99",
      },
      {
        name: "Chicken",
        description: "Grilled chicken, baked potato, salad",
        price: "$18.99",
      },
      {
        name: "Fish",
        description: "Grilled fish, baked potato, salad",
        price: "$18.99",
      },
      {
        name: "Pasta",
        description: "Pasta, marinara sauce, salad",
        price: "$18.99",
      },
    ],
  };

  return (
    <main className="outer-container">
      <div className="title-image menus-title-image">
        <div className="title-container">
          <h1>MENUS</h1>
          <button className="arrow-simple" onClick={() => scroll()}>
            <RiArrowDownSLine />
          </button>
        </div>
      </div>
      <div className="menus-btn-container">
        <button
          className={`btn2 ${activeMenu == "breakfast" && "active"}`}
          onClick={() => setActiveMenu("breakfast")}
        >
          BREAKFAST
        </button>
        <button
          className={`btn2 ${activeMenu == "lunch" && "active"}`}
          onClick={() => setActiveMenu("lunch")}
        >
          LUNCH
        </button>
        <button
          className={`btn2 ${activeMenu == "dinner" && "active"}`}
          onClick={() => setActiveMenu("dinner")}
        >
          DINNER
        </button>
      </div>
      <div className="menu">
        {menus[activeMenu].map((item) => {
          return (
            <div className="menu-item" key={item.name}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
