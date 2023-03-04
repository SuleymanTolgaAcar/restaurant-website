import { useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Menus from "./components/Menus";
import Story from "./components/Story";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [activePage, setActivePage] = useState("home");
  function scroll(multiplier = 1, behavior = "smooth") {
    window.scrollTo({
      top: window.innerHeight * multiplier,
      behavior: behavior,
    });
  }

  return (
    <div className="app">
      <Navbar
        scroll={scroll}
        setShowContact={setShowContact}
        setActivePage={setActivePage}
        activePage={activePage}
      />
      {showContact && (
        <Contact setShowContact={setShowContact} scroll={scroll} />
      )}
      <Routes>
        <Route
          path="/"
          exact
          element={<Home scroll={scroll} setActivePage={setActivePage} />}
        />
        <Route path="/location" element={<Location />} />
        <Route path="/menus" element={<Menus scroll={scroll} />} />
        <Route path="/story" element={<Story scroll={scroll} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
