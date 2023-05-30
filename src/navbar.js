import React, { useState } from "react";
import "./navbar.css";
import Logo from "./assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleItemClick = (index) => {
    setIsMobile(false);
    setActiveItem(index);
  };

  const navItems = [
    { text: "Home" },
    { text: "Chapters" },
    { text: "Execom" },
    { text: "Contact Us" },
    { text: "Join IEEE" },
  ];

  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo-img" className="logo-resizer" />
        </div>
        <div className={isMobile ? "nav-items-mobile" : "nav-items"}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="/"
                className={index === activeItem ? "active" : ""}
                onClick={() => handleItemClick(index)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </div>
        <button className="mobile-menu-icon" onClick={handleToggleMenu}>
          {isMobile ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
