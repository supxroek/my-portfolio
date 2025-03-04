"use client";

import { faBars, faCube, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="flex justify-between items-center sticky top-10 z-50">
      <a href="/">
        <FontAwesomeIcon icon={faCube} className="w-6 h-6" />
      </a>

      <div className="flex space-x-4">
        <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
        <a onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </a>
      </div>

      <div
        className={`fixed inset-0 bg-black opacity-90 transition-transform transform ${
          menuOpen ? "translate-x-0 mr-[8%]" : "translate-x-full"
        } z-50 rounded-lg ml-[8%] my-6`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4 relative">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FontAwesomeIcon
              icon={faTimes}
              className="w-6 h-6 text-white transition-transform transform hover:scale-110"
            />
          </button>
          <a
            onClick={() => scrollToSection("aboutme")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            About Me
          </a>
          <a
            onClick={() => scrollToSection("passion")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            Passion
          </a>
          <a
            onClick={() => scrollToSection("skills")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            Skills
          </a>
          <a
            onClick={() => scrollToSection("attention")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            Attention
          </a>
          <a
            onClick={() => scrollToSection("projects")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            Projects
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default page;
