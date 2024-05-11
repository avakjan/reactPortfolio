import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import useScrollListener from "./Pages/Home/hooks/useScrollListener/index.js";
import "./App.css"

function App() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const scroll = useScrollListener();

  useEffect(() => {
    const handleNavVisibility = () => {
      if (scroll.y > lastScrollY && scroll.y > 100) {
        // Scrolling down
        if (!navHidden) setNavHidden(true);
      } else if (scroll.y < lastScrollY) {
        // Scrolling up
        if (navHidden) setNavHidden(false);
      }
      setLastScrollY(scroll.y);
    };

    handleNavVisibility();
  }, [scroll.y, lastScrollY, navHidden]);

  return (
    <div className="App">
      <Router>
        <nav className={navHidden ? "nav-bar--hidden" : ""}>
          <Navbar/>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
