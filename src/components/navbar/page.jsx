"use client";

import {
  faBars,
  faCube,
  faDiagramProject,
  faHandPeace,
  faHeart,
  faMapPin,
  faMeteor,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
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
        className={`fixed inset-0 bg-[#0f1115] opacity-96 transition-transform transform ${
          menuOpen ? "translate-x-0 mr-[8%]" : "translate-x-full"
        } z-50 rounded-lg ml-[8%] my-0`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4 relative my-6">
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FontAwesomeIcon
              icon={faTimes}
              className="w-6 h-6 text-white transition-transform transform hover:scale-110"
            />
          </button>
          <a
            onClick={() => scrollToSection("aboutme")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:cursor-pointer hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            <FontAwesomeIcon
              icon={faMeteor}
              className="w-6 h-6 text-white transition-transform transform hover:scale-180"
            />
            About Me
          </a>
          <a
            onClick={() => scrollToSection("passion")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:cursor-pointer hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="w-6 h-6 text-white transition-transform transform hover:scale-180"
            />
            Passion
          </a>
          <a
            onClick={() => scrollToSection("skills")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:cursor-pointer hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            <FontAwesomeIcon
              icon={faStar}
              className="w-6 h-6 text-white transition-transform transform hover:scale-180"
            />
            Skills
          </a>
          <a
            onClick={() => scrollToSection("attention")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:cursor-pointer hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            <FontAwesomeIcon
              icon={faHandPeace}
              className="w-6 h-6 text-white transition-transform transform hover:scale-180"
            />
            Attention
          </a>
          <a
            onClick={() => scrollToSection("projects")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:cursor-pointer hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            <FontAwesomeIcon
              icon={faDiagramProject}
              className="w-6 h-6 text-white transition-transform transform hover:scale-180"
            />
            Projects
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="block px-4 py-2 text-white transition-all transform hover:scale-125 hover:cursor-pointer hover:text-2xl hover:opacity-100 opacity-50 hover:font-semibold"
          >
            <FontAwesomeIcon
              icon={faMapPin}
              className="w-6 h-6 text-white transition-transform transform hover:scale-180"
            />
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default page;
